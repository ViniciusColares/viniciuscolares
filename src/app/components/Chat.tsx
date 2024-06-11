"use client";

import { Input } from "@headlessui/react";
import { useChat } from "ai/react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import {
  UserCircleIcon,
  PaperAirplaneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Chat() {
  // Animation controls
  const triggerControl = useAnimation();
  const chatControl = useAnimation();

  // Ref controls
  const chatContent = useRef<HTMLDivElement>(null);
  const chatContainer = useRef<HTMLDivElement>(null);

  // Local state
  const [isOpenChat, setIsOpenChat] = useState(false);

  // Integration
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });

  // METHODS
  const scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } =
      chatContent.current as HTMLDivElement;
    if (scrollHeight >= scrollTop + offsetHeight) {
      chatContent.current?.scrollTo(0, scrollHeight + 200);
    }
  };

  const handleKeyDown = ({
    key,
    metaKey,
    ctrlKey,
  }: KeyboardEvent<HTMLInputElement>) => {
    const form = document.querySelector("form");
    if (form && key == "Enter") {
      if (input.length > 10 && (metaKey || ctrlKey)) form.requestSubmit();
    }
  };

  const renderAvatar = (isUser: boolean) => {
    return isUser ? (
      <UserCircleIcon className="flex self-start ml-2" width={32} height={32} />
    ) : (
      <Image
        className="flex self-start mr-2"
        alt="Avatar"
        width={32}
        height={32}
        priority={false}
        src={"/no-bg_face.png"}
      />
    );
  };

  useEffect(() => {
    chatContent.current && scroll();
  }, [messages]);

  useEffect(() => {
    (async () => {
      if (!chatContainer?.current) return;

      if (isOpenChat) {
        await triggerControl.start({ y: 64, rotate: -360, scale: 0 });
        await chatControl.start({ y: 0, scale: 1 });
      } else {
        await chatControl.start({
          y: chatContainer?.current?.offsetHeight + 20,
          scale: 0,
        });
        await triggerControl.start({ y: 0, rotate: 0, scale: 1 });
      }
    })();
  }, [isOpenChat, triggerControl, chatControl]);

  return (
    <section className="fixed justify-end bottom-0 right-0 px-3 pb-3 w-full gap-4 z-20 md:max-w-128">
      <motion.div
        initial={{ y: 64, rotate: -360, scale: 0 }}
        animate={triggerControl}
        transition={{
          type: "just",
        }}
        className="flex absolute bottom-3 right-3 shrink ml-auto cursor-pointer"
        onClick={() => setIsOpenChat(true)}
      >
        <ChatBubbleOvalLeftEllipsisIcon
          width={64}
          className="shadow-lg fill-white bg-purple-950 stroke-purple-50 p-3 rounded-full"
        />
      </motion.div>

      <motion.div
        ref={chatContainer}
        initial={{ y: chatContainer?.current?.offsetHeight, scale: 0 }}
        animate={chatControl}
        transition={{
          type: "just",
        }}
        className="flex flex-col relative gap-2 bg-purple-dark min-h-60 bg-opacity-95 rounded-3xl"
      >
        <div className="absolute -right-3 -top-5 justify-end px-4 pt-2 z-20 cursor-pointer">
          <XMarkIcon
            height={36}
            onClick={() => setIsOpenChat(false)}
            className="bg-purple-700 rounded-full p-2 hover:scale-125 transition-transform stroke-purple-50"
          />
        </div>

        <div
          ref={chatContent}
          className={`flex flex-col flex-1 relative overflow-y-auto h-full max-h-[78svh] md:max-h-[50svh] text-white space-y-4 px-4 pt-6 fade-scroll-out`}
        >
          <div className="flex">
            <Image
              className="flex xs:hidden self-start mr-2 mt-1"
              alt="Avatar"
              width={32}
              height={32}
              priority={false}
              src={"/no-bg_face.png"}
            />
            <div className="flex flex-col space-y-3">
              <div className="flex w-fit p-2 bg-purple-950 bg-opacity-25 rounded-md">
                <p>Oi! Como eu posso te ajudar?</p>
              </div>
            </div>
          </div>

          {messages.map((msg) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={msg.id}
                className={`flex ${isUser && "flex-row-reverse"}`}
              >
                {renderAvatar(isUser)}
                <div
                  className={`flex flex-col w-fit p-2 bg-purple-950  ${
                    isUser ? "bg-opacity-15" : "bg-opacity-25"
                  } rounded-md ${isUser ? "items-end" : ""}`}
                >
                  <p className="text-purple-50">{msg.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form
          name="chat"
          className="flex space-x-4 p-2 rounded-full bg-purple-dark bg-opacity-95"
          onSubmit={(event) => {
            console.log({ event });
            if (input?.length == 0) return;
            handleSubmit(event);
          }}
        >
          <Input
            type="text"
            value={input}
            autoComplete="off"
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            placeholder="Me pergunte o que precisar..."
            className="flex-grow p-2 bg-[transparent] text-purple-50 focus:outline-none resize-none shadow-lg"
            onFocus={() => setIsOpenChat(true)}
          />
          <button type="submit">
            <PaperAirplaneIcon
              className="cursor-pointer stroke-purple-50"
              width={32}
              type="submit"
            />
          </button>
        </form>
      </motion.div>
    </section>
  );
}

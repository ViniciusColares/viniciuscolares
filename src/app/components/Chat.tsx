"use client";

import { Input } from "@headlessui/react";
import { useChat } from "ai/react";
import Image from "next/image";
import { KeyboardEvent, useEffect, useRef } from "react";
import { UserCircleIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function Chat() {
  const chatContainer = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });

  // METHODS
  const scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } =
      chatContainer.current as HTMLDivElement;
    if (scrollHeight >= scrollTop + offsetHeight) {
      chatContainer.current?.scrollTo(0, scrollHeight + 200);
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
        src={"/no-bg_face.png"}
      />
    );
  };

  useEffect(() => {
    scroll();
  }, [messages]);

  return (
    <section
      style={{ maxHeight: "calc(100dvh - 100px)" }}
      className="grid grid-rows-[1fr_50px] w-full max-w-screen-lg mx-auto pb-4 pl-4 gap-4"
    >
      <div
        ref={chatContainer}
        className="overflow-y-auto max-h-[79svh] flex flex-col flex-1 space-y-4 pr-4 fade-top-out"
      >
        <div className="flex mb-auto mt-10">
          <Image
            className="flex xs:hidden self-start mr-2 mt-1"
            alt="Avatar"
            width={42}
            height={42}
            src={"/no-bg_face.png"}
          />
          <div className="flex flex-col space-y-3">
            <div className="flex w-fit p-2 bg-purple-100 bg-opacity-5 rounded-md">
              <h1 className="text-2xl">Oi! Me chamo Vinícius Colares</h1>
            </div>
            <div className="flex w-fit p-2 bg-purple-100 bg-opacity-5 rounded-md">
              <p>
                Sou engenheiro de software front-end desde 2010, especialista em
                UX/UI, atualmente focado no ecosistema React, mas já fiz de tudo
                um pouco na web.
              </p>
            </div>
            <div className="flex w-fit p-2 bg-purple-100 bg-opacity-5 rounded-md">
              <p>
                Quando eu cheguei aqui, nem tudo era mato, mas era tudo tabela.
                Avancei no mercado junto com o movimento{" "}
                <a href="https://tableless.com.br" target="_blank">
                  Tableless
                </a>{" "}
                e vivi a guerra dos navegadores e vi nascer todo o movimento que
                transformou a forma de se fazer front-end.
              </p>
            </div>
            <div className="flex w-fit p-2 bg-purple-100 bg-opacity-5 rounded-md">
              <p>
                Já fui o ninja do JQuery, evolui minha escrita com Coffee
                Script, aprendi split code com Require.js, me viciei em
                automatizar tarefas com Gulp.js, usei inúmeros frameworks CSS do
                mercado, já criei plugins, extensões... Vixe! Muita coisa.
              </p>
            </div>
            <div className="flex w-fit p-2 bg-purple-100 bg-opacity-5 rounded-md">
              <p>
                Quiser saber qualquer coisa, é só me perguntar, estou à
                disposição pra responder, e se quiser me enviar uma proposta é
                só clicar ali em cima, vou ficar muito feliz.
              </p>
            </div>
            <div className="flex w-fit p-2 bg-purple-100 bg-opacity-5 rounded-md">
              <p>O que você quer saber?</p>
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
              <p className="flex w-fit p-2 bg-purple-100 bg-opacity-5 rounded-md">
                {msg.content}
              </p>
            </div>
          );
        })}
      </div>

      <form className="flex space-x-4 pr-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          value={input}
          autoFocus={true}
          data-autoComplete={false}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          placeholder="Write me your question..."
          className="flex-grow p-2 rounded bg-opacity-30 bg-gray-950 text-purple-50 focus:outline-none resize-none"
        />
        <button
          type="submit"
          className="uppercase text-xs justify-center text-purple-100"
        >
          <PaperAirplaneIcon width={32} type="submit" />
          <span>send</span>
        </button>
      </form>
    </section>
  );
}

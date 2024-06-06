"use client";

import { Input } from "@headlessui/react";
import { useChat } from "ai/react";
import Image from "next/image";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { UserCircleIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function Chat() {
	const [isOpenChat, setIsOpenChat] = useState(true);
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

	const handleImperativeSubmitForm = () => {
		const el = document.querySelector("form[name='chat']") as HTMLFormElement;
		el?.requestSubmit();
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
		scroll();
	}, [messages]);

	return (
		<section
			onBlur={() => setIsOpenChat(false)}
			className="fixed flex flex-col right-4 bottom-0 w-full max-w-96 gap-4 z-20"
		>
			<div
				ref={chatContainer}
				className={`${
					isOpenChat ? "translate-y-0" : "translate-y-144"
				} flex flex-col flex-1 overflow-y-auto max-h-[50dvh] text-white space-y-4 px-4
        pt-4 pb-4 bg-purple-dark bg-opacity-95 rounded-xl fade-top-out -z-10 transition-all`}
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
							<p
								className={`flex w-fit p-2 ${
									isUser ? "bg-gray-950" : "bg-purple-950"
								}  ${isUser ? "bg-opacity-15" : "bg-opacity-25"} rounded-md`}
							>
								{msg.content}
							</p>
						</div>
					);
				})}
			</div>

			<form
				name="chat"
				className="flex space-x-4 p-2 mb-4 rounded-full bg-purple-dark bg-opacity-95"
				onSubmit={handleSubmit}
			>
				<Input
					type="text"
					value={input}
					autoComplete="off"
					onKeyDown={handleKeyDown}
					onChange={handleInputChange}
					placeholder="Me pergunte o que precisar..."
					className="flex-grow p-2 bg-[transparent] text-purple-50 focus:outline-none resize-none"
					onFocus={() => setIsOpenChat(true)}
				/>
				{input.length > 6 && (
					<PaperAirplaneIcon
						className="cursor-pointer"
						onClick={handleImperativeSubmitForm}
						width={32}
						type="submit"
					/>
				)}
			</form>
		</section>
	);
}

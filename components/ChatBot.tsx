"use client";

import { useState } from "react";
import { botData } from "../data/botData";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; text: string }[]
  >([]);
  const [typing, setTyping] = useState(false);

  const handleOpen = () => {
    setOpen(!open);

    if (!open && messages.length === 0) {
      setMessages([
        { type: "bot", text: "Namaste 👋 Welcome to Shubh Milan." },
        { type: "bot", text: "How can we help you today?" },
      ]);
    }
  };

  const handleQuestionClick = (question: string, answer: string) => {
    setMessages((prev) => [...prev, { type: "user", text: question }]);
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { type: "bot", text: answer }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-24 right-6 bg-rose-700 text-white w-14 h-14 rounded-full shadow-lg hover:bg-rose-800 transition flex items-center justify-center text-xl z-50"
      >
        💬
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-40 right-6 w-80 max-w-[90%] bg-white border rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">

          {/* Header */}
          <div className="bg-rose-700 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold text-sm">
              Shubh Milan Assistant
            </h3>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-sm"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50 max-h-64">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-xs p-2 rounded-lg max-w-[75%] ${
                  msg.type === "user"
                    ? "bg-rose-200 ml-auto"
                    : "bg-white border"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="text-xs p-2 bg-white border rounded-lg w-fit">
                Typing...
              </div>
            )}
          </div>

          {/* Questions */}
          <div className="p-3 border-t space-y-2 bg-white">
            {botData.slice(0, 4).map((item, index) => (
              <button
                key={index}
                onClick={() =>
                  handleQuestionClick(item.question, item.answer)
                }
                className="w-full text-left text-xs border p-2 rounded hover:bg-rose-50 transition"
              >
                {item.question}
              </button>
            ))}

            <a
              href="https://wa.me/919988467270"
              target="_blank"
              className="block text-center text-green-600 text-xs font-semibold mt-2"
            >
              Talk on WhatsApp →
            </a>
          </div>

        </div>
      )}
    </>
  );
}

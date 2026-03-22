"use client";

import { useState } from "react";
import { botData } from "../data/botData";
import { AnimatePresence, motion } from "framer-motion";

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
        { type: "bot", text: "How can we help you today with your matrimonial search?" },
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
        className="fixed bottom-24 right-6 bg-[#4A5D4E] text-[#F9F8F6] w-14 h-14 rounded-full shadow-lg hover:bg-[#3A493D] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center text-2xl z-50"
      >
        💬
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-40 right-6 w-80 max-w-[90%] bg-white border border-[#EBE9E1] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden z-50"
          >

            {/* Header */}
            <div className="bg-[#4A5D4E] text-[#F9F8F6] p-5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] text-xs font-bold">SM</div>
                <h3 className="font-semibold text-sm">
                  Shubh Milan Assistant
                </h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[#F9F8F6] text-lg hover:text-[#D1D9D3] transition-colors"
                title="Close chat"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-5 space-y-4 overflow-y-auto bg-[#F9F8F6] max-h-72">
              {messages.map((msg, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index}
                  className={`text-sm p-3 rounded-2xl max-w-[80%] shadow-sm ${
                    msg.type === "user"
                      ? "bg-[#EBE9E1] text-[#2C2C2C] ml-auto rounded-tr-sm"
                      : "bg-white text-[#595959] border border-[#EBE9E1] mr-auto rounded-tl-sm"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {typing && (
                <div className="text-sm p-3 bg-white text-[#595959] border border-[#EBE9E1] rounded-2xl rounded-tl-sm w-fit shadow-sm">
                  <span className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-[#4A5D4E] rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[#4A5D4E] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-[#4A5D4E] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </span>
                </div>
              )}
            </div>

            {/* Questions */}
            <div className="p-4 border-t border-[#EBE9E1] space-y-2 bg-white">
              <p className="text-xs text-[#A1ACA4] mb-2 font-medium px-1">Suggested Questions:</p>
              {botData.slice(0, 4).map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleQuestionClick(item.question, item.answer)
                  }
                  className="w-full text-left text-xs border border-[#EBE9E1] text-[#4A5D4E] p-2.5 rounded-xl hover:bg-[#EBE9E1] hover:text-[#2C2C2C] transition-colors duration-200"
                >
                  {item.question}
                </button>
              ))}

              <a
                href="https://wa.me/919988467270"
                target="_blank"
                className="block text-center text-[#5C7060] text-xs font-semibold mt-4 hover:text-[#3A493D] transition-colors"
              >
                Talk on WhatsApp instead →
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

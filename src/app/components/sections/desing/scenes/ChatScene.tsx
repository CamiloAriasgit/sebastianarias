"use client";

import { motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { LeadMessage, ChatExchange } from "../whatsapp-flow.types";

interface Props {
  progress: MotionValue<number>;
  contact: LeadMessage;
  exchange: ChatExchange;
}

// step: 1 = header + mensaje del lead (juntos, desde el inicio),
// 2 = respuesta, 3 = confirmación
export default function ChatScene({ progress, contact, exchange }: Props) {
  const [step, setStep] = useState(1);

  useMotionValueEvent(progress, "change", (latest) => {
    if (latest < 0.4) setStep(1);
    else if (latest < 0.75) setStep(2);
    else setStep(3);
  });

  return (
    <div className="w-[92vw] sm:w-full max-w-md -mr-8 sm:mr-0 px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-5"
      >
        <div className={`w-11 h-11 rounded-full ${contact.avatarColor} flex items-center justify-center text-white font-semibold shrink-0`}>
          {contact.name.charAt(0)}
        </div>
        <p className="font-semibold text-gray-900">{contact.name}</p>
      </motion.div>

      <div className="flex flex-col gap-3">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-gray-800 shadow-sm max-w-[75%]"
        >
          {exchange.leadMessage}
        </motion.p>

        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-end bg-emerald-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm shadow-sm max-w-[75%]"
          >
            {exchange.agentReply}
          </motion.p>
        )}
        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="self-start bg-white rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-gray-800 shadow-sm max-w-[75%]"
          >
            {exchange.leadConfirmation}
          </motion.p>
        )}
      </div>
    </div>
  );
}
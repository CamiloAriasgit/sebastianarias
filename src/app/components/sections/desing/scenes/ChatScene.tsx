"use client";

import { motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { LeadMessage, ChatExchange } from "../whatsapp-flow.types";

interface Props {
  progress: MotionValue<number>;
  highlightedMessage: LeadMessage;
  exchange: ChatExchange;
}

export default function ChatScene({ progress, highlightedMessage, exchange }: Props) {
  const [step, setStep] = useState(0); // 0 header, 1 lead, 2 reply, 3 confirmación
  const [closing, setClosing] = useState(false);

  useMotionValueEvent(progress, "change", (latest) => {
    if (latest < 0.2) setStep(0);
    else if (latest < 0.45) setStep(1);
    else if (latest < 0.7) setStep(2);
    else setStep(3);
    setClosing(latest > 0.9);
  });

  return (
    <motion.div
      animate={closing ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
      className="w-full max-w-sm mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
    >
      <motion.div layoutId={`message-${highlightedMessage.id}`} className="bg-emerald-600 px-4 py-3 flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${highlightedMessage.avatarColor} flex items-center justify-center text-white font-semibold`}>
          {highlightedMessage.name.charAt(0)}
        </div>
        <p className="text-white font-medium text-sm">{highlightedMessage.name}</p>
      </motion.div>

      <div className="bg-[#e5ddd5] p-4 flex flex-col gap-2 min-h-[180px]">
        {step >= 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="self-start bg-white rounded-lg px-3 py-2 text-sm max-w-[80%]">
            {exchange.leadMessage}
          </motion.div>
        )}
        {step >= 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="self-end bg-emerald-100 rounded-lg px-3 py-2 text-sm max-w-[80%]">
            {exchange.agentReply}
          </motion.div>
        )}
        {step >= 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="self-start bg-white rounded-lg px-3 py-2 text-sm max-w-[80%]">
            {exchange.leadConfirmation}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
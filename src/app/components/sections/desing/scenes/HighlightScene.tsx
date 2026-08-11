"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { LeadMessage } from "../whatsapp-flow.types";

interface Props {
  progress: MotionValue<number>;
  messages: LeadMessage[];
  highlightedIndex: number;
}

export default function HighlightScene({ progress, messages, highlightedIndex }: Props) {
  const scale = useTransform(progress, [0, 1], [1, 1.1]);
  const msg = messages[highlightedIndex];

  return (
    <div className="relative flex items-center justify-center w-full max-w-sm px-4">
      <motion.div
        style={{ scale }}
        className="bg-white rounded-2xl shadow-2xl p-4 flex gap-3 items-start z-10"
      >
        <div className={`w-10 h-10 rounded-full ${msg.avatarColor} flex items-center justify-center text-white font-semibold shrink-0`}>
          {msg.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm text-gray-900">{msg.name}</p>
          <p className="text-sm text-gray-600">{msg.message}</p>
        </div>
      </motion.div>
    </div>
  );
}
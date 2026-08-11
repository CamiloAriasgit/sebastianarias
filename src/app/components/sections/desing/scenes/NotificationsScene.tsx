"use client";

import { motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { LeadMessage } from "../whatsapp-flow.types";

interface Props {
    progress: MotionValue<number>;
    messages: LeadMessage[];
}

export default function NotificationsScene({ progress, messages }: Props) {
    const [visibleCount, setVisibleCount] = useState(0);

    useMotionValueEvent(progress, "change", (latest) => {
        setVisibleCount(Math.min(Math.ceil(latest * messages.length), messages.length));
    });

    return (
        <div className="flex flex-col gap-3 w-full max-w-sm px-4">
            {messages.map((msg, i) => (
                <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={i < visibleCount ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="bg-white rounded-2xl shadow-lg p-4 flex gap-3 items-start"
                >
                    <div className={`w-10 h-10 rounded-full ${msg.avatarColor} flex items-center justify-center text-white font-semibold shrink-0`}>
                        {msg.name.charAt(0)}
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-gray-900">{msg.name}</p>
                        <p className="text-sm text-gray-600">{msg.message}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
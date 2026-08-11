"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSectionScroll, useActiveScene, useSceneProgress } from "../../../hooks/useSectionScroll";
import { whatsappFunnelScript } from "./whatsapp-flow.data";
import { SceneId } from "./whatsapp-flow.types";
import IconCountingScene from "./scenes/IconCountingScene";
import NotificationsScene from "./scenes/NotificationsScene";
import ChatScene from "./scenes/ChatScene";

const sceneVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
};

const sceneTransition = { duration: 0.35, ease: "easeInOut" } as const;

export default function WhatsAppFunnel() {
  const { scenes, messages, highlightedMessageIndex, chatExchange } = whatsappFunnelScript;
  const { containerRef, scrollYProgress } = useSectionScroll(scenes);
  const [activeScene, setActiveScene] = useState<SceneId>(scenes[0].id);

  useActiveScene(scrollYProgress, scenes, setActiveScene);

  const activeSceneData = scenes.find((s) => s.id === activeScene)!;
  const localProgress = useSceneProgress(scrollYProgress, activeSceneData);

  return (
    <div ref={containerRef} id="whatsapp-funnel" className="relative h-[500dvh]">
      <div className="sticky top-0 h-dvh flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {activeScene === "icon-counting" && (
            <motion.div key="icon-counting" variants={sceneVariants} initial="initial" animate="animate" exit="exit" transition={sceneTransition}>
              <IconCountingScene progress={localProgress} />
            </motion.div>
          )}
          {activeScene === "notifications" && (
            <motion.div key="notifications" variants={sceneVariants} initial="initial" animate="animate" exit="exit" transition={sceneTransition}>
              <NotificationsScene progress={localProgress} messages={messages} />
            </motion.div>
          )}
          {activeScene === "chat" && (
            <motion.div key="chat" variants={sceneVariants} initial="initial" animate="animate" exit="exit" transition={sceneTransition}>
              <ChatScene progress={localProgress} contact={messages[highlightedMessageIndex]} exchange={chatExchange} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
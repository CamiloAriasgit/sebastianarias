"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useSectionScroll, useActiveScene, useSceneProgress } from "../../../hooks/useSectionScroll";
import { whatsappFunnelScript } from "./whatsapp-flow.data";
import { SceneId } from "./whatsapp-flow.types";
import IconCountingScene from "./scenes/IconCountingScene";
import NotificationsScene from "./scenes/NotificationsScene";
import HighlightScene from "./scenes/HighlightScene";
import ChatScene from "./scenes/ChatScene";

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
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            {activeScene === "icon-counting" && <IconCountingScene key="icon-counting" progress={localProgress} />}
            {activeScene === "notifications" && (
              <NotificationsScene key="notifications" progress={localProgress} messages={messages} />
            )}
            {activeScene === "highlight" && (
              <HighlightScene key="highlight" progress={localProgress} messages={messages} highlightedIndex={highlightedMessageIndex} />
            )}
            {activeScene === "chat" && (
              <ChatScene key="chat" progress={localProgress} highlightedMessage={messages[highlightedMessageIndex]} exchange={chatExchange} />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </div>
  );
}
// Nombres de cada escena dentro de la sección inmersiva.
// Este union type es la "fuente de verdad" del orden — reordenar
// el flujo es reordenar el array de escenas en el guion, no tocar lógica.
export type SceneId = "icon-counting" | "notifications" | "chat";
// Un mensaje de notificación tipo WhatsApp
export interface LeadMessage {
  id: string;
  name: string;
  message: string;
  avatarColor?: string; // fallback si no hay imagen de avatar
}

// El intercambio de chat una vez se abre la conversación
export interface ChatExchange {
  leadMessage: string;      // mensaje destacado que "abre" el chat
  agentReply: string;       // respuesta del agente/asesor
  leadConfirmation: string; // confirmación final del lead
}

// Cada escena ocupa un rango de progreso [from, to] dentro de 0–1
export interface Scene {
  id: SceneId;
  from: number;
  to: number;
}

// El guion completo de la sección inmersiva
export interface WhatsAppFunnelScript {
  scenes: Scene[];
  messages: LeadMessage[];       // las 3 notificaciones
  highlightedMessageIndex: number; // cuál de `messages` se destaca y se convierte en chat
  chatExchange: ChatExchange;
}
import { WhatsAppFunnelScript } from "./whatsapp-flow.types";

export const whatsappFunnelScript: WhatsAppFunnelScript = {
  // Rangos de progreso (0 a 1) — ajustables sin tocar componentes.
  // Cambiar el orden aquí cambia el orden del funnel.
scenes: [
  { id: "icon-counting", from: 0.0, to: 0.18 },
  { id: "notifications", from: 0.18, to: 0.55 },
  { id: "chat", from: 0.55, to: 1.0 },
],

  messages: [
    {
      id: "andres",
      name: "Andrés Castillo",
      message: "¿Aún hay unidades en el piso 8? Vi los planos y me convencieron.",
      avatarColor: "bg-emerald-500",
    },
    {
      id: "valeria",
      name: "Valeria Ríos",
      message: "Hola, me interesa el de 2 hab. ¿Tienen sala de ventas este fin de semana?",
      avatarColor: "bg-sky-500",
    },
    {
      id: "carlos",
      name: "Carlos Mendoza",
      message: "Buenas, vi el proyecto Reserva del Bosque. ¿Cuándo puedo agendar una visita?",
      avatarColor: "bg-orange-500",
    },
  ],

  // índice 2 = Carlos Mendoza es el que se destaca y abre el chat
  highlightedMessageIndex: 2,

  chatExchange: {
    leadMessage: "Me encantó tu web del proyecto Reserva del Bosque. ¿Cuándo puedo agendar una visita?",
    agentReply: "¡Claro! ¿Te queda fácil este martes a las 9:00 am?",
    leadConfirmation: "¡De una!",
  },
};
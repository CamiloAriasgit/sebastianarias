// Cada sección declara qué tipo de fondo usa.
// "solid" = color plano. "pattern" = un componente visual (rejilla, puntos, etc.)
export type BackgroundKind = "solid" | "pattern";

export interface SectionBackground {
  sectionId: string;       // debe coincidir con el id de la sección en el DOM
  kind: BackgroundKind;
  color?: string;          // usado si kind = "solid" (o como color base de un pattern)
  pattern?: "grid" | "dots" | "none"; // usado si kind = "pattern"
}
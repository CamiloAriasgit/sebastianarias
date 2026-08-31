"use client";

interface GradientConfig {
  id: string;
  colors: string[]; // [from, via, to]
}

interface Props {
  layers: GradientConfig[];
  activeId: string;
}

export default function GradientBackground({ layers, activeId }: Props) {
  return (
    <div className="fixed inset-0 -z-10">
      {layers.map((layer) => (
        <div
          key={layer.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            background: `linear-gradient(to bottom, ${layer.colors[0]}, ${layer.colors[1]}, ${layer.colors[2]})`,
            opacity: layer.id === activeId ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
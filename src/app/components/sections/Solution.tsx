import React from 'react';

function SolutionCard({ 
  title, 
  description, 
  index 
}: { 
  title: string; 
  description: string; 
  index: number 
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white p-8 transition-all hover:border-neutral-300 hover:shadow-2xl hover:shadow-neutral-200/50">
      {/* Recurso Gráfico / Imagen */}
      <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-[#F6F8FB]">
        {/* Espacio para tu imagen o recurso */}
        <div className="flex h-full w-full items-center justify-center text-neutral-300">
           {/* Reemplaza este div con tu <Image /> o SVG */}
           <span className="text-xs font-mono uppercase tracking-widest">Recurso Visual 0{index}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-sans text-2xl font-bold tracking-tight leading-[0.9] text-neutral-900">
          {title}
        </h3>
        <p className="font-sans text-[15px] leading-[0.9] text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="relative w-full bg-[#F6F8FB] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        
        {/* Header de la Sección */}
        <div className="mb-16 flex flex-col items-center text-center sm:mb-24">
            <span className='bg-gray-200/60 rounded-full px-4 py-1 mb-5 font-sans font-semibold text-neutral-900'>Para Negocios</span>
          <h2 className="text-balance font-sans text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl leading-[0.9]">
            Lo que construyes depende de lo que necesitas
          </h2>
          <p className="mt-6 max-w-2xl text-pretty font-sans text-lg leading-[1.0] text-neutral-500 sm:text-xl">
            No todos los negocios requieren lo mismo. Por eso cada solución se adapta a su etapa.
          </p>
        </div>

        {/* Grid de Soluciones */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <SolutionCard 
            index={1}
            title="Landing de alto impacto"
            description="Para validar, posicionar o captar clientes desde el primer momento."
          />
          <SolutionCard 
            index={2}
            title="Web con estructura escalable"
            description="Cuando necesitas crecer sin rehacer todo desde cero."
          />
          <SolutionCard 
            index={3}
            title="Sistema a medida"
            description="Para operar, automatizar y tener control total del negocio."
          />
        </div>

      </div>
    </section>
  );
}
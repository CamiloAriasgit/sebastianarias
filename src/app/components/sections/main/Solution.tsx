import React from 'react';

export default function Solutions() {
  return (
    <section className="relative w-full bg-[#F6F8FB] px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center sm:mb-24">
          <span className='bg-gray-200/60 rounded-full px-4 py-1 mb-5 font-sans font-semibold text-neutral-900'>Para Negocios</span>
          <h2 className="text-balance font-sans text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl leading-[0.9]">
            Lo que construyes depende de lo que necesitas
          </h2>
          <p className="mt-6 max-w-2xl text-pretty font-sans text-lg leading-[1.0] text-neutral-500 sm:text-xl">
            No todos los negocios requieren lo mismo. Por eso cada solución se adapta a su etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white transition-all hover:border-neutral-300 w-full">
            <img
              src="/images/Mobile.png"
              alt="Landing Mockup Background"
              className="relative h-full w-full object-contain"
            />
            <div className="absolute inset-0 z-10 flex flex-col gap-2 p-8">
              <h3 className="font-sans md:text-2xl text-xl font-bold tracking-tight leading-[0.9] text-neutral-900">
                Landing de alto impacto. <span className='text-neutral-500'>Para validar, posicionar o captar clientes desde el primer momento.</span>
              </h3>
            </div>
          </div>

          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white transition-all hover:border-neutral-300 w-full">
            <img
              src="/images/Tablet.png"
              alt="Web Escalable Mockup Background"
              className="relative h-full w-full object-contain"
            />
            <div className="absolute inset-0 z-10 flex flex-col gap-2 p-8">
              <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight leading-[0.9] text-neutral-900">
                Web con estructura escalable. <span className='text-neutral-500'>Cuando necesitas crecer sin rehacer todo desde cero.</span>
              </h3>
            </div>
          </div>

          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white transition-all hover:border-neutral-300 w-full">
            <img
              src="/images/Panel.png"
              alt="Sistema a Medida Mockup Background"
              className="relative h-full w-full object-contain"
            />
            <div className="absolute inset-0 z-10 flex flex-col gap-2 p-8">
              <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight leading-[0.9] text-neutral-900">
                Sistema a medida. <span className='text-neutral-500'>Para operar, automatizar y tener control total del negocio.</span>
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
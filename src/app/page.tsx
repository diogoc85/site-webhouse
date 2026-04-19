export default function HomePage() {
  return (
    <main>
      <section id="hero" className="full">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center min-h-screen text-center gap-4">
            <span className="text-overline text-primary-500">
              Ambiente configurado com sucesso
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-tightest tracking-tightest text-secondary-700">
              Web House
            </h1>
            <p className="text-body-lg text-secondary-500 max-w-prose">
              Agência digital especializada em criação de sites, identidade visual
              e estratégias digitais que geram resultados reais.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <button className="btn-primary btn-lg">
                Quero um orçamento
              </button>
              <button className="btn-ghost btn-lg">
                Ver projetos
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

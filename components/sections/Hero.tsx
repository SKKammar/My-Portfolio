export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative">
      <p className="font-sans text-xs text-fog uppercase tracking-[0.2em] mb-6">
        Software Engineer
      </p>
      <h1 className="font-display font-light text-[15vw] md:text-[7vw] leading-[0.95] text-paper">
        Santosh K
        <br />
        <span className="italic">Kammar</span>
      </h1>
      <p className="font-sans text-sm text-ash max-w-md mt-8">
        Final-year engineer building thoughtful, production-grade systems —
        from data pipelines to full-stack platforms.
      </p>
    </section>
  );
}

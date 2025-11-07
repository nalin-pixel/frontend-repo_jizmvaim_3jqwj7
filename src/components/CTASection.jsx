export default function CTASection() {
  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Хотите, чтобы ваш бизнес работал без пауз?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">Настроим Автопомощник под ваш бизнес за 2 дня.</p>
        <a href="#form" className="mt-8 inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">Попробовать бесплатно</a>
        <div className="mt-3 text-xs text-white/60">Без подписок. Без кодинга. На базе n8n + OpenAI.</div>
      </div>
    </section>
  );
}

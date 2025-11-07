export default function ValueBlock() {
  const cards = [
    {
      icon: '🤖',
      title: 'Отвечает клиентам 24/7 — Telegram и VK.',
      desc: 'Автоответы, сценарии и быстрые реакции без вашего участия.'
    },
    {
      icon: '📰',
      title: 'Публикует контент автоматически — GPT-тексты + расписание.',
      desc: 'Стабильный контент-план с умной генерацией и публикацией.'
    },
    {
      icon: '📊',
      title: 'Присылает отчёты и напоминания — всё под контролем.',
      desc: 'Ежедневные дайджесты и метрики в ваш Telegram.'
    }
  ];

  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Всё работает само — с вашим Автопомощником.</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-3xl">{c.icon}</div>
              <div className="mt-3 text-lg font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-white/70">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

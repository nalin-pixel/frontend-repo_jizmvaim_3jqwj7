export default function TargetBlock() {
  const items = [
    { icon: '💇', text: 'Салоны красоты — не теряйте клиентов ночью.' },
    { icon: '🚗', text: 'Автосервисы — запись и напоминания без звонков.' },
    { icon: '🏫', text: 'Онлайн-школы — бот собирает заявки и пишет в CRM.' },
    { icon: '🛍', text: 'Магазины и доставка — автоответы и отчёты.' },
    { icon: '📱', text: 'SMM-агентства — контент и публикации без рутины.' },
  ];

  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Кому подходит Автопомощник</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl">{it.icon}</div>
              <div className="text-sm text-white/90">{it.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

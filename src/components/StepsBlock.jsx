export default function StepsBlock() {
  const steps = [
    'Клиент пишет → бот отвечает мгновенно.',
    'Контакт сохраняется в таблицу / CRM.',
    'Каждый день — отчёт в Telegram.',
    'Посты создаются и публикуются сами.'
  ];

  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Как это работает</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white font-semibold">{i + 1}</div>
                <div className="pt-1 text-gray-700">{s}</div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="h-64 w-full rounded-2xl bg-gradient-to-r from-fuchsia-500/20 via-sky-400/20 to-emerald-400/20 p-[2px]">
              <div className="h-full w-full rounded-2xl bg-white" />
            </div>
            <div className="pointer-events-none absolute inset-x-10 top-10 h-1 rounded-full bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

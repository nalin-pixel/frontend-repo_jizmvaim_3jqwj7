export default function ImpactBlock() {
  const stats = [
    { value: '⏱ Экономия до 10 часов в неделю' },
    { value: '💬 +25 % заявок обработано вовремя' },
    { value: '💰 +30 % рост продаж' },
    { value: '📈 Активность в соцсетях без участия владельца' },
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-fuchsia-600 via-sky-500 to-emerald-400 py-20">
      <div className="mx-auto max-w-6xl px-6 text-white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl bg-white/10 p-6 text-center shadow-lg backdrop-blur">
              <div className="text-lg font-semibold">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

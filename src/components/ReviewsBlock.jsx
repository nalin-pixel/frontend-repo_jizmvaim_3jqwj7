export default function ReviewsBlock() {
  const reviews = [
    { name: 'Анна', text: 'Теперь ни один клиент не уходит без ответа.' },
    { name: 'Игорь', text: 'Посты выходят сами — я просто смотрю отчёт.' },
    { name: 'Мария', text: 'Экономия времени — колоссальная.' },
  ];

  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Отзывы</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <div className="font-semibold text-gray-900">{r.name}</div>
              </div>
              <p className="mt-3 text-gray-600">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

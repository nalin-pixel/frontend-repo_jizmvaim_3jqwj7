export default function PainBlock() {
  return (
    <section className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Вы теряете клиентов и время.</h2>
        <p className="mt-3 max-w-2xl text-lg text-gray-600">
          Клиенты пишут ночью — ответа нет. Посты не выходят неделями. Всё приходится делать вручную.
        </p>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500" />
                Ночные сообщения остаются без ответа
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500" />
                Контент-план постоянно срывается
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500" />
                Вы тратите часы на рутины вместо развития
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 p-8 shadow-inner">
            <div className="mx-auto max-w-md text-center">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gray-200" />
              <div className="text-sm text-gray-500">Предприниматель до автоматизации</div>
              <div className="mt-4 h-2 w-full rounded-full bg-gray-200" />
              <div className="mt-2 h-2 w-5/6 rounded-full bg-gray-200" />
              <div className="mt-2 h-2 w-4/6 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

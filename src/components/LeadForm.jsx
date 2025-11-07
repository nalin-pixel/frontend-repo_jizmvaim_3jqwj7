import { useState } from 'react';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', handle: '', comment: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="form" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Заявка</h3>
            <p className="mt-2 text-gray-600">Имя / Telegram / комментарий.</p>
            <p className="mt-4 text-gray-700">“Расскажите о своём бизнесе — я покажу, как Автопомощник увеличит ваши заявки уже на следующей неделе.”</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 p-6">
            <label className="mb-3 block text-sm font-medium text-gray-700">Имя</label>
            <input
              value={form.name}
              onChange={(e)=>setForm({...form, name:e.target.value})}
              className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-sky-500 focus:outline-none"
              placeholder="Ваше имя"
              required
            />
            <label className="mb-3 block text-sm font-medium text-gray-700">Telegram</label>
            <input
              value={form.handle}
              onChange={(e)=>setForm({...form, handle:e.target.value})}
              className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-sky-500 focus:outline-none"
              placeholder="@username"
              required
            />
            <label className="mb-3 block text-sm font-medium text-gray-700">Комментарий</label>
            <textarea
              value={form.comment}
              onChange={(e)=>setForm({...form, comment:e.target.value})}
              className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-sky-500 focus:outline-none"
              rows={4}
              placeholder="Коротко о бизнесе"
            />
            <button type="submit" className="w-full rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white shadow-sky-500/30 shadow hover:bg-sky-400">Отправить</button>
            {sent && <div className="mt-3 text-sm text-green-600">Спасибо! Мы скоро свяжемся с вами в Telegram.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

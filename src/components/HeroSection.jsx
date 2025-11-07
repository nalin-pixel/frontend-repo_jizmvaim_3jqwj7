import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] blur-3xl" style={{ background: 'linear-gradient(90deg, rgba(147,51,234,0.25), rgba(56,189,248,0.25))' }} />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28">
        <h1 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Ваш бизнес работает 24/7 — даже когда вы спите.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          «Автопомощник для бизнеса» — AI-система, которая отвечает клиентам, публикует контент и присылает отчёты, пока вы занимаетесь делом.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#form"
            className="rounded-lg bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            Попробовать бесплатно
          </a>
          <a
            href="#demo"
            className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Посмотреть демо
          </a>
        </div>

        {/* Bot UI and posts mockup */}
        <div className="relative mt-12 grid w-full gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="mb-3 text-left text-sm font-medium text-white/80">Чат-бот</div>
            <div className="space-y-3">
              <Bubble who="client" text="Здравствуйте! Можете записать меня на завтра?" />
              <Bubble who="bot" text="Здравствуйте! Конечно. Уточните удобное время, и я оформлю запись." />
              <Bubble who="client" text="После 16:00 подойдёт." />
              <Bubble who="bot" text="Готово! Записал на завтра, 16:30. Вышлю напоминание за 2 часа." />
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="mb-3 text-left text-sm font-medium text-white/80">Посты</div>
            <Post title="5 причин сделать ТО весной" time="Сегодня, 10:00"/>
            <Post title="Скидка 15% на маникюр до конца недели" time="Вчера, 12:30"/>
            <Post title="Как выбрать идеальное кресло для домашнего офиса" time="Пн, 09:00"/>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({ who, text }) {
  const isBot = who === 'bot';
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`${isBot ? 'bg-sky-500/20 border-sky-400/30' : 'bg-white/10 border-white/20'} max-w-[85%] rounded-2xl border px-4 py-3 text-sm text-white/90`}> 
        <span className="block">{text}</span>
        <span className="mt-1 block text-[10px] uppercase tracking-wide text-white/50">{isBot ? 'Автопомощник' : 'Клиент'}</span>
      </div>
    </div>
  );
}

function Post({ title, time }) {
  return (
    <div className="mb-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left last:mb-0">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="text-xs text-white/60">{time}</div>
    </div>
  );
}

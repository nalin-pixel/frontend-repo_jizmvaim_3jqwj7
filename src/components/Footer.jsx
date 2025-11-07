export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 py-10 text-white">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-3 text-center">
        <div className="text-lg font-semibold">Автопомощник</div>
        <div className="text-sm text-white/60">© 2025 Автопомощник для бизнеса. Работает на n8n и OpenAI.</div>
        <a href="https://t.me" target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.036 15.59l-.375 5.295c.537 0 .768-.231 1.044-.506l2.505-2.399 5.193 3.807c.951.525 1.629.249 1.89-.879l3.423-16.02c.351-1.632-.625-2.269-1.644-1.872L2.05 10.342C.46 10.967.469 11.877 1.764 12.27l5.3 1.649 12.328-7.773c.58-.375 1.11-.168.675.207"/></svg>
          Telegram
        </a>
      </div>
    </footer>
  );
}

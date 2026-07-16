"use client";

export function LaunchDemoButton({ compact = false }: { compact?: boolean }) {
  function handleLaunch() {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new Event("voice-demo:start"));
  }

  return (
    <button
      type="button"
      onClick={handleLaunch}
      className={
        compact
          ? "rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          : "rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
      }
    >
      {compact ? "Try the widget" : "Launch demo call"}
    </button>
  );
}

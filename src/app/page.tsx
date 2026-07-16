import { LaunchDemoButton } from "@/components/LaunchDemoButton";
import { VoiceWidget } from "@/components/VoiceWidget";

const stats = [
  { label: "Voice-to-voice latency", value: "620ms", detail: "Streaming STT + LLM + TTS" },
  { label: "Booked calls", value: "38", detail: "Demo appointments this week" },
  { label: "Lead capture rate", value: "74%", detail: "Calls with name, need, and time" },
];

const features = [
  "Answers FAQs from a RAG knowledge base",
  "Books appointments through Cal.com-style tools",
  "Logs outcomes, transcripts, and CRM notes",
  "Handles interruptions and short spoken answers",
];

const flow = [
  "Caller speaks through web widget or phone",
  "Streaming STT detects intent in real time",
  "LLM calls tools for RAG, booking, and CRM",
  "Streaming TTS replies with natural voice",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_18%_10%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_82%_6%,rgba(124,58,237,0.18),transparent_30%),linear-gradient(180deg,#08111f_0%,#0b1220_38%,#0f172a_100%)] text-white">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">VoiceOps Demo</p>
            <h1 className="mt-2 text-xl font-semibold">AI Receptionist for Service Businesses</h1>
          </div>
          <LaunchDemoButton compact />
        </nav>

        <div className="mx-auto grid max-w-7xl gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h2 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              A client-ready voice agent that answers, qualifies, and books calls.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              This demo shows the exact product clients usually ask for: a website voice
              assistant, phone-ready workflow, RAG-backed answers, appointment booking,
              transcript logging, and low-latency conversation design.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LaunchDemoButton />
              <a
                href="#architecture"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                View architecture
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-950 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Today&apos;s call queue</p>
                  <p className="text-2xl font-semibold">AI agent active</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                  Online
                </span>
              </div>
              <div className="grid gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <div className="mt-2 flex items-end justify-between gap-4">
                      <p className="text-3xl font-semibold">{stat.value}</p>
                      <p className="text-right text-sm text-slate-400">{stat.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="border-y border-white/5 bg-white/[0.02] px-6 py-16 text-white sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">Demo Scenario</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Greg&apos;s Plumbing AI Receptionist</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Click the widget to simulate a real website call. The agent qualifies the
              customer, answers with knowledge-base context, offers appointment times,
              and records the outcome for a CRM or dashboard.
            </p>
            <div className="mt-8 grid gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10">
                  <span className="flex size-7 items-center justify-center rounded-full bg-cyan-300/15 text-sm font-bold text-cyan-200">
                    OK
                  </span>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <VoiceWidget />
        </div>
      </section>

      <section id="architecture" className="bg-transparent px-6 py-16 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-700">Build Plan</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Production architecture behind the demo</h2>
            <p className="mt-4 leading-7 text-slate-300">
              The clickable demo can be wired to Vapi or Retell for live audio. The backend
              layer stays in FastAPI, where business tools, RAG retrieval, booking, and CRM
              actions are controlled.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {flow.map((step, index) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-bold text-cyan-300">0{index + 1}</p>
                <p className="mt-4 font-semibold">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Voice Layer</p>
              <p className="mt-4 text-2xl font-semibold">Vapi / Retell</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Handles WebRTC, phone numbers, streaming STT/TTS, interruption support,
                endpointing, and call events.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-violet-200">Middleware</p>
              <p className="mt-4 text-2xl font-semibold">FastAPI + LangGraph</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Orchestrates tools, stateful flows, CRM writes, lead qualification, and
                appointment booking.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-200">Knowledge</p>
              <p className="mt-4 text-2xl font-semibold">RAG + Dashboard</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Scraped docs are embedded in pgvector or Pinecone, then surfaced in a
                Next.js dashboard with transcripts and outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

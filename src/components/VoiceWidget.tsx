"use client";

import { useEffect, useMemo, useState } from "react";

type Message = {
  speaker: "AI" | "Caller";
  text: string;
  tone: string;
};

const demoMessages: Message[] = [
  {
    speaker: "AI",
    text: "Thanks for calling Greg's Plumbing. Are you dealing with an emergency or looking to schedule service?",
    tone: "bg-cyan-50 text-cyan-950",
  },
  {
    speaker: "Caller",
    text: "My kitchen sink is leaking under the cabinet. I need someone tomorrow if possible.",
    tone: "bg-slate-100 text-slate-950",
  },
  {
    speaker: "AI",
    text: "I can help with that. We handle under-sink leaks, garbage disposal lines, and shutoff valve issues. What ZIP code are you in?",
    tone: "bg-cyan-50 text-cyan-950",
  },
  {
    speaker: "Caller",
    text: "I'm in 78704.",
    tone: "bg-slate-100 text-slate-950",
  },
  {
    speaker: "AI",
    text: "Great, you're in our service area. I have tomorrow at 10:30 AM or 2:00 PM. Which works better?",
    tone: "bg-cyan-50 text-cyan-950",
  },
  {
    speaker: "Caller",
    text: "10:30 works.",
    tone: "bg-slate-100 text-slate-950",
  },
  {
    speaker: "AI",
    text: "You're booked for tomorrow at 10:30 AM. I sent the appointment details and added the leak notes for the technician.",
    tone: "bg-emerald-50 text-emerald-950",
  },
];

export function VoiceWidget() {
  const [isCalling, setIsCalling] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const visibleMessages = useMemo(
    () => demoMessages.slice(0, messageCount),
    [messageCount],
  );

  useEffect(() => {
    function startDemoCall() {
      setIsCalling(true);
      setMessageCount(1);
    }

    window.addEventListener("voice-demo:start", startDemoCall);
    return () => window.removeEventListener("voice-demo:start", startDemoCall);
  }, []);

  function handleCallToggle() {
    if (isCalling) {
      setIsCalling(false);
      setMessageCount(0);
      return;
    }

    setIsCalling(true);
    setMessageCount(1);
  }

  function handleNextTurn() {
    if (!isCalling) {
      setIsCalling(true);
    }

    setMessageCount((count) => Math.min(count + 1, demoMessages.length));
  }

  const callComplete = messageCount === demoMessages.length;

  return (
    <div className="rounded-[2rem] bg-slate-950 p-4 text-white shadow-2xl shadow-slate-300">
      <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1220] p-5">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Website voice widget</p>
            <h3 className="mt-1 text-2xl font-semibold">AI receptionist demo</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm">
            <span className={`size-2 rounded-full ${isCalling ? "animate-pulse bg-emerald-300" : "bg-slate-500"}`} />
            {isCalling ? "Call in progress" : "Ready"}
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="min-h-[430px] rounded-3xl bg-white p-4 text-slate-950">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Live transcript</p>
                <p className="text-xs text-slate-500">Click through a simulated Vapi/Retell call flow</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                620ms
              </span>
            </div>

            <div className="space-y-3">
              {visibleMessages.length === 0 ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-cyan-100 text-2xl">
                    CALL
                  </div>
                  <p className="font-semibold">Start the demo call</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    This proof-of-concept simulates the voice flow. Real mic/audio can be
                    connected with Vapi or Retell keys.
                  </p>
                </div>
              ) : (
                visibleMessages.map((message, index) => (
                  <div
                    key={`${message.speaker}-${index}`}
                    className={`rounded-2xl p-4 ${message.tone} ${
                      message.speaker === "Caller" ? "ml-8" : "mr-8"
                    }`}
                  >
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                      {message.speaker}
                    </p>
                    <p className="text-sm leading-6">{message.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Tool Calls</p>
                <div className="mt-4 space-y-3 text-sm">
                  <StatusRow active={messageCount >= 3} label="RAG lookup: leak policy + service area" />
                  <StatusRow active={messageCount >= 5} label="Calendar search: tomorrow slots" />
                  <StatusRow active={messageCount >= 7} label="CRM update: lead + appointment notes" />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-violet-200">Outcome</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Metric label="Intent" value="Leak repair" />
                  <Metric label="Lead score" value="High" />
                  <Metric label="Booking" value={callComplete ? "Confirmed" : "Pending"} />
                  <Metric label="CRM" value={callComplete ? "Synced" : "Waiting"} />
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleCallToggle}
                className="flex-1 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                {isCalling ? "Reset call" : "Start call"}
              </button>
              <button
                type="button"
                onClick={handleNextTurn}
                disabled={callComplete}
                className="flex-1 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next turn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusRow({ active, label }: { active: boolean; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-3">
      <span className={`size-2 rounded-full ${active ? "bg-emerald-300" : "bg-slate-600"}`} />
      <span className={active ? "text-white" : "text-slate-400"}>{label}</span>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/[0.04] p-3">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

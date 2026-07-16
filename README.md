# Voice Agent Demo

A client-facing AI receptionist demo built with Next.js and Tailwind.

It includes a polished landing page, an interactive simulated voice widget, live transcript states, tool-call indicators, latency messaging, and a production architecture section. The demo is designed to be sent to clients as a proof of concept for a Vapi or Retell-powered voice agent.

## Features

- Dark premium landing page for an AI receptionist offer
- Simulated voice call widget with transcript progression
- RAG, calendar, and CRM tool-call indicators
- Lead qualification and appointment booking outcome panel
- Architecture section for Vapi/Retell, FastAPI, LangGraph, and RAG

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deploy as a Client Link

Fastest option with Vercel:

```bash
npx vercel --prod
```

Or push this folder to GitHub and import it into Vercel.

## Wire to Real Voice

The current widget is a no-key simulated demo that is safe to send as a proof of concept. To make it live:

- Connect the widget to Vapi or Retell
- Route tool calls to a FastAPI backend
- Add RAG retrieval over business docs
- Connect booking through Cal.com or a CRM calendar
- Log transcripts, outcomes, and lead details to a dashboard

Optional environment variables are listed in `.env.example`.


"use client";

import { useState } from "react";

const PLATFORMS = [
  "Instagram",
  "Facebook",
  "TikTok",
  "YouTube",
  "Snapchat",
  "X",
  "Other",
];

const CONTROLS = [
  "Following / chronological feed",
  "Personalized recommendations off",
  "Autoplay off",
  "“Show me less”",
  "Notifications off",
  "Other",
];

const RESULTS: {
  key: string;
  label: string;
  phrase: string;
  fail: boolean;
}[] = [
  { key: "reset", label: "It reset when I reopened", phrase: "reset to the algorithm on reopen", fail: true },
  { key: "never", label: "It never took effect", phrase: "never took effect", fail: true },
  { key: "partial", label: "Partial / unclear", phrase: "partial, unclear", fail: true },
  { key: "held", label: "It held (it stuck)", phrase: "held", fail: false },
];

const DEVICES = ["", "iOS", "Android", "Web", "Other"];

function fieldClass() {
  // 16px on mobile: anything smaller makes iOS Safari zoom the page on focus
  return "w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5 font-mono text-[16px] text-bone/90 outline-none transition-colors focus:border-signal/60 sm:text-[13px]";
}

// Declared at module scope, not inside the render: a component created during
// render is a new type on every pass and would reset its subtree's state.
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest2 text-bone/55">
      {children}
    </span>
  );
}

export default function ReportForm() {
  const [platform, setPlatform] = useState("");
  const [control, setControl] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");
  const [device, setDevice] = useState("");
  const [country, setCountry] = useState("");
  const [copied, setCopied] = useState(false);

  const resultObj = RESULTS.find((r) => r.key === result);
  const ready = Boolean(platform && control && result);

  const report = ready
    ? [
        "🚦 #WheresTheBrake",
        platform,
        `${control}: ${resultObj?.phrase}`,
        steps ? `${steps} taps to find it` : "",
        device || "",
        country.trim() || "",
        "de-amplify.com",
      ]
        .filter(Boolean)
        .join(" · ")
    : "";

  function copy() {
    if (!report) return;
    navigator.clipboard?.writeText(report).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      () => setCopied(false),
    );
  }

  const xHref = `https://x.com/intent/tweet?text=${encodeURIComponent(report)}`;

  return (
    <div className="mt-8">
      {/* safety + no-storage banner */}
      <div className="rounded-lg border border-brake/25 bg-brake/[0.04] p-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-brake/90">
          before you file
        </p>
        <p className="mt-3 text-[14px] leading-[1.7] text-bone/70">
          Report the <span className="text-bone/90">setting and the behavior, never a person</span>.
          No usernames, no DMs, no faces, no kids, no locations. Aim at the loop, not each other.
        </p>
        <p className="mt-3 text-[13px] leading-[1.7] text-bone/45">
          This form stores nothing. It builds a structured post for you to share, so ten thousand
          reports read the same way. Keeping your data without asking would be the exact thing
          we&apos;re asking platforms to stop.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <Label>platform</Label>
          <select className={fieldClass()} value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option value="">choose one</option>
            {PLATFORMS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <Label>which brake you tried</Label>
          <select className={fieldClass()} value={control} onChange={(e) => setControl(e.target.value)}>
            <option value="">choose one</option>
            {CONTROLS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5">
        <Label>what happened when you set it, closed the app, and reopened</Label>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {RESULTS.map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => setResult(r.key)}
              className={`rounded-md border px-4 py-3 text-left font-mono text-[13px] transition-colors ${
                result === r.key
                  ? r.fail
                    ? "border-brake/50 bg-brake/10 text-brake"
                    : "border-signal/50 bg-signal/10 text-signal"
                  : "border-white/10 bg-white/[0.02] text-bone/60 hover:border-white/20"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        <label className="block">
          <Label>taps to find it (optional)</Label>
          <input
            className={fieldClass()}
            type="number"
            min={0}
            max={99}
            inputMode="numeric"
            value={steps}
            onChange={(e) => setSteps(e.target.value.replace(/[^0-9]/g, "").slice(0, 2))}
            placeholder="e.g. 6"
          />
        </label>
        <label className="block">
          <Label>device (optional)</Label>
          <select className={fieldClass()} value={device} onChange={(e) => setDevice(e.target.value)}>
            {DEVICES.map((d) => (
              <option key={d || "any"} value={d}>{d || "skip"}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <Label>country (optional, broad)</Label>
          <input
            className={fieldClass()}
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value.slice(0, 32))}
            placeholder="e.g. US"
          />
        </label>
      </div>

      {/* generated report */}
      <div className="mt-8">
        <Label>your report</Label>
        <div
          className={`rounded-lg border p-5 font-mono text-[14px] leading-[1.7] ${
            ready
              ? resultObj?.fail
                ? "border-brake/30 bg-brake/[0.04] text-bone/85"
                : "border-signal/30 bg-signal/[0.04] text-bone/85"
              : "border-white/10 bg-white/[0.02] text-bone/30"
          }`}
        >
          {ready ? report : "Pick a platform, a brake, and what happened. Your report builds here."}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copy}
            disabled={!ready}
            className="rounded-md border border-brake/40 bg-brake/10 px-5 py-2.5 font-mono text-[13px] text-brake transition-colors hover:bg-brake/20 disabled:cursor-not-allowed disabled:opacity-30"
          >
            {copied ? "copied ✓" : "copy report"}
          </button>
          <a
            href={ready ? xHref : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!ready}
            className={`rounded-md border border-signal/40 bg-signal/10 px-5 py-2.5 font-mono text-[13px] text-signal transition-colors hover:bg-signal/20 ${
              ready ? "" : "pointer-events-none opacity-30"
            }`}
          >
            post on X &rarr;
          </a>
          <span className="font-mono text-[11px] text-bone/30">
            or paste it anywhere with <span className="text-brake/70">#WheresTheBrake</span>
          </span>
        </div>
      </div>
    </div>
  );
}

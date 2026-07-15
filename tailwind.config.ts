import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // The confession palette — cold machine, near-black, one brake-red alarm.
        void: "#070709", // page background, near-black (cool)
        panel: "#0d0d12", // raised panels / callouts
        bone: "#E7E7EC", // cool off-white body text
        signal: "#5B9DFF", // cold electric blue — primary accent (structure, links, the fix)
        brake: "#FF4D5E", // brake-light red — alarm accent (the confession, the harm, the receipts)
        ash: "#71717f", // muted gray
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        pulseBrake: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        pulseBrake: "pulseBrake 2s ease-in-out infinite",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(231 231 236 / 0.62)",
            "--tw-prose-headings": "#E7E7EC",
            "--tw-prose-links": "#5B9DFF",
            "--tw-prose-bold": "rgb(231 231 236 / 0.9)",
            "--tw-prose-counters": "rgb(231 231 236 / 0.4)",
            "--tw-prose-bullets": "rgb(91 157 255 / 0.35)",
            "--tw-prose-hr": "rgb(255 255 255 / 0.07)",
            "--tw-prose-quotes": "rgb(231 231 236 / 0.55)",
            "--tw-prose-quote-borders": "rgb(255 77 94 / 0.4)",
            "--tw-prose-code": "#5B9DFF",
            "--tw-prose-pre-bg": "#0d0d12",
            "--tw-prose-pre-code": "rgb(231 231 236 / 0.7)",
            "--tw-prose-th-borders": "rgb(255 255 255 / 0.1)",
            "--tw-prose-td-borders": "rgb(255 255 255 / 0.06)",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

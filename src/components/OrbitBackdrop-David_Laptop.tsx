import type { CSSProperties } from "react";

export function OrbitBackdrop() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 top-[-80px] hidden h-[520px] w-[520px] text-sky-200 sm:right-0 sm:block"
      viewBox="0 0 520 520"
      fill="none"
    >
      <circle cx="260" cy="260" r="70" stroke="currentColor" />
      <circle cx="260" cy="260" r="140" stroke="currentColor" />
      <circle cx="260" cy="260" r="210" stroke="currentColor" />

      <g
        className="orbit-spin opacity-50"
        style={{ "--orbit-duration": "36s" } as CSSProperties}
      >
        <circle
          cx="260"
          cy="260"
          r="70"
          stroke="currentColor"
          strokeDasharray="5 14"
        />
      </g>
      <g
        className="orbit-spin orbit-spin-reverse opacity-50"
        style={{ "--orbit-duration": "48s" } as CSSProperties}
      >
        <circle
          cx="260"
          cy="260"
          r="140"
          stroke="currentColor"
          strokeDasharray="6 16"
        />
      </g>
      <g
        className="orbit-spin opacity-40"
        style={{ "--orbit-duration": "64s" } as CSSProperties}
      >
        <circle
          cx="260"
          cy="260"
          r="210"
          stroke="currentColor"
          strokeDasharray="4 18"
        />
      </g>

      <g
        className="orbit-spin"
        style={{ "--orbit-duration": "18s" } as CSSProperties}
      >
        <circle className="fill-sky-500" cx="260" cy="190" r="5" />
        <circle
          className="orbit-twinkle fill-sky-400"
          cx="312"
          cy="304"
          r="3.5"
          style={
            {
              "--twinkle-duration": "11s",
              "--twinkle-delay": "1.5s",
            } as CSSProperties
          }
        />
      </g>

      <g
        className="orbit-spin orbit-spin-reverse"
        style={{ "--orbit-duration": "28s" } as CSSProperties}
      >
        <circle className="fill-sky-500" cx="400" cy="260" r="5" />
        <circle
          className="orbit-twinkle fill-sky-400"
          cx="161"
          cy="161"
          r="4"
          style={
            {
              "--twinkle-duration": "8s",
              "--twinkle-delay": "0.4s",
            } as CSSProperties
          }
        />
        <circle
          className="orbit-twinkle fill-sky-600"
          cx="210"
          cy="382"
          r="3"
          style={
            {
              "--twinkle-duration": "13s",
              "--twinkle-delay": "4s",
            } as CSSProperties
          }
        />
      </g>

      <g
        className="orbit-spin"
        style={{ "--orbit-duration": "40s" } as CSSProperties}
      >
        <circle className="fill-sky-600" cx="260" cy="50" r="6" />
        <circle
          className="orbit-twinkle fill-sky-500"
          cx="442"
          cy="330"
          r="4.5"
          style={
            {
              "--twinkle-duration": "10s",
              "--twinkle-delay": "2.2s",
            } as CSSProperties
          }
        />
        <circle
          className="orbit-twinkle fill-sky-400"
          cx="110"
          cy="190"
          r="3.5"
          style={
            {
              "--twinkle-duration": "14s",
              "--twinkle-delay": "6s",
            } as CSSProperties
          }
        />
        <circle
          className="orbit-twinkle fill-sky-500"
          cx="330"
          cy="448"
          r="3"
          style={
            {
              "--twinkle-duration": "9s",
              "--twinkle-delay": "7.5s",
            } as CSSProperties
          }
        />
      </g>
    </svg>
  );
}

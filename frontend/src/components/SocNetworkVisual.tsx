const CENTER = { x: 300, y: 300 }
const RINGS = [90, 160, 230]

const TEAL_TOP_LEFT = { x: 135, y: 142 }
const TEAL_TOP = { x: 301, y: 168 }
const TEAL_TOP_RIGHT = { x: 466, y: 142 }
const TEAL_RIGHT = { x: 523, y: 370 }
const TEAL_BOTTOM_LEFT = { x: 189, y: 525 }

const TEAL_NODES = [TEAL_TOP_LEFT, TEAL_TOP, TEAL_TOP_RIGHT, TEAL_RIGHT, TEAL_BOTTOM_LEFT]

const ALERT_LEFT = { x: 77, y: 373 }
const ALERT_BOTTOM_RIGHT = { x: 412, y: 525 }

const ALERT_NODES = [ALERT_LEFT, ALERT_BOTTOM_RIGHT]

// Outer nodes in clockwise order, used to draw the connecting mesh between
// neighbors (not just spokes back to CORE) — mirrors the approved mockup.
const RING_ORDER = [
  TEAL_TOP,
  TEAL_TOP_RIGHT,
  TEAL_RIGHT,
  ALERT_BOTTOM_RIGHT,
  TEAL_BOTTOM_LEFT,
  ALERT_LEFT,
  TEAL_TOP_LEFT,
]

/**
 * Decorative SOC radar / network illustration used on the sign-in screen.
 * Purely presentational — carries no interactive or authentication behaviour.
 */
export function SocNetworkVisual() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="h-auto w-full max-w-xl"
      role="img"
      aria-label="Security operations network visualization with a central core node connected to monitored nodes, one flagged as an alert"
    >
      <defs>
        <radialGradient id="soc-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="soc-teal-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="soc-alert-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f87171" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f87171" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* concentric radar rings */}
      {RINGS.map((r) => (
        <circle
          key={r}
          cx={CENTER.x}
          cy={CENTER.y}
          r={r}
          fill="none"
          stroke="#2a4a72"
          strokeWidth={1}
          opacity={0.6}
        />
      ))}

      {/* mesh lines connecting neighboring outer nodes to each other */}
      {RING_ORDER.map((n, i) => {
        const next = RING_ORDER[(i + 1) % RING_ORDER.length] ?? n
        return (
          <line
            key={`ring-${i}`}
            x1={n.x}
            y1={n.y}
            x2={next.x}
            y2={next.y}
            stroke="#3b82f6"
            strokeWidth={1}
            opacity={0.5}
          />
        )
      })}

      {/* connecting lines from core to each monitored node */}
      {[...TEAL_NODES, ...ALERT_NODES].map((n, i) => (
        <line
          key={`line-${i}`}
          x1={CENTER.x}
          y1={CENTER.y}
          x2={n.x}
          y2={n.y}
          stroke="#3b82f6"
          strokeWidth={1.25}
          opacity={0.85}
        />
      ))}

      {/* central CORE node */}
      <circle cx={CENTER.x} cy={CENTER.y} r={46} fill="url(#soc-core-glow)" />
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={14}
        fill="#0ea5e9"
        stroke="#7dd3fc"
        strokeWidth={1.5}
        className="motion-safe:animate-pulse"
      />
      <text
        x={CENTER.x}
        y={CENTER.y + 32}
        textAnchor="middle"
        fill="#7dd3fc"
        fontSize="11"
        letterSpacing="2"
        fontFamily="ui-monospace, monospace"
      >
        CORE
      </text>

      {/* active monitored nodes */}
      {TEAL_NODES.map((n, i) => (
        <g key={`teal-${i}`}>
          <circle cx={n.x} cy={n.y} r={26} fill="url(#soc-teal-glow)" />
          <circle
            cx={n.x}
            cy={n.y}
            r={7}
            fill="#2dd4bf"
            stroke="#99f6e4"
            strokeWidth={1.25}
          />
        </g>
      ))}

      {/* alert nodes */}
      {ALERT_NODES.map((n, i) => (
        <g key={`alert-${i}`}>
          <circle cx={n.x} cy={n.y} r={30} fill="url(#soc-alert-glow)" />
          <circle
            cx={n.x}
            cy={n.y}
            r={8}
            fill="#ef4444"
            stroke="#fca5a5"
            strokeWidth={1.5}
            className="motion-safe:animate-pulse"
          />
          <text
            x={n.x}
            y={n.y + 22}
            textAnchor="middle"
            fill="#fca5a5"
            fontSize="9"
            letterSpacing="1.5"
            fontFamily="ui-monospace, monospace"
          >
            ALERT
          </text>
        </g>
      ))}
    </svg>
  )
}
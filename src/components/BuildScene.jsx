/**
 * Looping isometric build animation: a dashed blueprint wireframe draws in,
 * then the structure assembles from our materials — sand base → stone bed →
 * concrete slab with rebar mesh → brick courses → roof — and resets.
 * All timing lives in index.css on one shared 14s cycle.
 */

const CX = 280

// Isometric floor dots behind the stack.
const FLOOR_DOTS = []
for (let i = -4; i <= 4; i++) {
  for (let j = -4; j <= 4; j++) {
    if (Math.abs(i) + Math.abs(j) > 4) continue
    FLOOR_DOTS.push([CX + (i - j) * 44, 436 + (i + j) * 22])
  }
}

// One isometric box (top / left / right faces) with gradient shading.
function Box({ cy, w, h, t, tone, topStroke = true, children }) {
  return (
    <>
      <polygon
        points={`${CX},${cy - h} ${CX + w},${cy} ${CX},${cy + h} ${CX - w},${cy}`}
        fill={`url(#${tone}Top)`}
        stroke={topStroke ? 'rgba(255,255,255,0.16)' : 'none'}
        strokeWidth="1"
      />
      <polygon points={`${CX - w},${cy} ${CX},${cy + h} ${CX},${cy + h + t} ${CX - w},${cy + t}`} fill={`url(#${tone}Left)`} />
      <polygon points={`${CX + w},${cy} ${CX},${cy + h} ${CX},${cy + h + t} ${CX + w},${cy + t}`} fill={`url(#${tone}Right)`} />
      {children}
    </>
  )
}

// One brick course with staggered vertical seams on both visible faces.
function Course({ cy, seams }) {
  const w = 100
  const h = 50
  const t = 17
  return (
    <Box cy={cy} w={w} h={h} t={t} tone="brick">
      {seams.map((f) => {
        const y = cy + f * h
        return (
          <g key={f} stroke="rgba(40,18,8,0.35)" strokeWidth="1.3">
            <line x1={CX - w + f * w} y1={y} x2={CX - w + f * w} y2={y + t} />
            <line x1={CX + w - f * w} y1={y} x2={CX + w - f * w} y2={y + t} />
          </g>
        )
      })}
    </Box>
  )
}

// Callout pill with dashed leader line and glowing anchor dot.
function Label({ x, y, width, text, lx2, ly2, className }) {
  return (
    <g className={className}>
      <line x1={x + width - 4} y1={y + 14} x2={lx2} y2={ly2} stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeDasharray="3 4" />
      <circle cx={lx2} cy={ly2} r="4.5" fill="rgba(196,92,38,0.35)" />
      <circle cx={lx2} cy={ly2} r="2.2" fill="#E8925F" />
      <rect x={x} y={y} width={width} height="28" rx="14" fill="rgba(17,17,17,0.82)" stroke="rgba(255,255,255,0.22)" />
      <circle cx={x + 16} cy={y + 14} r="3" fill="#E8925F" />
      <text x={x + 28} y={y + 18.5} fill="#fff" fontSize="12" fontWeight="600" letterSpacing="2">
        {text}
      </text>
    </g>
  )
}

export default function BuildScene() {
  return (
    <div className="hero-build" aria-hidden="true">
      <svg viewBox="0 0 560 530" role="img" aria-label="Animation of a building assembling from sand, stone, and bricks">
        <defs>
          <linearGradient id="sandTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#EDC78C" /><stop offset="1" stopColor="#D6AB6A" />
          </linearGradient>
          <linearGradient id="sandLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#C89D66" /><stop offset="1" stopColor="#AB8250" />
          </linearGradient>
          <linearGradient id="sandRight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#A8814B" /><stop offset="1" stopColor="#8A683A" />
          </linearGradient>
          <linearGradient id="stoneTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#C7CAC6" /><stop offset="1" stopColor="#ACAFAB" />
          </linearGradient>
          <linearGradient id="stoneLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#9EA19D" /><stop offset="1" stopColor="#888B87" />
          </linearGradient>
          <linearGradient id="stoneRight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#83867F" /><stop offset="1" stopColor="#6D706A" />
          </linearGradient>
          <linearGradient id="slabTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F2F1EC" /><stop offset="1" stopColor="#DCDAD2" />
          </linearGradient>
          <linearGradient id="slabLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#CFCCC4" /><stop offset="1" stopColor="#BCB9B0" />
          </linearGradient>
          <linearGradient id="slabRight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#B5B2A9" /><stop offset="1" stopColor="#A19E95" />
          </linearGradient>
          <linearGradient id="brickTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#D2683A" /><stop offset="1" stopColor="#B55127" />
          </linearGradient>
          <linearGradient id="brickLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#B04E29" /><stop offset="1" stopColor="#984322" />
          </linearGradient>
          <linearGradient id="brickRight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#94421F" /><stop offset="1" stopColor="#7A3518" />
          </linearGradient>
          <radialGradient id="sceneGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="rgba(196,92,38,0.3)" /><stop offset="1" stopColor="rgba(196,92,38,0)" />
          </radialGradient>
        </defs>

        {/* ---- Ambient: glow, iso floor dots, floating accents ---- */}
        <ellipse cx="280" cy="460" rx="230" ry="52" fill="url(#sceneGlow)" />
        <g fill="rgba(255,255,255,0.14)">
          {FLOOR_DOTS.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" />
          ))}
        </g>
        <g className="bs-particle bs-particle--1" stroke="rgba(232,146,95,0.6)" strokeWidth="1.6" strokeLinecap="round">
          <path d="M486 148h16M494 140v16" />
        </g>
        <circle className="bs-particle bs-particle--2" cx="102" cy="170" r="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        <rect className="bs-particle bs-particle--3" x="492" y="330" width="9" height="9" rx="2" fill="none" stroke="rgba(232,146,95,0.45)" strokeWidth="1.5" transform="rotate(18 496 334)" />
        <path className="bs-particle bs-particle--4" d="M96 300h12M102 294v12" stroke="rgba(255,255,255,0.28)" strokeWidth="1.4" strokeLinecap="round" />

        {/* ---- Blueprint wireframe the build fills in ---- */}
        <g className="bs-wire" fill="none" stroke="rgba(232,146,95,0.75)" strokeWidth="1.4">
          <path
            className="bs-wire-dash"
            d="M280 254 L380 304 L280 354 L180 304 Z
               M280 186 L380 236 L280 286 L180 236 Z
               M180 304 V236 M380 304 V236 M280 354 V286"
            strokeDasharray="6 6"
          />
        </g>

        {/* ---- Ground shadow ---- */}
        <ellipse className="bs-sand" cx="280" cy="498" rx="196" ry="17" fill="rgba(0,0,0,0.4)" />

        {/* ---- Layer 1: sand base ---- */}
        <g className="bs-sand">
          <Box cy={350} w={170} h={85} t={58} tone="sand">
            <g fill="rgba(120,88,40,0.4)">
              <circle cx="244" cy="345" r="2.4" /><circle cx="300" cy="362" r="2" />
              <circle cx="206" cy="350" r="1.8" /><circle cx="346" cy="356" r="2.6" />
              <circle cx="280" cy="326" r="2" /><circle cx="312" cy="382" r="1.8" />
              <circle cx="168" cy="348" r="2.2" /><circle cx="368" cy="340" r="1.9" />
              <circle cx="252" cy="386" r="2.4" /><circle cx="308" cy="322" r="1.7" />
              <circle cx="228" cy="374" r="1.9" /><circle cx="384" cy="362" r="2.2" />
              <circle cx="280" cy="404" r="2" /><circle cx="192" cy="328" r="1.8" />
            </g>
          </Box>
        </g>
        <Label className="bs-label bs-label--sand" x="6" y="398" width="88" text="SAND" lx2={150} ly2={412} />

        {/* ---- Layer 2: stone / gitti bed ---- */}
        <g className="bs-stone">
          <Box cy={322} w={170} h={85} t={28} tone="stone">
            <g fill="rgba(66,68,66,0.42)">
              <circle cx="256" cy="318" r="2.6" /><circle cx="312" cy="328" r="2.2" />
              <circle cx="222" cy="322" r="2" /><circle cx="352" cy="318" r="2.4" />
              <circle cx="280" cy="300" r="2.1" /><circle cx="300" cy="350" r="2.5" />
              <circle cx="184" cy="322" r="2.2" /><circle cx="366" cy="330" r="2" />
              <circle cx="244" cy="344" r="1.8" /><circle cx="322" cy="306" r="1.9" />
              <circle cx="160" cy="318" r="1.7" /><circle cx="392" cy="324" r="2.2" />
            </g>
          </Box>
        </g>
        <Label className="bs-label bs-label--stone" x="6" y="318" width="92" text="STONE" lx2={140} ly2={348} />

        {/* ---- Layer 3: concrete slab with rebar mesh ---- */}
        <g className="bs-slab">
          <Box cy={304} w={170} h={85} t={18} tone="slab">
            <g stroke="#A29E92" strokeWidth="1.5">
              <line x1="152.5" y1="282.75" x2="322.5" y2="367.75" />
              <line x1="195" y1="261.5" x2="365" y2="346.5" />
              <line x1="237.5" y1="240.25" x2="407.5" y2="325.25" />
              <line x1="152.5" y1="325.25" x2="322.5" y2="240.25" />
              <line x1="195" y1="346.5" x2="365" y2="261.5" />
              <line x1="237.5" y1="367.75" x2="407.5" y2="282.75" />
            </g>
          </Box>
        </g>

        {/* ---- Brick courses, laid one by one ---- */}
        <g className="bs-course bs-course--0"><Course cy={287} seams={[1 / 3, 2 / 3]} /></g>
        <g className="bs-course bs-course--1"><Course cy={270} seams={[1 / 6, 1 / 2, 5 / 6]} /></g>
        <g className="bs-course bs-course--2"><Course cy={253} seams={[1 / 3, 2 / 3]} /></g>
        <g className="bs-course bs-course--3"><Course cy={236} seams={[1 / 6, 1 / 2, 5 / 6]} /></g>
        <Label className="bs-label bs-label--bricks" x="14" y="238" width="96" text="BRICKS" lx2={205} ly2={285} />

        {/* ---- Roof slab ---- */}
        <g className="bs-roof">
          <Box cy={226} w={108} h={54} t={10} tone="slab" />
        </g>

        {/* ---- Windows appear once the shell is up ---- */}
        <g className="bs-windows" fill="#221C16">
          <polygon points="208,270 228,280 228,290 208,280" />
          <polygon points="238,285 258,295 258,305 238,295" />
          <polygon points="352,270 332,280 332,290 352,280" />
          <polygon points="322,285 302,295 302,305 322,295" />
        </g>

        {/* ---- Completion pulse on the finished roof ---- */}
        <g className="bs-pulse">
          <line x1="280" y1="172" x2="280" y2="140" stroke="rgba(232,146,95,0.6)" strokeWidth="1.2" strokeDasharray="2 4" />
          <circle cx="280" cy="134" r="3.5" fill="#E8925F" />
          <circle cx="280" cy="134" fill="none" stroke="#E8925F" strokeWidth="1.4">
            <animate attributeName="r" values="5;16" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  )
}

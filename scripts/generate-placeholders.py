"""
Genera assets placeholder (SVG) para KND.
Uso: python3 scripts/generate-placeholders.py
Sustituye estos archivos por fotos/avatares reales manteniendo el mismo
nombre de archivo y no habrá que tocar el código.
"""
import os

BASE = "public/assets"


def svg_header(w, h):
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'


def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("OK", path)


# ---------- Avatares de agentes ----------
AVATARS = [
    ("numero-1", "#2f6fb0", "#173654", "#e8b98a", "N1"),
    ("numero-2", "#3f7d3a", "#254c22", "#e8b98a", "N2"),
    ("numero-3", "#8a7238", "#5c4a22", "#c98a55", "N3"),
    ("numero-4", "#b5372c", "#7f251d", "#e8b98a", "N4"),
    ("numero-5", "#6a3f9e", "#432867", "#e8b98a", "N5"),
    ("numero-6", "#d1ab4c", "#8a6d2c", "#e8b98a", "N6"),
]

for slug, bg, accent, skin, label in AVATARS:
    svg = f'''{svg_header(240, 240)}
  <rect width="240" height="240" fill="{bg}"/>
  <circle cx="120" cy="150" r="58" fill="{skin}"/>
  <path d="M56 120 a64 64 0 0 1 128 0 v-8 a64 56 0 0 0 -128 0 z" fill="{accent}"/>
  <rect x="52" y="112" width="136" height="26" rx="6" fill="{accent}"/>
  <circle cx="95" cy="150" r="10" fill="#1c1c1c"/>
  <circle cx="145" cy="150" r="10" fill="#1c1c1c"/>
  <rect x="80" y="140" width="80" height="18" rx="9" fill="#0b0f0a" opacity="0.85"/>
  <path d="M100 182 q20 14 40 0" stroke="#3a2a1a" stroke-width="4" fill="none" stroke-linecap="round"/>
  <text x="120" y="228" text-anchor="middle" font-family="monospace" font-size="16" fill="#0b0f0a" opacity="0.55">AGENTE {label}</text>
</svg>'''
    write(f"{BASE}/agentes/avatar-{slug}.svg", svg)


# ---------- Portadas de operacion ----------
COVERS = [
    ("six-flags", "#0a3a5c", "#f2b53a", "SIX FLAGS"),
    ("gotcha", "#233d1c", "#8fe36b", "GOTCHA"),
    ("escape-room", "#2a1030", "#c9668f", "ESCAPE ROOM"),
    ("bolos", "#3a2a0a", "#f2b53a", "BOLOS"),
    ("pista-de-hielo", "#0a2a3a", "#8fd6f2", "PISTA DE HIELO"),
    ("ecologico", "#0f3a1c", "#8fe36b", "ECOLOGICO"),
    ("dorada", "#3a2f0a", "#f2d675", "DORADA"),
]
for slug, bg, accent, label in COVERS:
    svg = f'''{svg_header(800, 500)}
  <defs>
    <linearGradient id="sky-{slug}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="{bg}"/>
      <stop offset="100%" stop-color="#05070a"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#sky-{slug})"/>
  <polyline points="0,420 90,340 180,400 260,300 340,380 420,260 520,370 620,300 700,400 800,340 800,500 0,500"
    fill="{accent}" opacity="0.18"/>
  <circle cx="700" cy="90" r="46" fill="{accent}" opacity="0.3"/>
  <rect x="40" y="46" width="160" height="4" fill="{accent}"/>
  <text x="40" y="96" font-family="'Courier New', monospace" font-size="40" letter-spacing="3" fill="{accent}">{label}</text>
  <text x="40" y="124" font-family="'Courier New', monospace" font-size="13" letter-spacing="2" fill="#d9e8d3" opacity="0.65">PORTADA PLACEHOLDER -- REEMPLAZAR</text>
</svg>'''
    write(f"{BASE}/operaciones/portada-{slug}.svg", svg)


# ---------- Fotos de galeria ----------
GALLERY = [
    ("six-flags-1", "#0a3a5c", "#f2b53a"),
    ("six-flags-2", "#0e4a70", "#f2b53a"),
    ("six-flags-3", "#123a52", "#e89a3a"),
    ("six-flags-4", "#0a1a3a", "#8fe36b"),
    ("gotcha-1", "#233d1c", "#8fe36b"),
    ("gotcha-2", "#1c2e17", "#c3ff9e"),
    ("gotcha-3", "#2a4020", "#f2d675"),
]
for gid, bg, accent in GALLERY:
    svg = f'''{svg_header(600, 450)}
  <rect width="600" height="450" fill="{bg}"/>
  <path d="M0 340 L100 280 L200 330 L300 260 L400 320 L500 270 L600 330 L600 450 L0 450 Z" fill="{accent}" opacity="0.2"/>
  <circle cx="500" cy="90" r="40" fill="{accent}" opacity="0.3"/>
  <text x="30" y="60" font-family="'Courier New', monospace" font-size="22" fill="{accent}" opacity="0.85">FOTO PLACEHOLDER</text>
  <text x="30" y="86" font-family="'Courier New', monospace" font-size="14" fill="#d9e8d3" opacity="0.6">{gid}</text>
  <g transform="translate(460,380)">
    <rect x="0" y="0" width="120" height="26" fill="#b5372c" opacity="0.85"/>
    <text x="60" y="18" text-anchor="middle" font-family="'Courier New', monospace" font-size="12" fill="#f4e8d0" letter-spacing="1">REEMPLAZAR</text>
  </g>
</svg>'''
    write(f"{BASE}/galeria/{gid}.svg", svg)

print("Listo: assets generados")

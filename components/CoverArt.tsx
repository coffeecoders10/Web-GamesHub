const W = 400;
const H = 240;

function hillPath(seed: number, layer: number) {
  const base = H * (0.34 + layer * 0.15);
  const amp = 12 + ((seed * 7 + layer * 11) % 17);
  const freq = 0.8 + ((seed + layer * 3) % 4) * 0.35;
  const phase = seed * 1.7 + layer * 2.3;
  let d = `M0 ${H}`;
  for (let x = 0; x <= W; x += 10) {
    const y = base + amp * Math.sin((x / W) * Math.PI * 2 * freq + phase);
    d += ` L${x} ${y.toFixed(1)}`;
  }
  return `${d} L${W} ${H} Z`;
}

/** Layered hills, echoing the latte in the CoffeeCoders cup. */
export function CoverArt({ palette, seed }: { palette: string[]; seed: number }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <rect width={W} height={H} fill={palette[0]} />
      {palette.slice(1).map((color, i) => (
        <path key={color} d={hillPath(seed, i)} fill={color} />
      ))}
    </svg>
  );
}

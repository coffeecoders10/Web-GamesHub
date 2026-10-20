export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="15" fill="#1a1412" />
      <g fill="none" stroke="#d2a48b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14c-4 0-5 2-5 5v7c0 3-1 5-4 6 3 1 4 3 4 6v7c0 3 1 5 5 5" />
        <path d="M50 14c4 0 5 2 5 5v7c0 3 1 5 4 6-3 1-4 3-4 6v7c0 3-1 5-5 5" />
      </g>
      <rect x="21" y="12" width="22" height="5" rx="1.5" fill="none" stroke="#f1e8e2" strokeWidth="2.4" />
      <path d="M22 19h20l-3 33H25z" fill="#d2a48b" stroke="#f1e8e2" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M28.5 28.5v13l11-6.5z" fill="#1a1412" />
    </svg>
  );
}

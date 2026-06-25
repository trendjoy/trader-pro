interface ProgressBarProps {
  value: number;
  color?: string;
}

export function ProgressBar({
  value,
  color = "#22c55e",
}: ProgressBarProps) {
  return (
    <div
      style={{
        marginTop: 18,
        width: "100%",
        height: 8,
        background: "#1e293b",
        borderRadius: 999,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${Math.max(0, Math.min(value, 100))}%`,
          height: "100%",
          background: color,
          transition: "width 300ms ease",
        }}
      />
    </div>
  );
}
interface StatusBadgeProps {
  value: string;
}

export function StatusBadge({
  value,
}: StatusBadgeProps) {

  let background = "#475569";

  switch (value) {

    case "LOW":
      background = "#64748b";
      break;

    case "MEDIUM":
      background = "#f59e0b";
      break;

    case "HIGH":
      background = "#22c55e";
      break;

    case "CRITICAL":
      background = "#ef4444";
      break;

  }

  return (
    <span
      style={{
        display: "inline-block",
        marginTop: 12,
        padding: "6px 12px",
        borderRadius: 999,
        background,
        color: "#fff",
        fontWeight: 700,
        fontSize: 12,
      }}
    >
      {value}
    </span>
  );
}
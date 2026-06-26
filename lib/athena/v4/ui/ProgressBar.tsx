interface ProgressBarProps {

  value: number;

  color?: string;

}

export default function ProgressBar({

  value,

  color = "#38bdf8",

}: ProgressBarProps) {

  return (

    <div
      style={{
        width: "100%",
        height: 10,
        background: "#1e293b",
        borderRadius: 999,
        overflow: "hidden",
        marginTop: 18,
      }}
    >

      <div
        style={{
          width: `${Math.min(100, value)}%`,
          height: "100%",
          background: color,
          transition: "300ms",
        }}
      />

    </div>

  );

}

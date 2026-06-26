interface BadgeProps {

  text: string;

  color?: string;

}

export default function Badge({

  text,

  color = "#0f766e",

}: BadgeProps) {

  return (

    <span
      style={{
        display: "inline-block",
        background: color,
        color: "white",
        padding: "6px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 700,
        marginTop: 12,
      }}
    >

      {text}

    </span>

  );

}

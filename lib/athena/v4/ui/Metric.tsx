interface MetricProps {

  value: number | string;

  label?: string;

}

export default function Metric({

  value,

  label,

}: MetricProps) {

  return (

    <>

      <div
        style={{
          fontSize: 46,
          fontWeight: 800,
          color: "white",
        }}
      >
        {value}
      </div>

      {label && (

        <div
          style={{
            color: "#94a3b8",
            marginTop: 8,
          }}
        >
          {label}
        </div>

      )}

    </>

  );

}

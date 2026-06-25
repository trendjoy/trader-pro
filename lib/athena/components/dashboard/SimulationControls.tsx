interface SimulationControlsProps {

    running:boolean;

    onStart:()=>void;

    onPause:()=>void;

    onReset:()=>void;

}

export function SimulationControls({

    running,

    onStart,

    onPause,

    onReset

}:SimulationControlsProps){

    return(

        <div

            style={{

                display:"flex",

                gap:12,

                marginBottom:20

            }}

        >

            <button

                onClick={onStart}

                disabled={running}

            >

                ▶ Iniciar

            </button>

            <button

                onClick={onPause}

                disabled={!running}

            >

                ⏸ Pausar

            </button>

            <button

                onClick={onReset}

            >

                🔄 Reset

            </button>

        </div>

    );

}
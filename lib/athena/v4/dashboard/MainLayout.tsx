import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {

  children: ReactNode;

  fixture: any;

  fixtures: any[];

  onSelectFixture: (fixture: any) => void;

}

export default function MainLayout({

  children,

  fixture,

  fixtures,

  onSelectFixture,

}: Props) {

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 320px",
        gap: 24,
        alignItems: "start",
      }}
    >

      <section>

        {children}

      </section>

      <Sidebar
        fixture={fixture}
        fixtures={fixtures}
        onSelectFixture={onSelectFixture}
      />

    </div>

  );

}

import type { ReactNode } from "react";

export const metadata = {
  title: "ATHENA",
  description: "ATHENA - Football Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#0f172a",
        }}
      >
        {children}
      </body>
    </html>
  );
}
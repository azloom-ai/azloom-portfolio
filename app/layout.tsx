import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AZLOOM — Sistemas hechos para evolucionar",
  description:
    "Diseñamos e implementamos sistemas para empresas que necesitan evolucionar sin depender de más gente. Automatización, SEO, GEO y AEO.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Cascadia+Code:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

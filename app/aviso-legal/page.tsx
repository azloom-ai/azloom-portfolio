import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal — AZLOOM",
  description: "Condiciones de uso y titularidad de este sitio web.",
};

const styles = `
  .legal-page { background: #FAF9F6; color: #111113; font-family: 'Inter', sans-serif; min-height: 100vh; }
  .legal-header { display: flex; justify-content: space-between; align-items: center; padding: 24px 48px; border-bottom: 1px solid #E5E3DE; }
  .legal-back { font-size: 14px; font-weight: 500; color: #111113; text-decoration: none; }
  .legal-back:hover { color: #2B2B2E; }
  .legal-content { max-width: 760px; margin: 0 auto; padding: 80px 48px 120px; }
  .legal-content h1 { font-size: 40px; font-weight: 700; margin-bottom: 16px; }
  .legal-updated { font-size: 13px; color: #BFC2C7; margin-bottom: 48px; font-family: 'Cascadia Code', monospace; }
  .legal-content h2 { font-size: 22px; font-weight: 700; margin: 40px 0 16px; }
  .legal-content p { font-size: 16px; color: #2B2B2E; line-height: 1.8; margin-bottom: 16px; }
  .legal-content ul { margin: 0 0 16px; padding-left: 24px; }
  .legal-content li { font-size: 16px; color: #2B2B2E; line-height: 1.8; margin-bottom: 8px; }
  .legal-content a { color: #111113; }
  @media (max-width: 768px) {
    .legal-header { padding: 20px 24px; }
    .legal-content { padding: 60px 24px 80px; }
    .legal-content h1 { font-size: 32px; }
  }
`;

export default function AvisoLegal() {
  return (
    <div className="legal-page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <header className="legal-header">
        <Link href="/" className="legal-back">
          ← AZLOOM
        </Link>
        <Link href="/" className="legal-back">
          Volver al inicio
        </Link>
      </header>

      <main className="legal-content">
        <h1>Aviso Legal</h1>
        <p className="legal-updated">Última actualización: 2026</p>

        <h2>1. Titularidad del sitio</h2>
        <p>
          Este sitio web (<a href="https://azloom-portfolio.vercel.app">azloom-portfolio.vercel.app</a>)
          es operado por AZLOOM, con sede en San José, Costa Rica. Para
          cualquier consulta relacionada con este aviso legal, podés
          contactarnos a través de{" "}
          <a href="mailto:hello@azloom.tech">hello@azloom.tech</a>.
        </p>

        <h2>2. Objeto del sitio</h2>
        <p>
          Este sitio tiene como único propósito presentar los servicios de
          AZLOOM (automatización de procesos, SEO, GEO y AEO) y mostrar
          proyectos realizados a modo de portfolio. No procesa pagos ni
          recolecta datos sensibles de sus visitantes.
        </p>

        <h2>3. Propiedad intelectual</h2>
        <p>
          El contenido de este sitio (textos, diseño, logo, marca AZLOOM y
          demás elementos gráficos) es propiedad de AZLOOM, salvo que se
          indique lo contrario. Los proyectos mostrados en la sección
          &quot;Proyectos&quot; pertenecen a sus respectivos clientes y se
          presentan aquí con fines de portfolio.
        </p>
        <p>
          No está permitido reproducir, distribuir o modificar el contenido
          de este sitio sin autorización previa de AZLOOM.
        </p>

        <h2>4. Enlaces a terceros</h2>
        <p>
          Este sitio incluye enlaces a proyectos y sistemas de demostración
          alojados en plataformas de terceros (por ejemplo Vercel o Claude).
          AZLOOM no se hace responsable del contenido o funcionamiento de
          sitios externos enlazados desde aquí.
        </p>
        <p>
          Algunos proyectos listados son demostraciones (&quot;demo&quot;)
          construidas para mostrar capacidades técnicas y no representan
          sistemas en producción activa de esos clientes, salvo que se
          indique explícitamente.
        </p>

        <h2>5. Limitación de responsabilidad</h2>
        <p>
          Nos esforzamos por mantener la información de este sitio
          actualizada y correcta, pero no garantizamos la ausencia de
          errores. AZLOOM no será responsable por daños derivados del uso o
          la imposibilidad de uso de este sitio.
        </p>

        <h2>6. Legislación aplicable</h2>
        <p>
          Este aviso legal se rige por las leyes de la República de Costa
          Rica. Cualquier disputa relacionada con el uso de este sitio se
          someterá a los tribunales competentes de Costa Rica.
        </p>

        <h2>7. Contacto</h2>
        <p>
          Para cualquier consulta sobre este aviso legal, escribinos a{" "}
          <a href="mailto:hello@azloom.tech">hello@azloom.tech</a> o por
          WhatsApp al <a href="https://wa.me/50688597501">+506 8859 7501</a>.
        </p>
      </main>
    </div>
  );
}

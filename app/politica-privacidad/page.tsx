import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — AZLOOM",
  description: "Cómo AZLOOM recopila, usa y protege tu información.",
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

export default function PoliticaPrivacidad() {
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
        <h1>Política de Privacidad</h1>
        <p className="legal-updated">Última actualización: 2026</p>

        <p>
          En AZLOOM (&quot;nosotros&quot;, &quot;nuestro&quot;) respetamos tu privacidad y
          nos comprometemos a proteger la información personal que compartís
          con nosotros a través de este sitio web y nuestros canales de
          contacto.
        </p>

        <h2>1. Información que recopilamos</h2>
        <p>Solo recopilamos la información que vos nos proporcionás directamente, por ejemplo cuando:</p>
        <ul>
          <li>Nos escribís por WhatsApp, email o cualquier formulario de contacto</li>
          <li>Nos contás sobre tu proyecto o negocio para preparar una propuesta</li>
        </ul>
        <p>
          Esto puede incluir tu nombre, número de teléfono, correo electrónico
          y cualquier información que decidas compartir sobre tu empresa o
          proyecto.
        </p>

        <h2>2. Cómo usamos tu información</h2>
        <p>Usamos la información que nos das únicamente para:</p>
        <ul>
          <li>Responder tus consultas y solicitudes</li>
          <li>Preparar cotizaciones y propuestas de trabajo</li>
          <li>Dar seguimiento a proyectos en curso</li>
          <li>Comunicarnos con vos sobre nuestros servicios, si lo autorizás</li>
        </ul>
        <p>No vendemos, alquilamos ni compartimos tu información con terceros para fines comerciales.</p>

        <h2>3. Cookies y datos de navegación</h2>
        <p>
          Este sitio es una página estática de presentación. No utilizamos
          cookies de rastreo ni herramientas de publicidad de terceros. Si en
          el futuro incorporamos analítica web, lo indicaremos aquí.
        </p>

        <h2>4. Seguridad</h2>
        <p>
          Tomamos medidas razonables para proteger la información que nos
          compartís, pero ningún medio de transmisión por internet es 100%
          seguro. Te recomendamos no enviar información sensible (como
          contraseñas o datos bancarios) por WhatsApp o email.
        </p>

        <h2>5. Tus derechos</h2>
        <p>
          Podés solicitarnos en cualquier momento que te informemos qué datos
          tuyos tenemos, que los corrijamos, o que los eliminemos por
          completo. Simplemente escribinos a{" "}
          <a href="mailto:hello@azloom.tech">hello@azloom.tech</a>.
        </p>

        <h2>6. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política ocasionalmente. La fecha de la
          última actualización siempre aparecerá al inicio de esta página.
        </p>

        <h2>7. Contacto</h2>
        <p>
          Si tenés preguntas sobre esta política de privacidad, escribinos a{" "}
          <a href="mailto:hello@azloom.tech">hello@azloom.tech</a> o por
          WhatsApp al{" "}
          <a href="https://wa.me/50688597501">+506 8859 7501</a>.
        </p>
      </main>
    </div>
  );
}

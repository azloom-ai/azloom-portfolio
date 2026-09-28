"use client";

import { useEffect } from "react";

const BODY_HTML = `
  <header class="header">
    <svg class="logo" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
      <path d="M343.41,526.69l-16.99,36.08c-1.49,3.16-4.54,5.16-7.87,5.16h-11.18c-6.53,0-10.78-7.26-7.89-13.45l66.33-141.82c1.48-3.17,4.54-5.18,7.89-5.18h28.25c3.29,0,6.31,1.94,7.82,5.04l69.19,141.82c3.03,6.2-1.23,13.59-7.82,13.59h-13.2c-3.29,0-6.31-1.95-7.82-5.05l-17.69-36.3c-1.51-3.1-4.53-5.05-7.82-5.05h-73.33c-3.34,0-6.39,2-7.87,5.16ZM407.58,502.19c6.55,0,10.8-7.32,7.85-13.52-15.28-32.1-24.21-50.73-28.36-61.87h-.3c-.06.16-17.12,40.38-26.83,62.09-2.77,6.18,1.49,13.31,7.95,13.31h39.7Z" fill="#111113"/>
      <path d="M509.81,546.93l107.68-103.63c6.06-5.83,2.16-16.5-6.02-16.5h-90.16c-4.95,0-8.95-4.24-8.95-9.48v-.37c0-5.24,4.01-9.48,8.95-9.48h139.11c4.95,0,8.95,4.24,8.95,9.48v6.09s-.43,5.2-2.28,7l-105.14,101.82c-6.03,5.84-2.13,16.48,6.04,16.74h95.26c5.74-.26,10,5.37,8.74,11.3l-.27,1.28c-.92,4.33-8.74,6.75-8.74,6.75h-147.14c-4.95,0-8.95-4.24-8.95-9.48v-4.49c0-2.67,1.06-5.22,2.93-7.02Z" fill="#111113"/>
      <path d="M711.08,407.47h13.35c4.88,0,8.84,4.19,8.84,9.37v122.39c0,5.17,3.96,9.37,8.84,9.37h85.59c5.65,0,9.85,5.53,8.64,11.37l-.12.6c-.89,4.3-4.48,7.36-8.64,7.36h-116.5c-4.88,0-8.84-4.19-8.84-9.37v-141.72c0-5.17,3.96-9.37,8.84-9.37Z" fill="#111113"/>
      <path d="M1079.47,486.85c0,44.41-33.45,83.72-101.09,83.72-63.62,0-98.69-36.67-98.69-82.88s36.35-82.88,101.26-82.88c60.55,0,98.52,33.87,98.52,82.03ZM912.74,487c0,34.18,22.61,63.43,66.98,63.43,47.95,0,66.7-29.9,66.7-63.24s-21.27-62.23-66.78-62.23-66.9,28.24-66.9,62.04Z" fill="#111113"/>
      <path d="M1286.67,486.85c0,44.41-33.45,83.72-101.1,83.72-63.62,0-98.69-36.67-98.69-82.88s36.35-82.88,101.26-82.88c60.55,0,98.52,33.87,98.52,82.03ZM1119.94,487c0,34.18,22.61,63.43,66.98,63.43,47.95,0,66.7-29.9,66.7-63.24s-21.26-62.23-66.78-62.23-66.9,28.24-66.9,62.04Z" fill="#111113"/>
      <path d="M1515.15,501.15c0-29.46.45-59.95,1.37-77.14h-1.2c-8.99,26.48-39.24,89.24-62.68,139.13-1.47,3.13-4.49,5.12-7.8,5.12h-17.03c-3.41,0-6.5-2.09-7.92-5.38-18.34-42.51-49.19-112-58.35-139.2h-1.03c1.68,18.66,2.43,53.94,2.43,81.57v53.79c0,5.09-3.9,9.22-8.71,9.22h-12.17c-4.81,0-8.71-4.13-8.71-9.22v-142.67c0-5.09,3.9-9.22,8.71-9.22h33.14c3.31,0,6.33,1.97,7.8,5.11,22.3,47.68,48.21,106.42,55.11,126.86h.47c4.89-16.01,35.68-80.08,59.13-127.06,1.51-3.02,4.47-4.91,7.7-4.91h31.87c4.81,0,8.71,4.13,8.71,9.22v142.67c0,5.09-3.9,9.22-8.71,9.22h-13.43c-4.81,0-8.71-4.13-8.71-9.22v-57.88Z" fill="#111113"/>
    </svg>
    <nav class="nav">
      <a href="#servicios">Servicios</a>
      <a href="#proyectos">Proyectos</a>
      <a href="https://www.instagram.com/azloom.tech/" target="_blank">Instagram</a>
      <a href="https://wa.me/50688597501">Contacto</a>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="palabra-1">Sistemas</span>
        <span class="palabra-2">hechos</span>
        <span>para evolucionar</span>
      </h1>
      <p class="hero-text">Operaciones que funcionan. Empresas que escalan. Diseñamos e implementamos sistemas para empresas que necesitan evolucionar sin depender de más gente.</p>
    </div>
  </section>

  <section id="servicios" class="services">
    <div class="services-content">
      <h2 class="section-title" data-reveal="up">Qué <span>hacemos</span></h2>
      <div class="services-grid">
        <div class="service-card" data-reveal="left" onclick="openModal('auto')">
          <h3 class="service-title">Automatización</h3>
          <p class="service-desc">Procesos automáticos que funcionan sin intervención manual.</p>
          <div class="service-details">
            <div class="service-section">
              <h4>¿Cómo funciona?</h4>
              <p>Tareas repetitivas que haces todos los días se automatizan. Órdenes, pagos, reportes, notificaciones — todo sin que tengas que hacer nada.</p>
            </div>
            <div class="service-example">
              <strong>Ejemplo:</strong> Cliente compra → Se crea factura automática → Se envía por email → Se guarda en tu sistema → Listo.
            </div>
            <div class="service-section">
              <h4>¿Por qué lo necesitas?</h4>
              <ul class="points-list">
                <li>Creces sin contratar más gente</li>
                <li>Menos errores (la máquina no se confunde)</li>
                <li>Tiempo liberado para lo importante</li>
                <li>Funciona 24/7 sin parar</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="service-card" data-reveal="right" onclick="openModal('seo')">
          <h3 class="service-title">SEO para Google</h3>
          <p class="service-desc">Que encuentren tu negocio cuando buscan en Google.</p>
          <div class="service-details">
            <div class="service-section">
              <h4>¿Cómo funciona?</h4>
              <p>Cuando alguien busca algo relacionado a tu negocio en Google, tu web aparece en los primeros resultados. Hace click y llega a ti.</p>
            </div>
            <div class="service-example">
              <strong>Ejemplo:</strong> Alguien busca "catering para eventos Costa Rica" → Tu web aparece → Te contactan
            </div>
            <div class="service-section">
              <h4>¿Por qué lo necesitas?</h4>
              <ul class="points-list">
                <li>Clientes gratis que buscan activamente lo que ofreces</li>
                <li>Resultados duraderos (no desaparece si paras de pagar)</li>
                <li>Competencia conocida (Google lleva 20 años así)</li>
                <li>Funciona 24/7 sin que hagas nada</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="service-card" data-reveal="left" onclick="openModal('geo')">
          <h3 class="service-title">GEO para ChatGPT &amp; IA</h3>
          <p class="service-desc">Que la IA recomiende tu negocio cuando le pregunten.</p>
          <div class="service-details">
            <div class="service-section">
              <h4>¿Cómo funciona?</h4>
              <p>Alguien pregunta a ChatGPT: "¿Dónde contratar catering en Costa Rica?" → La IA conoce tu negocio → Te menciona como opción → Clientes llegan a ti.</p>
            </div>
            <div class="service-example">
              <strong>Ejemplo:</strong> "¿Quién hace asados privados?" → "Conozco empresa X en Costa Rica que lo hace bien" → Tu teléfono suena
            </div>
            <div class="service-section">
              <h4>¿Por qué lo necesitas?</h4>
              <ul class="points-list">
                <li>Territorio nuevo (menos competencia ahora)</li>
                <li>Clientes que ya confían en la IA (alta calidad)</li>
                <li>Antes que tu competencia lo haga</li>
                <li>ChatGPT + Perplexity + Claude son "nuevos Google"</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="service-card" data-reveal="right" onclick="openModal('aeo')">
          <h3 class="service-title">AEO - Aparecer como Respuesta</h3>
          <p class="service-desc">Que TÚ seas la respuesta (no solo recomendado).</p>
          <div class="service-details">
            <div class="service-section">
              <h4>¿Cómo funciona?</h4>
              <p>Alguien busca "¿Qué incluye un asado privado?" → Google/IA muestra TU respuesta directamente → No necesitan hacer click → Te ven como autoridad.</p>
            </div>
            <div class="service-example">
              <strong>Ejemplo:</strong> En Google aparecen tus respuestas destacadas. En Perplexity, la IA cita tu web como fuente confiable.
            </div>
            <div class="service-section">
              <h4>¿Por qué lo necesitas?</h4>
              <ul class="points-list">
                <li>Máxima visibilidad (tu contenido se ve sin click)</li>
                <li>Posicionas tu marca como experta</li>
                <li>Clientes te ven como autoridad antes de contactar</li>
                <li>Funciona en Google Featured Snippets + IA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="proyectos" class="section">
    <h2 class="section-title" data-reveal="up">Proyectos <span>en producción</span></h2>
    <div class="projects-container">
      <div class="project-card" data-reveal="left">
        <div class="project-header">
          <div class="project-number">01</div>
          <div class="project-content">
            <div class="label">Sitio web · Arquitectura</div>
            <h3 class="project-title">IBARA Studio</h3>
            <p class="project-desc">Portfolio interactivo optimizado para Google y posicionamiento en IA.</p>
            <a href="https://ibara-studio.vercel.app" target="_blank" class="link-arrow">Ver proyecto →</a>
          </div>
        </div>
      </div>

      <div class="project-card" data-reveal="right">
        <div class="project-header">
          <div class="project-number">02</div>
          <div class="project-content">
            <div class="label">Ecommerce</div>
            <h3 class="project-title">David Artavia Art</h3>
            <p class="project-desc">Ecommerce de arte con pagos propios procesados automáticamente.</p>
            <a href="https://davidartaviastudio.com" target="_blank" class="link-arrow">Ver proyecto →</a>
          </div>
        </div>
      </div>

      <div class="project-card" data-reveal="left">
        <div class="project-header">
          <div class="project-number">03</div>
          <div class="project-content">
            <div class="label">Automatización · IA</div>
            <h3 class="project-title">Mareas Studio</h3>
            <p class="project-desc">Bot WhatsApp con IA + app de gestión que atiende consultas reales todos los días.</p>
            <a href="https://mareastudio.org" target="_blank" class="link-arrow">Ver proyecto →</a>
          </div>
        </div>
      </div>

      <div class="project-card" data-reveal="right">
        <div class="project-header">
          <div class="project-number">04</div>
          <div class="project-content">
            <div class="label">Sitio web + SEO</div>
            <h3 class="project-title">Distrito 11</h3>
            <p class="project-desc">Portfolio interactivo con plan de mantenimiento SEO continuo.</p>
            <a href="https://distrito11.com" target="_blank" class="link-arrow">Ver proyecto →</a>
          </div>
        </div>
      </div>

      <div class="project-card" data-reveal="left">
        <div class="project-header">
          <div class="project-number">05</div>
          <div class="project-content">
            <div class="label">Sistema de gestión · Demo</div>
            <h3 class="project-title">Azloom OS — Equipo</h3>
            <p class="project-desc">Sistema operativo interno para gestión de equipo y operaciones diarias.</p>
            <a href="https://claude.ai/artifact/4729gK4bXpBbZG3MumJNBV" target="_blank" class="link-arrow">Ver proyecto →</a>
          </div>
        </div>
      </div>

      <div class="project-card" data-reveal="right">
        <div class="project-header">
          <div class="project-number">06</div>
          <div class="project-content">
            <div class="label">Sistema de gestión · Demo</div>
            <h3 class="project-title">Azloom Arquitectura OS</h3>
            <p class="project-desc">Sistema de gestión a medida para estudios de arquitectura.</p>
            <a href="https://claude.ai/artifact/8oXCfWhtmTL2WfnFMwQqxB" target="_blank" class="link-arrow">Ver proyecto →</a>
          </div>
        </div>
      </div>

      <div class="project-card" data-reveal="left">
        <div class="project-header">
          <div class="project-number">07</div>
          <div class="project-content">
            <div class="label">Sistema corporativo · Demo</div>
            <h3 class="project-title">Dicoma Corporate OS</h3>
            <p class="project-desc">Sistema operativo corporativo para gestión integral de la empresa.</p>
            <a href="https://claude.ai/artifact/29uQWAw1WcHt824gwsJVbm" target="_blank" class="link-arrow">Ver proyecto →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="cta-container">
      <h2 class="cta-title" data-reveal="up">¿Cuál es tu operación?</h2>
      <p class="cta-text" data-reveal="up">Cuéntanos qué necesitas resolver. Diseñamos un sistema a medida.</p>
      <a href="https://wa.me/50688597501" class="btn btn-ink">Hablemos</a>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-col"><p>Sistemas hechos para evolucionar. Tecnología diseñada para personas, por personas.</p></div>
      <div class="footer-col">
        <div class="footer-label">Contacto</div>
        <a href="https://wa.me/50688597501" class="footer-link">WhatsApp: +506 8859 7501</a>
        <a href="mailto:hello@azloom.tech" class="footer-link">Email: hello@azloom.tech</a>
        <a href="https://www.instagram.com/azloom.tech/" target="_blank" class="footer-link">Instagram: @azloom.tech</a>
        <div class="footer-link">San José, Costa Rica</div>
      </div>
      <div class="footer-col">
        <div class="footer-label">Legal</div>
        <a href="/politica-privacidad" class="footer-link">Política de privacidad</a>
        <a href="/aviso-legal" class="footer-link">Aviso legal</a>
      </div>
    </div>
    <div class="footer-bottom">© 2026 AZLOOM · Sistemas hechos para evolucionar</div>
  </footer>

  <div id="modalAuto" class="modal">
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal('auto')">×</button>
      <h2 class="modal-title">Automatización</h2>
      <div class="modal-section">
        <h3>¿Qué hacemos?</h3>
        <ul class="points-list">
          <li>Integramos tus herramientas existentes (Airtable, Zapier, n8n, APIs)</li>
          <li>Diseñamos flujos automáticos que eliminan tareas manuales</li>
          <li>Escalamos sin contratar más personal</li>
          <li>Monitoreamos y mantenemos 24/7</li>
        </ul>
      </div>
      <div class="modal-section">
        <h3>Casos de uso</h3>
        <ul class="points-list">
          <li>Automatizar órdenes de venta y facturación</li>
          <li>Sincronizar datos entre plataformas</li>
          <li>Gestionar respuestas y seguimiento de leads</li>
          <li>Procesar datos y generar reportes automáticamente</li>
        </ul>
      </div>
    </div>
  </div>

  <div id="modalSeo" class="modal">
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal('seo')">×</button>
      <h2 class="modal-title">SEO para Google</h2>
      <div class="modal-section">
        <h3>¿Qué hacemos?</h3>
        <ul class="points-list">
          <li>Auditoría SEO técnica completa (velocidad, mobile, core web vitals)</li>
          <li>Investigación de palabras clave donde tu audiencia busca</li>
          <li>Optimización on-page (títulos, descripciones, estructura)</li>
          <li>Construcción de estrategia de contenido</li>
        </ul>
      </div>
      <div class="modal-section">
        <h3>¿Cuándo lo necesitas?</h3>
        <ul class="points-list">
          <li>Cuando tu web existe pero nadie la ve</li>
          <li>Cuando la competencia te supera en Google</li>
          <li>Cuando quieres crecer sin pagar publicidad</li>
          <li>Cuando necesitas consistencia en tráfico largo plazo</li>
        </ul>
      </div>
    </div>
  </div>

  <div id="modalGeo" class="modal">
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal('geo')">×</button>
      <h2 class="modal-title">GEO para ChatGPT &amp; IA</h2>
      <div class="modal-section">
        <h3>¿Qué es GEO?</h3>
        <ul class="points-list">
          <li>Generative Engine Optimization (optimización para IA)</li>
          <li>ChatGPT, Claude, Perplexity leen y recomiendan tu web</li>
          <li>Las IAs ven tu negocio como opción confiable</li>
          <li>Necesitas estar estructurado y verificable para la IA</li>
        </ul>
      </div>
      <div class="modal-section">
        <h3>Por qué es diferente</h3>
        <ul class="points-list">
          <li>Google es pasado, IA es futuro</li>
          <li>Menos competencia (todavía)</li>
          <li>Usuarios que ya confían en la IA = venta más fácil</li>
          <li>Te posiciona antes que tu competencia despierte</li>
        </ul>
      </div>
    </div>
  </div>

  <div id="modalAeo" class="modal">
    <div class="modal-content">
      <button class="modal-close" onclick="closeModal('aeo')">×</button>
      <h2 class="modal-title">AEO - Aparecer como Respuesta</h2>
      <div class="modal-section">
        <h3>¿Qué es AEO?</h3>
        <ul class="points-list">
          <li>Answer Engine Optimization</li>
          <li>Tu contenido se convierte en "la respuesta"</li>
          <li>Google Featured Snippets + IA citan tu web</li>
          <li>Clientes te ven como experto directo</li>
        </ul>
      </div>
      <div class="modal-section">
        <h3>Por qué lo necesitas</h3>
        <ul class="points-list">
          <li>Máxima visibilidad sin necesidad de click</li>
          <li>Posicionas tu marca como autoridad</li>
          <li>Clientes confían en ti antes de contactar</li>
          <li>Funciona en Google + en todos los asistentes IA</li>
        </ul>
      </div>
    </div>
  </div>
`;

const PAGE_STYLES = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: #FAF9F6; color: #111113; font-family: 'Inter', sans-serif; overflow-x: hidden; }

  .header { display: flex; justify-content: space-between; align-items: center; padding: 24px 48px; border-bottom: 1px solid #E5E3DE; position: sticky; top: 0; background: #FAF9F6; z-index: 100; backdrop-filter: blur(10px); }
  .logo { width: 100px; animation: slideInLeft 0.6s ease-out; }
  .nav { display: flex; gap: 32px; }
  .nav a { font-size: 14px; font-weight: 500; color: #111113; text-decoration: none; position: relative; transition: color 0.3s; }
  .nav a:after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #BFC2C7; transition: width 0.3s; }
  .nav a:hover:after { width: 100%; }

  .hero { position: relative; padding: 120px 48px; max-width: 1200px; margin: 0 auto; }
  .hero-content { position: relative; z-index: 1; }
  .hero-title { font-size: 56px; font-weight: 700; margin-bottom: 24px; line-height: 1.2; letter-spacing: -0.5px; display: flex; gap: 12px; flex-wrap: wrap; }
  .hero-title .palabra-1 { animation: slideFromLeft 0.8s ease-out 0.1s backwards; }
  .hero-title .palabra-2 { animation: slideFromLeft 0.8s ease-out 0.2s backwards; }
  .hero-title span { background: linear-gradient(135deg, #111113, #BFC2C7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: slideFromRight 0.8s ease-out 0.3s backwards; }
  .hero-text { font-size: 18px; color: #2B2B2E; line-height: 1.7; max-width: 600px; margin-bottom: 48px; }

  .btn { padding: 14px 32px; border-radius: 4px; border: none; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block; transition: all 0.3s; }
  .btn-ink { background: #111113; color: #FFFFFF; }
  .btn-ink:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(17,17,19,0.15); }

  .section { padding: 120px 48px; max-width: 1200px; margin: 0 auto; }
  .section-title { font-size: 48px; font-weight: 700; margin-bottom: 64px; }
  .section-title span { color: #BFC2C7; }

  .services { background: linear-gradient(135deg, #FFFFFF 0%, #FAF9F6 100%); padding: 160px 48px 120px; }
  .services-content { max-width: 1200px; margin: 0 auto; }
  .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; align-items: start; }
  .service-card { background: #FFFFFF; border: 1px solid #E5E3DE; border-radius: 8px; padding: 40px; transition: border-color 0.4s, box-shadow 0.4s; cursor: pointer; display: flex; flex-direction: column; min-height: 500px; }
  .service-card:hover { transform: translateY(-8px); border-color: #BFC2C7; }
  .service-title { font-size: 20px; font-weight: 700; margin-bottom: 16px; text-align: center; height: 60px; display: flex; align-items: center; justify-content: center; }
  .service-desc { font-size: 15px; color: #2B2B2E; margin-bottom: 24px; line-height: 1.7; text-align: center; height: 80px; display: flex; align-items: center; justify-content: center; }
  .service-details { font-size: 14px; color: #2B2B2E; line-height: 1.8; }
  .service-details .service-section:first-child h4 { margin-top: 0; }
  .service-section { margin-bottom: 24px; }
  .service-section h4 { font-size: 14px; font-weight: 700; margin-bottom: 12px; color: #111113; height: 20px; }
  .service-section p { margin-bottom: 12px; min-height: 130px; }
  .service-example { background: #FAF9F6; border-left: 3px solid #BFC2C7; padding: 16px; margin: 16px 0; border-radius: 4px; font-size: 13px; min-height: 130px; box-sizing: border-box; }
  .service-example strong { color: #111113; display: block; margin-bottom: 4px; }
  .points-list { list-style: none; }
  .points-list li { font-size: 14px; color: #2B2B2E; margin-bottom: 10px; padding-left: 24px; position: relative; }
  .points-list li:before { content: '→'; position: absolute; left: 0; color: #BFC2C7; }

  .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; align-items: flex-start; justify-content: center; overflow-y: auto; padding: 40px 20px; }
  .modal.active { display: flex; animation: fadeInUp 0.3s ease-out; }
  .modal-content { background: #FFFFFF; border-radius: 12px; padding: 40px; max-width: 650px; width: 100%; border: 1px solid #E5E3DE; position: relative; margin-top: 20px; }
  .modal-close { position: absolute; top: 20px; right: 20px; font-size: 28px; cursor: pointer; color: #BFC2C7; transition: color 0.3s; border: none; background: none; padding: 0; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; }
  .modal-close:hover { color: #111113; }
  .modal-title { font-size: 28px; font-weight: 700; margin-bottom: 32px; line-height: 1.2; }
  .modal-section { margin-bottom: 32px; }
  .modal-section h3 { font-size: 15px; font-weight: 700; margin-bottom: 16px; color: #111113; }
  .modal-section p { font-size: 15px; color: #2B2B2E; line-height: 1.8; margin-bottom: 0; }
  .modal-section ul { margin-top: 12px; }
  .modal-example { background: #FAF9F6; border-left: 3px solid #BFC2C7; padding: 16px; margin: 20px 0; border-radius: 4px; font-size: 14px; line-height: 1.6; }
  .modal-example strong { color: #111113; font-weight: 600; }

  .projects-container { display: grid; gap: 24px; }
  .project-card { background: #FFFFFF; border: 1px solid #E5E3DE; border-radius: 8px; padding: 40px; transition: border-color 0.4s, box-shadow 0.4s; cursor: pointer; }
  .project-card:hover { transform: translateY(-8px); border-color: #BFC2C7; box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
  .project-header { display: flex; gap: 28px; align-items: flex-start; }
  .project-number { font-size: 28px; font-weight: 700; color: #BFC2C7; flex-shrink: 0; font-family: 'Cascadia Code', monospace; letter-spacing: 2px; }
  .project-content { flex: 1; }
  .label { font-size: 11px; font-weight: 600; color: #BFC2C7; text-transform: uppercase; margin-bottom: 12px; letter-spacing: 1px; font-family: 'Cascadia Code', monospace; }
  .project-title { font-size: 22px; font-weight: 700; margin-bottom: 12px; }
  .project-desc { font-size: 15px; color: #2B2B2E; margin-bottom: 20px; line-height: 1.8; }
  .link-arrow { color: #BFC2C7; font-size: 14px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s; }
  .link-arrow:hover { color: #111113; gap: 12px; }

  .cta-section { padding: 120px 48px; text-align: center; background: #FFFFFF; }
  .cta-container { max-width: 700px; margin: 0 auto; }
  .cta-title { font-size: 48px; font-weight: 700; margin-bottom: 24px; }
  .cta-text { font-size: 18px; color: #2B2B2E; margin-bottom: 48px; line-height: 1.7; }

  .footer { background: #FAF9F6; border-top: 1px solid #E5E3DE; padding: 80px 48px; }
  .footer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; max-width: 1200px; margin: 0 auto 48px; }
  .footer-col { font-size: 14px; line-height: 1.8; }
  .footer-label { font-size: 11px; font-weight: 600; color: #BFC2C7; text-transform: uppercase; margin-bottom: 16px; letter-spacing: 1px; }
  .footer-link { color: #BFC2C7; text-decoration: none; display: block; margin-bottom: 8px; transition: color 0.3s; }
  .footer-link:hover { color: #111113; }
  .footer-bottom { text-align: center; border-top: 1px solid #E5E3DE; padding-top: 32px; color: #BFC2C7; font-size: 12px; }

  @keyframes slideInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes slideFromLeft { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes slideFromRight { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

  @media (max-width: 1024px) {
    .services-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .hero { padding: 80px 24px; }
    .hero-title { font-size: 36px; }
    .section { padding: 80px 24px; }
    .services { padding: 80px 24px; }
    .services-grid { grid-template-columns: 1fr; }
    .footer-grid { grid-template-columns: 1fr; }
    .header { padding: 20px 24px; }
    .service-details { font-size: 13px; }
    .modal-content { padding: 32px; }
  }
`;

declare global {
  interface Window {
    openModal?: (type: string) => void;
    closeModal?: (type: string) => void;
  }
}

export default function Home() {
  useEffect(() => {
    const modalIds: Record<string, string> = {
      auto: "modalAuto",
      seo: "modalSeo",
      geo: "modalGeo",
      aeo: "modalAeo",
    };

    window.openModal = (type: string) => {
      const el = document.getElementById(modalIds[type]);
      if (el) {
        el.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    };

    window.closeModal = (type: string) => {
      const el = document.getElementById(modalIds[type]);
      if (el) {
        el.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    };

    const onWindowClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("modal")) {
        target.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("click", onWindowClick);

    // Scroll-linked reveal: instead of toggling an animation class when
    // an element crosses a trigger line (which can fire more than once
    // per pass with stepped mouse-wheel/trackpad scrolling and looks
    // like flicker), each element's opacity/position is driven directly
    // and continuously by its distance from the trigger line. There is
    // no discrete on/off state to flicker between.
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    let ticking = false;

    const updateReveal = () => {
      const vh = window.innerHeight;
      const startLine = vh * 0.92;
      const endLine = vh * 0.55;

      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        let progress = (startLine - rect.top) / (startLine - endLine);
        progress = Math.min(1, Math.max(0, progress));

        if (progress >= 1) {
          // Fully revealed: clear inline styles so CSS (e.g. :hover)
          // is back in control instead of being overridden by them.
          el.style.opacity = "";
          el.style.transform = "";
          return;
        }

        const direction = el.dataset.reveal;
        const distance = 1 - progress;
        let transform = "";
        if (direction === "left") transform = `translateX(${-60 * distance}px)`;
        else if (direction === "right") transform = `translateX(${60 * distance}px)`;
        else transform = `translateY(${30 * distance}px)`;

        el.style.opacity = String(progress);
        el.style.transform = transform;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateReveal);
      }
    };

    updateReveal();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("click", onWindowClick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_STYLES }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  );
}

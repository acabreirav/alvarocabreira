import { dict, site, type Locale, type Project } from "@/lib/content";
import { CopyEmail } from "./CopyEmail";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <svg className="ext" viewBox="0 0 12 12" aria-hidden="true">
        <path d="M4 2h6v6M10 2 3 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </a>
  );
}

function ProjectCard({ p, labels }: { p: Project; labels: Record<"why" | "did" | "found" | "learned" | "next", string> }) {
  return (
    <article className="project" style={{ "--c": `var(--${p.line})` } as React.CSSProperties} id={p.id}>
      <span className={`badge ${p.line}`} aria-hidden="true">
        {p.mark}
      </span>
      <div className="project-body">
        <h3>{p.name}</h3>
        <p className={`status ${p.live ? "on" : "off"}`}>{p.status}</p>
        <p className="what">{p.what}</p>
        <dl>
          <div>
            <dt>{labels.why}</dt>
            <dd>{p.why}</dd>
          </div>
          <div>
            <dt>{labels.did}</dt>
            <dd>{p.did}</dd>
          </div>
          {p.found && (
            <div>
              <dt>{labels.found}</dt>
              <dd className="learned">{p.found}</dd>
            </div>
          )}
          {p.learned && (
            <div>
              <dt>{labels.learned}</dt>
              <dd className="learned">{p.learned}</dd>
            </div>
          )}
          {p.next && (
            <div>
              <dt>{labels.next}</dt>
              <dd>{p.next}</dd>
            </div>
          )}
        </dl>
        {p.links.length > 0 && (
          <p className="links-inline">
            {p.links.map((l) => (
              <ExternalLink key={l.href} href={l.href}>
                {l.label}
              </ExternalLink>
            ))}
          </p>
        )}
      </div>
    </article>
  );
}

export function Home({ locale }: { locale: Locale }) {
  const t = dict[locale];

  return (
    <>
      <header className="bar">
        <div className="bar-inner">
          <a className="name" href={locale === "es" ? "/" : "/en/"}>
            {site.name}
          </a>
          <nav aria-label={locale === "es" ? "Secciones" : "Sections"}>
            <a href="#trabajo">{t.nav.work}</a>
            <a href="#proyectos">{t.nav.projects}</a>
            <a href="#vida">{t.nav.life}</a>
            <a href="#contacto">{t.nav.contact}</a>
            <a className="lang" href={t.langSwitch.href} hrefLang={locale === "es" ? "en" : "es"}>
              {t.langSwitch.label}
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero wrap">
          <div className="hero-text">
            <h1>{t.hero.hello}</h1>
            <p className="lead">{t.hero.lead}</p>
            <div className="actions">
              <a className="btn solid" href={site.cv} target="_blank" rel="noopener">
                {t.hero.cv}
              </a>
              <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="btn" href={`mailto:${site.email}`}>
                {t.hero.email}
              </a>
            </div>
          </div>
          {site.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="photo" src={site.photo} alt={site.name} width={480} height={600} />
          ) : (
            <div className="photo sign" aria-hidden="true">
              <span className="sign-dot" />
              <span className="sign-name">Cabreira</span>
              <span className="sign-lines">
                <i className="l1" />
                <i className="l2" />
                <i className="l4" />
                <i className="l5" />
                <i className="l6" />
              </span>
            </div>
          )}
        </section>

        <section id="trabajo" className="wrap section">
          <h2>{t.work.title}</h2>
          <p className="section-intro">{t.work.intro}</p>
          <ol className="line">
            {t.work.stops.map((s) => (
              <li key={s.name} className={s.now ? "now" : undefined}>
                <h3>
                  {s.name} <span className="years">{s.years}</span>
                </h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="proyectos" className="wrap section">
          <h2>{t.projects.title}</h2>
          <p className="section-intro">{t.projects.intro}</p>
          <div className="projects">
            {t.projects.items.map((p) => (
              <ProjectCard key={p.id} p={p} labels={t.projects.labels} />
            ))}
          </div>
        </section>

        <section id="vida" className="wrap section">
          <h2>{t.life.title}</h2>
          <div className="life">
            {t.life.items.map((i) => (
              <div key={i.title} className="life-item" style={{ "--c": `var(--${i.line})` } as React.CSSProperties}>
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="wrap section contact">
          <h2>{t.contact.title}</h2>
          <p className="section-intro">{t.contact.text}</p>
          <p className="email">{site.email}</p>
          <div className="actions">
            <CopyEmail email={site.email} copy={t.contact.copy} copied={t.contact.copied} />
            <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{t.footer}</span>
      </footer>
    </>
  );
}

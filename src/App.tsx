import { useEffect, useState } from "react";
import {
  contactLinks,
  education,
  experience,
  focusAreas,
  funFacts,
  nextSections,
  profile,
  projects,
  skills,
  type FocusArea,
  type ProjectItem,
  type SkillCategory,
  type TimelineItem,
} from "./data/portfolio";

type PageKey = "home" | "contact" | "fun-facts";

const navItems: Array<{ key: PageKey; label: string; hash: string }> = [
  { key: "home", label: "Home", hash: "#home" },
  { key: "contact", label: "Contact", hash: "#contact" },
  { key: "fun-facts", label: "Fun Facts", hash: "#fun-facts" },
];

function getPageFromHash(hash: string): PageKey {
  if (hash === "#contact") {
    return "contact";
  }

  if (hash === "#fun-facts") {
    return "fun-facts";
  }

  return "home";
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
};

function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-body">{body}</p>
    </div>
  );
}

function ExperienceCard({ item }: { item: TimelineItem }) {
  return (
    <article className="card timeline-card">
      <div className="card-topline">
        <div>
          <h3>{item.title}</h3>
          <p className="muted">
            {item.organization} · {item.location}
          </p>
        </div>
        <p className="period">{item.period}</p>
      </div>
      <p className="summary">{item.summary}</p>
      <ul className="detail-list">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <article className="card project-card">
      <div className="card-topline">
        <h3>{item.name}</h3>
        <p className="period">{item.period}</p>
      </div>
      <p className="summary">{item.description}</p>
      <ul className="detail-list">
        {item.outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
    </article>
  );
}

function FocusCard({ item }: { item: FocusArea }) {
  return (
    <article className="card focus-card">
      <p className="panel-label">{item.label}</p>
      <h3>{item.title}</h3>
      <p className="summary">{item.description}</p>
      <ul className="detail-list">
        {item.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

function SkillCategoryCard({ item }: { item: SkillCategory }) {
  return (
    <article className="card skill-category-card">
      <p className="panel-label">{item.label}</p>
      <h3>{item.title}</h3>
      <p className="summary">{item.description}</p>
      <div className="chip-row">
        {item.items.map((skill) => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="hero-copy">
          <p className="eyebrow">Backend-focused software engineer</p>
          <p className="hero-greeting">Hi, I&apos;m Kelsey.</p>
          <p className="hero-role">
            I&apos;m most interested in backend engineering, scalable systems,
            and the infrastructure that keeps distributed software dependable.
          </p>
          <p className="hero-text">{profile.intro}</p>
          <p className="hero-now">{profile.now}</p>
        </div>
        <aside className="hero-panel">
          <div className="hero-panel-content">
            <p className="panel-label">Currently emphasizing</p>
            <p>
              Distributed backend services, messaging systems, Linux debugging,
              and infrastructure that can scale with production needs.
            </p>
          </div>
          <div className="hero-panel-content">
            <p className="panel-label">Contact</p>
            {contactLinks.map((item) => (
              <a href={item.href} key={item.label} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>
                {item.value}
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section className="focus-section">
        <SectionHeading
          eyebrow="Direction"
          title="What I want to make clear"
          body="The throughline across my roles and projects is backend ownership: distributed services, data movement, migrations, queue-driven workflows, and production reliability."
        />
        <div className="focus-grid">
          {focusAreas.map((item) => (
            <FocusCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="content-grid">
        <div className="main-column">
          <SectionHeading
            eyebrow="Experience"
            title="Work that shipped in real environments"
            body="This is a concise timeline of the roles and systems I have worked on so far. I can keep expanding each one into deeper stories and architecture breakdowns."
          />
          <div className="stack">
            {experience.map((item) => (
              <ExperienceCard
                item={item}
                key={`${item.organization}-${item.period}`}
              />
            ))}
          </div>
        </div>

        <div className="side-column">
          <div className="card aside-card">
            <p className="panel-label">Education</p>
            <h3>{education.degree}</h3>
            <p className="muted">
              {education.school} · {education.location}
            </p>
            <p className="period">{education.period}</p>
          </div>

          <div className="card aside-card">
            <p className="panel-label">Core interest</p>
            <p className="summary">
              Backend-first work with a strong pull toward scalable systems,
              distributed coordination, and operationally calm software.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <SectionHeading
          eyebrow="Selected projects"
          title="Projects that deserve more room than resume bullets"
          body="These projects show the kind of engineering work I enjoy most: automation, migration, service decomposition, and systems that have to hold up under real usage."
        />
        <div className="project-grid">
          {projects.map((item) => (
            <ProjectCard item={item} key={item.name} />
          ))}
        </div>
      </section>

      <section className="skills-section">
        <SectionHeading
          eyebrow="Skills"
          title="Grouped around the work I want to do more of"
          body="Instead of a flat list, I grouped these skills around the backend and platform work I want to emphasize most."
        />
        <div className="skills-grid">
          {skills.map((item) => (
            <SkillCategoryCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="next-section card">
        <SectionHeading
          eyebrow="Next iterations"
          title="Good places to deepen the site"
          body="The structure already supports multiple pages and stronger positioning. Next I can make it feel even more personal and specific."
        />
        <ul className="detail-list">
          {nextSections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <section className="single-page-section">
      <SectionHeading
        eyebrow="Contact"
        title="Ways to reach me"
        body="I want this page to stay minimal for now. Later I can add a contact form, downloadable resume links, or selected profiles."
      />
      <div className="contact-grid">
        {contactLinks.map((item) => (
          <article className="card contact-card" key={item.label}>
            <p className="panel-label">{item.label}</p>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              <h3>{item.value}</h3>
            </a>
            <p className="summary">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FunFactsPage() {
  return (
    <section className="single-page-section">
      <SectionHeading
        eyebrow="Fun facts"
        title="A lighter page for personality and work style"
        body="For now, I filled this page with engineering-flavored facts that reflect how I like to work. I can swap in more personal facts later."
      />
      <div className="fun-facts-grid">
        {funFacts.map((fact) => (
          <article className="card fun-fact-card" key={fact.title}>
            <p className="panel-label">{fact.label}</p>
            <h3>{fact.title}</h3>
            <p className="summary">{fact.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState<PageKey>(() =>
    getPageFromHash(window.location.hash),
  );

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash(window.location.hash));
    };

    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#home">
          Kelsey Zhao
        </a>
        <nav className="nav-tabs" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={page === item.key ? "nav-tab active" : "nav-tab"}
              href={item.hash}
              key={item.key}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {page === "home" && <HomePage />}
      {page === "contact" && <ContactPage />}
      {page === "fun-facts" && <FunFactsPage />}
    </main>
  );
}

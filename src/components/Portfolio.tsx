"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const sections = ["about", "work", "projects", "contact"] as const;

const jobs = [
  {
    dates: "Sep 2025 — Jun 2026",
    company: "TAMS — Travel & Meeting Society",
    role: "Backend Engineer",
    location: "Remote",
    summary: "Built an auditable multi-agent hotel procurement pipeline backed by Python, FastAPI, PostgreSQL, and structured analytics.",
    outcomes: [
      { value: "2 weeks", label: "RFP lifecycle, down from 6–12 months" },
      { value: "10k–50k", label: "spend-data rows analyzed per cycle" },
      { value: "3–10", label: "shortlisted vendors per cycle" },
    ],
    details: [
      "Built a multi-agent pipeline spanning Discovery, Evaluation, Pricing, and Explanation, with auditable decision traces backed by a Python/FastAPI REST API.",
      "Converted raw spend data into procurement signals with Pandas cohort analysis, IQR confidence bands, and Amadeus GDS market data.",
      "Led a five-dimension vendor scoring framework covering price, location, program fit, compliance, and service quality using Pydantic v2 schemas and weighted scoring.",
      "Built document ingestion and PostgreSQL pipelines that normalized varied RFP responses and efficiently retrieved thousands of historical quotes.",
    ],
  },
  {
    dates: "Jan 2025 — Jun 2025",
    company: "IntualAI",
    role: "Fullstack Engineer",
    location: "Santa Cruz, CA",
    summary: "Built AWS infrastructure, automation, deployment workflows, and secure developer access for a multi-tier microservices SaaS platform.",
    details: [
      "Reduced service interruptions by 70% with a Go Lambda and EventBridge workflow that refreshed Airtable webhooks and API tokens automatically.",
      "Provisioned the core AWS network with CDK and supported Kubernetes-based microservices deployment workflows.",
      "Implemented IAM Identity Center least-privilege access and temporary developer credentials.",
      "Designed AWS CodePipeline CI/CD gates using Jest and React Testing Library.",
    ],
  },
  {
    dates: "Aug 2023 — Oct 2024",
    company: "Nanotechnology Lab at UC Berkeley",
    role: "Software Engineer Intern",
    location: "Berkeley, CA",
    summary: "Led the CS team’s web and backend efforts for the lab’s public-facing research platform and real-time sensor visualization tooling.",
    details: [
      "Built a WCAG-compliant React, Express, MongoDB, and TypeScript application used by 50+ researchers and students.",
      "Built a Python/Flask API for real-time carbon nanotube sensor readings and rendered live V-C curves and response graphs with Chart.js.",
    ],
  },
];

const projects = [
  {
    title: "Driftguard",
    date: "Jun 2026",
    category: "LLM tooling · Developer infrastructure",
    description: "A prompt-versioning and selective evaluation system that treats LLM prompt changes like schema migrations.",
    tech: "Rust · PostgreSQL/pgvector · sqlx · OpenAI API · Next.js · TypeScript · GitHub Actions",
    details: [
      "Built a CLI that diffs prompt changes and uses embedding similarity to identify potentially affected evaluation cases.",
      "Shipped a dashboard for the prompt registry, structural diffs, evaluation runs, and a live precision/recall curve.",
      "Designed a ground-truth validation pipeline with full regression suites, an LLM judge, and threshold-sweep measurement.",
      "Built a GitHub Action that runs selected evaluations on pull requests and posts a pass/fail gating comment.",
    ],
    flow: ["Prompt diff", "Similarity selector", "Targeted evals", "PR gate"],
  },
  {
    title: "Terrarium",
    date: "Jan 2026",
    category: "AI infrastructure · Cloud architecture",
    description: "A visual, AI-powered AWS infrastructure designer that generates, validates, and remediates Terraform configurations.",
    tech: "React · TypeScript · Go · Python · LangGraph · Anthropic API",
    details: [
      "Built a React Flow canvas with schema-driven configuration, validated connections, live cost estimates, and Supabase project storage.",
      "Added Claude-powered Terraform generation with Monaco preview and export.",
      "Architected Go and FastAPI services with LangGraph agents for HCL generation, Terraform validation, and an automated remediation loop.",
      "Developed a review agent combining deterministic security and reliability checks with structured LLM analysis.",
    ],
    flow: ["Visual canvas", "HCL generation", "Validation", "Remediation"],
  },
];

function WindowBar({ label }: { label: string }) {
  return (
    <div className="window-bar">
      <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
      <span>{label}</span>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<(typeof sections)[number]>("about");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => setTime(new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Los_Angeles",
    }).format(new Date()));
    updateTime();
    const timer = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const updateSpotlight = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.style.setProperty("--spotlight-opacity", "1");
    };
    const hideSpotlight = () => root.style.setProperty("--spotlight-opacity", "0");

    window.addEventListener("pointermove", updateSpotlight, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideSpotlight);
    return () => {
      window.removeEventListener("pointermove", updateSpotlight);
      document.documentElement.removeEventListener("mouseleave", hideSpotlight);
    };
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as (typeof sections)[number]);
      },
      { rootMargin: "-20% 0px -55%", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) sectionObserver.observe(element);
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="ambient-background" aria-hidden="true">
        <i className="ambient-orb ambient-orb-one" />
        <i className="ambient-orb ambient-orb-two" />
      </div>
      <a className="skip-link" href="#about">Skip to content</a>
      <header className="site-header">
        <nav aria-label="Primary navigation" className="nav-shell">
          <div className="nav-tabs">
            {sections.map((section, index) => (
              <a
                key={section}
                href={`#${section}`}
                className={active === section ? "active" : ""}
                aria-current={active === section ? "page" : undefined}
              >
                <span>0{index + 1}</span>{section[0].toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
          <div className="nav-meta" aria-label="Location and local time">
            <span>Irvine, CA</span><span>PT {time}</span>
            <a href="mailto:omerahmer918@gmail.com">Email <ArrowUpRight size={13} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-copy window-panel reveal is-visible">
            <WindowBar label="" />
            <div className="hero-copy-inner">
              <p className="eyebrow">Backend & full-stack engineer · Irvine, California</p>
              <h1 id="hero-title">Syed Omer<br />Ahmer</h1>
              <div className="hero-bottom">
                <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight /></a>
              </div>
            </div>
          </div>
          <div className="hero-side reveal is-visible">
            <div className="hero-image window-panel">
              <WindowBar label="" />
              <div className="portrait-wrap">
                <Image
                  src="/images/omer.jpeg"
                  alt="Syed Omer Ahmer"
                  fill
                  priority
                  sizes="(max-width: 700px) 100vw, 42vw"
                />
              </div>
            </div>
            <aside className="affiliation-rail window-panel" aria-label="Affiliations">
              <WindowBar label="Affiliations" />
              <div className="affiliation-logos">
                <a href="https://www.berkeley.edu" target="_blank" rel="noreferrer" aria-label="UC Berkeley">
                  <Image src="/images/logos/berkeley-seal-source.png" alt="UC Berkeley seal" width={150} height={96} />
                  <span>UC Berkeley</span>
                </a>
                <a href="https://uci.edu" target="_blank" rel="noreferrer" aria-label="UC Irvine">
                  <Image src="/images/logos/uci-seal.png" alt="UC Irvine simplified seal" width={96} height={96} />
                  <span>UC Irvine</span>
                </a>
                <div className="affiliation-logo" aria-label="Intual AI">
                  <Image src="/images/logos/intualai.jpeg" alt="Intual AI logo" width={96} height={96} />
                  <span>Intual AI</span>
                </div>
                <div className="affiliation-logo" aria-label="Travel and Meeting Society">
                  <Image src="/images/logos/affiliation.png" alt="Travel and Meeting Society logo" width={96} height={96} />
                  <span>TAMS</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <div className="proof-strip" aria-label="Current profile highlights">
          <span>UC Irvine</span><i />
          <span>Software Engineering</span><i />
          <span>AWS Certified</span><i />
          <span>Full-stack · DevOps · Performance</span>
        </div>

        <section id="about" className="page-section" aria-labelledby="about-title">
          <div className="section-heading reveal">
            <p className="section-number">01 / About</p>
            <h2 id="about-title">Engineering with<br /><em>range and intent.</em></h2>
          </div>
          <div className="about-panel window-panel reveal">
            <WindowBar label="Profile / Background" />
            <div className="about-grid">
              <div className="about-copy">
                <div>
                  <p className="eyebrow">01 — Practice</p>
                  <p className="lead">I’m a software engineer who builds backend systems, cloud infrastructure, and full-stack products from first principles through production.</p>
                </div>
                <div className="about-columns">
                  <div>
                    <p className="eyebrow">02 — Focus</p>
                    <p>My work spans TypeScript, Go, Python, React, Next.js, FastAPI, PostgreSQL, AWS, Terraform, Docker, and Kubernetes—with a focus on reliable automation and explainable systems.</p>
                  </div>
                  <div>
                    <p className="eyebrow">03 — Education</p>
                    <p>I earned a B.S. in Software Engineering from the University of California, Irvine in June 2026.</p>
                  </div>
                </div>
                <div className="credentials">
                  <p className="eyebrow">AWS credentials</p>
                  <a href="https://www.credly.com/badges/eb6db03a-301d-4d19-a5e7-8d6cfc8a93e1?source=linked_in_profile" target="_blank" rel="noreferrer">Solutions Architect — Associate <ArrowUpRight /></a>
                  <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/d49f84b9ffdf403aaa66de023b40d0b0" target="_blank" rel="noreferrer">DevOps Engineer — Professional <ArrowUpRight /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="page-section" aria-labelledby="work-title">
          <div className="section-heading reveal">
            <p className="section-number">02 / Work</p>
            <h2 id="work-title">Selected<br /><em>experience.</em></h2>
          </div>
          <article className="featured-work window-panel reveal">
            <WindowBar label={`Featured role / ${jobs[0].dates}`} />
            <div className="work-feature-grid">
              <div className="work-intro">
                <p className="eyebrow">{jobs[0].company} · {jobs[0].location}</p>
                <h3>{jobs[0].role}</h3>
                <p>{jobs[0].summary}</p>
                <ul className="role-details">
                  {jobs[0].details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
              <div className="work-system" aria-label="TAMS multi-agent pipeline">
                <Image src="/images/logos/affiliation.png" alt="Travel and Meeting Society logo" width={112} height={112} />
                <div className="system-flow">
                  {["Discovery", "Evaluation", "Pricing", "Explanation"].map((stage, index) => (
                    <div key={stage}><span>0{index + 1}</span>{stage}</div>
                  ))}
                </div>
                <p>Auditable decision traces · Python / FastAPI · Pydantic · PostgreSQL</p>
              </div>
            </div>
            <div className="outcomes" aria-label="Measured outcomes">
              {jobs[0].outcomes?.map((outcome) => <div key={outcome.value}><strong>{outcome.value}</strong><span>{outcome.label}</span></div>)}
            </div>
          </article>
          <div className="work-list reveal">
            {jobs.slice(1).map((job, index) => (
              <article key={job.company} className="compact-role">
                <p className="eyebrow">0{index + 2} / {job.dates}</p>
                <h3>{job.company}</h3>
                <p className="role-title">{job.role} · {job.location}</p>
                <p>{job.summary}</p>
                <ul className="role-details compact-details">
                  {job.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="page-section" aria-labelledby="projects-title">
          <div className="section-heading reveal">
            <p className="section-number">03 / Projects</p>
            <h2 id="projects-title">Built to be<br /><em>used.</em></h2>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-panel reveal" key={project.title}>
                <div className="project-meta">
                  <p className="eyebrow">0{index + 1} / {project.category} · {project.date}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span>{project.tech}</span>
                  <ul className="project-details">
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
                <div className="project-preview project-flow" aria-label={`${project.title} system flow`}>
                  <p>{project.title} / System flow</p>
                  {project.flow.map((stage, stageIndex) => (
                    <div key={stage}><span>0{stageIndex + 1}</span><strong>{stage}</strong></div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section page-section" aria-labelledby="contact-title">
          <div className="contact-panel window-panel reveal">
            <WindowBar label="Contact / Open channel" />
            <div className="contact-inner">
              <p className="section-number">04 / Contact</p>
              <h2 id="contact-title">Have something<br />worth <em>building?</em></h2>
              <p className="contact-copy">I’m always interested in thoughtful software, ambitious teams, and conversations about what’s next.</p>
              <a className="primary-contact" href="mailto:omerahmer918@gmail.com">Start a conversation <Mail /></a>
              <div className="contact-links">
                <a href="mailto:omerahmer918@gmail.com"><Mail /> Email<span>omerahmer918@gmail.com</span></a>
                <a href="https://www.linkedin.com/in/omerahmer/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn<ArrowUpRight /></a>
                <a href="https://github.com/omerahmer" target="_blank" rel="noreferrer"><Github /> GitHub<ArrowUpRight /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer><span>Syed Omer Ahmer © {new Date().getFullYear()}</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}

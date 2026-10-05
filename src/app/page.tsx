"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  siDocker,
  siGithub,
  siGitlab,
  siGrafana,
  siJenkins,
  siLinux,
  siNginx,
  siPrometheus,
} from "simple-icons/icons";

const highlights = [
  {
    number: "01",
    eyebrow: "Delivery engineering",
    title: "Build once. Release with confidence.",
    body: "End-to-end GitLab CI/CD and Jenkins pipelines that make builds, testing, deployment, rollback, and release management predictable.",
    tags: ["GitLab CI/CD", "Jenkins", "Git", "YAML"],
    glyph: "↗",
  },
  {
    number: "02",
    eyebrow: "Cloud & connectivity",
    title: "Infrastructure that stays connected.",
    body: "AWS infrastructure and secure hybrid-cloud communication engineered with EC2, VPC, IPSec site-to-site VPN, SSL VPN, and resilient routing.",
    tags: ["AWS", "IPSec VPN", "Nginx", "SSL/TLS"],
    glyph: "◎",
  },
  {
    number: "03",
    eyebrow: "Signal & reliability",
    title: "Visibility before an incident becomes noise.",
    body: "Prometheus and Grafana dashboards with practical alerting across resource health, availability, backups, and service behavior.",
    tags: ["Prometheus", "Grafana", "Node Exporter", "Alerts"],
    glyph: "⌁",
  },
];

const skillGroups = [
  {
    label: "Cloud platform",
    items: ["AWS EC2", "AWS S3", "IAM", "VPC", "Security Groups", "EBS"],
  },
  {
    label: "Delivery & containers",
    items: ["GitLab CI/CD", "Jenkins", "Docker", "Docker Compose", "GitHub"],
  },
  {
    label: "Observability",
    items: ["Prometheus", "Grafana", "Blackbox Exporter", "Node Exporter"],
  },
  {
    label: "Systems & networking",
    items: ["Linux", "Nginx", "PM2", "MongoDB", "Redis", "Bash", "IPSec VPN", "SSL VPN"],
  },
];

const operatingPrinciples = [
  ["Automate the repeatable", "Pipelines, release steps, operational checks, and database backups should be dependable by default."],
  ["Design for recovery", "Versioned releases, rollback paths, tested restoration processes, and observable failure modes create operational confidence."],
  ["Keep the signal useful", "Meaningful metrics and alert rules make it easier to act early, isolate issues, and protect availability."],
];

const toolLogos = [
  { name: "AWS S3", icon: null },
  { name: "AWS EC2", icon: null },
  { name: "Jenkins", icon: siJenkins },
  { name: "GitLab CI/CD", icon: siGitlab },
  { name: "Docker", icon: siDocker },
  { name: "Nginx", icon: siNginx },
  { name: "Prometheus", icon: siPrometheus },
  { name: "Grafana", icon: siGrafana },
  { name: "Linux", icon: siLinux },
  { name: "GitHub", icon: siGithub },
];

const experience = [
  "Designed and maintained end-to-end CI/CD pipelines in GitLab CI/CD and Jenkins for automated build, test, and deployment workflows.",
  "Managed AWS EC2 infrastructure, security groups, storage, networking, and production deployments.",
  "Built Docker images and operated multi-container applications with Docker Compose.",
  "Configured Nginx reverse proxies and load-balancing patterns for frontend and backend applications.",
  "Established secure AWS-to-on-premises connectivity with IPSec site-to-site VPN and SSL VPN access.",
  "Implemented monitoring, dashboards, and alerting with Prometheus, Grafana, Node Exporter, and Blackbox Exporter.",
  "Automated MongoDB backup, retention, verification, and restoration processes with Bash and Cron.",
];

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function DownloadIcon() {
  return (
    <svg className="download-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 16v3.25c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75V16" />
    </svg>
  );
}

function BrandIcon({ icon }: { icon: { path: string; hex: string } }) {
  return (
    <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="brand-icon linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <text x="5" y="17" fill="white" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700">in</text>
    </svg>
  );
}

function ToolLogo({ name, icon }: { name: string; icon: { path: string; hex: string } | null }) {
  return (
    <div className="tool-logo" title={name}>
      {icon ? <BrandIcon icon={icon} /> : <span className="aws-tool-mark">AWS<br />{name.replace("AWS ", "")}</span>}
      <span>{name}</span>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const scroll = window.scrollY;
      document.documentElement.style.setProperty("--parallax-slow", `${scroll * 0.045}px`);
      document.documentElement.style.setProperty("--parallax-medium", `${scroll * 0.075}px`);
      document.documentElement.style.setProperty("--parallax-fast", `${scroll * 0.11}px`);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main>
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sharan home">
          <span className="brand-mark">S</span>
          <span>SHARAN</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Capabilities</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experience</a>
        </nav>
        <div className="header-actions">
          <a className="status-pill" href="#experience">
            <span className="status-dot" />
            System-minded
          </a>
          <a className="header-resume" href="/Sharan-DevOps-Resume.pdf" download>
            <DownloadIcon /> Resume
          </a>
        </div>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="kicker"><span className="pulse" /> DevOps Engineer · Cloud, automation & reliability</p>
          <h1>
            Delivery systems
            <span>that keep moving.</span>
          </h1>
          <p className="hero-summary">
            Sharan engineers reliable paths from commit to production - with pragmatic automation,
            secure infrastructure, and monitoring that turns complexity into confidence.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the work <Arrow /></a>
            <a className="button button-social" href="https://www.linkedin.com/in/sharan-sharma-a616a1307/" target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn <Arrow />
            </a>
            <a className="button button-social" href="https://github.com/sharansharma0619-boop" target="_blank" rel="noreferrer">
              <BrandIcon icon={siGithub} /> GitHub <Arrow />
            </a>
          </div>
          <div className="hero-facts" aria-label="Core focus areas">
            <div><strong>CI/CD</strong><span>Automated releases</span></div>
            <div><strong>AWS</strong><span>Cloud operations</span></div>
            <div><strong>OBS</strong><span>Actionable monitoring</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Illustrated DevOps delivery system">
          <div className="visual-ring ring-one" aria-hidden="true" />
          <div className="visual-ring ring-two" aria-hidden="true" />
          <Image
            className="hero-art"
            src="/devops-command-center.png"
            alt="A stylized cloud deployment pipeline with containers, monitoring, and secure infrastructure"
            width={1536}
            height={864}
            priority
          />
          <div className="terminal-window">
            <div className="terminal-top"><span /><span /><span /><p>release.status</p></div>
            <div className="terminal-content">
              <p><i>$</i> pipeline deploy --production</p>
              <p className="terminal-fade"><b>✓</b> build artifact verified</p>
              <p className="terminal-fade"><b>✓</b> infrastructure healthy</p>
              <p><em>●</em> rollout in progress</p>
            </div>
          </div>
          <div className="signal-card">
            <div className="signal-label"><span className="signal-dot" /> uptime signal</div>
            <div className="signal-value">99.9<span>%</span></div>
            <div className="signal-line" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          </div>
          <div className="gif-badge">
            <iframe
              src="https://giphy.com/embed/gbl47QTWkbdjZSqCrc"
              title="Animated DevOps repository and Docker workflow"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="DevOps specialties">
        <div className="marquee-track">
          <span>CI/CD PIPELINES</span><i>✦</i><span>SECURE NETWORKS</span><i>✦</i><span>CONTAINER DELIVERY</span><i>✦</i><span>OBSERVABILITY</span><i>✦</i><span>RELIABLE RELEASES</span><i>✦</i>
          <span aria-hidden="true">CI/CD PIPELINES</span><i aria-hidden="true">✦</i><span aria-hidden="true">SECURE NETWORKS</span><i aria-hidden="true">✦</i><span aria-hidden="true">CONTAINER DELIVERY</span><i aria-hidden="true">✦</i>
        </div>
      </section>

      <section className="section-shell work-section" id="work">
        <div className="section-intro">
          <p className="eyebrow">What I build</p>
          <h2>Operational clarity,<br /><span>built into the system.</span></h2>
          <p>From delivery pipelines to production visibility, the work stays focused on repeatability, security, and a calmer path to change.</p>
        </div>
        <div className="capability-grid">
          {highlights.map((highlight) => (
            <article className="capability-card" key={highlight.number}>
              <div className="card-head"><span>{highlight.number}</span><b>{highlight.glyph}</b></div>
              <p className="eyebrow">{highlight.eyebrow}</p>
              <h3>{highlight.title}</h3>
              <p>{highlight.body}</p>
              <div className="tags">{highlight.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell stack-section" id="stack">
        <div className="stack-heading">
          <p className="eyebrow">The toolchain</p>
          <h2>Practical tools.<br /><span>Production intent.</span></h2>
          <p>A deliberately grounded stack for cloud operations, secure application delivery, and continuous insight.</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <p>{group.label}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="tool-logo-wall" aria-label="Featured DevOps tools">
          <p className="tool-logo-title">Tools in the delivery path</p>
          <div className="tool-logo-grid">
            {toolLogos.map((tool) => <ToolLogo key={tool.name} {...tool} />)}
          </div>
        </div>
      </section>

      <section className="principles-wrap">
        <div className="section-shell principles">
          <div>
            <p className="eyebrow">How I operate</p>
            <h2>Less toil.<br /><span>More certainty.</span></h2>
          </div>
          <div className="principles-list">
            {operatingPrinciples.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell experience-section" id="experience">
        <div className="experience-intro">
          <p className="eyebrow">Experience</p>
          <h2>Keeping production<br /><span>on a steady course.</span></h2>
          <div className="role-card">
            <p className="role-company">Digicognit Private Limited</p>
            <h3>DevOps Engineer</h3>
            <span>Cloud infrastructure · Delivery automation · Production support</span>
          </div>
        </div>
        <ol className="experience-list">
          {experience.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}
        </ol>
      </section>

      <section className="outro section-shell">
        <div className="outro-line" aria-hidden="true" />
        <p className="eyebrow">Built for the next release</p>
        <h2>Make the path to<br /><span>production calmer.</span></h2>
        <a className="button button-primary" href="#top">Back to top <Arrow /></a>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand" href="#top"><span className="brand-mark">S</span><span>SHARAN</span></a>
        <p>DevOps Engineer · Systems that ship with confidence.</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}

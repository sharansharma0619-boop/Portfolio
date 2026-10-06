"use client";

import Image from "next/image";
import { useEffect } from "react";
import { siDocker, siGithub, siGitlab, siGrafana, siJenkins, siLinux, siNginx, siPrometheus } from "simple-icons/icons";

const social = {
  linkedin: "https://www.linkedin.com/in/sharan-sharma-a616a1307/",
  github: "https://github.com/sharansharma0619-boop",
};

const capabilities = [
  { number: "01", title: "RELEASE\nENGINEERING", description: "A deliberate route from commit to production: repeatable builds, CI/CD workflows, clear release stages, and safer deployments.", tools: ["GitLab CI/CD", "Jenkins", "Git", "YAML"] },
  { number: "02", title: "CLOUD\nFOUNDATIONS", description: "Cloud infrastructure and connected environments designed with access, security, compute, storage, and routing in view.", tools: ["AWS EC2", "AWS S3", "IAM", "VPC", "EBS"] },
  { number: "03", title: "SERVICE\nOBSERVABILITY", description: "Operational signals that make services easier to understand before an issue becomes an escalation.", tools: ["Prometheus", "Grafana", "Node Exporter", "Alerts"] },
];

const stackGroups = [
  { number: "01", title: "DELIVERY", tools: ["GitLab CI/CD", "Jenkins", "GitHub", "Docker", "Docker Compose"] },
  { number: "02", title: "CLOUD", tools: ["AWS EC2", "AWS S3", "IAM", "VPC", "Security Groups", "EBS"] },
  { number: "03", title: "RUNTIME", tools: ["Linux", "Nginx", "PM2", "MongoDB", "Redis", "Bash"] },
  { number: "04", title: "SIGNAL", tools: ["Prometheus", "Grafana", "Blackbox Exporter", "Node Exporter"] },
];

const toolLogos = [
  { name: "AWS S3", icon: null, label: "S3" }, { name: "AWS EC2", icon: null, label: "EC2" },
  { name: "Jenkins", icon: siJenkins }, { name: "GitLab CI/CD", icon: siGitlab },
  { name: "Docker", icon: siDocker }, { name: "Nginx", icon: siNginx },
  { name: "Prometheus", icon: siPrometheus }, { name: "Grafana", icon: siGrafana },
  { name: "Linux", icon: siLinux }, { name: "GitHub", icon: siGithub },
];

const experience = [
  "Built and maintained CI/CD pipelines in GitLab CI/CD and Jenkins for automated build, test, and deployment workflows.",
  "Operated AWS infrastructure across EC2, networking, security groups, storage, and production deployments.",
  "Packaged and ran multi-container services with Docker and Docker Compose.",
  "Configured Nginx reverse proxy and load-balancing patterns for application delivery.",
  "Established AWS-to-on-premises connectivity using IPSec site-to-site and SSL VPN access.",
  "Implemented monitoring, dashboards, and alerting with Prometheus, Grafana, Node Exporter, and Blackbox Exporter.",
];

type Icon = { path: string; hex: string };
function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }
function DownloadIcon() { return <svg className="download-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 16v3.25c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75V16" /></svg>; }
function GithubIcon() { return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d={siGithub.path} fill="currentColor" /></svg>; }
function LinkedInIcon() { return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9c.3 0 .55-.25.55-.55V3.55a.55.55 0 0 0-.55-.55ZM8.34 18.34H5.66V9.73h2.68v8.61ZM7 8.55a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.36 9.79h-2.67v-4.19c0-1 0-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.21v4.26h-2.67V9.73h2.56v1.18h.04c.36-.67 1.23-1.38 2.53-1.38 2.71 0 3.21 1.78 3.21 4.1v4.71Z" /></svg>; }
function ToolLogo({ name, icon, label }: { name: string; icon: Icon | null; label?: string }) { return <div className="tool-logo" title={name}>{icon ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} fill={"#" + icon.hex} /></svg> : <span className="aws-mark">AWS<br />{label}</span>}<span>{name}</span></div>; }

export default function Home() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    let request = 0;
    const update = () => { request = 0; const scroll = window.scrollY; document.documentElement.style.setProperty("--drift-near", `${scroll * -0.075}px`); document.documentElement.style.setProperty("--drift-mid", `${scroll * -0.04}px`); document.documentElement.style.setProperty("--drift-far", `${scroll * 0.025}px`); };
    const onScroll = () => { if (!request) request = window.requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (request) window.cancelAnimationFrame(request); };
  }, []);

  return <main id="top">
    <div className="grain" aria-hidden="true" />
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Sharan home"><span>SHARAN</span><i>DEVOPS</i></a>
      <nav aria-label="Primary navigation"><a href="#capabilities"><b>01</b> CAPABILITIES</a><a href="#stack"><b>02</b> TOOLCHAIN</a><a href="#experience"><b>03</b> EXPERIENCE</a></nav>
      <div className="header-actions">
        <a className="header-social" href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open Sharan's LinkedIn profile"><LinkedInIcon /></a>
        <a className="header-social" href={social.github} target="_blank" rel="noopener noreferrer" aria-label="Open Sharan's GitHub profile"><GithubIcon /></a>
        <a className="resume-link" href="/Sharan-DevOps-Resume.pdf" download><DownloadIcon /><span>RESUME</span></a>
      </div>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" /><div className="hero-orb hero-orb-one" aria-hidden="true" /><div className="hero-orb hero-orb-two" aria-hidden="true" />
      <p className="hero-index">01 / 03<br />PORTFOLIO</p>
      <div className="hero-content">
        <p className="hero-kicker"><span /> DEVOPS ENGINEER / CLOUD, DELIVERY &amp; RELIABILITY</p>
        <h1 id="hero-title">SHIP<br /><em>WITH</em> INTENT.</h1>
        <p className="hero-description">I build the dependable machinery behind modern software delivery: secure cloud foundations, automated release paths, and signals that make production easier to run.</p>
        <div className="hero-buttons"><a className="hero-cta" href="#capabilities">EXPLORE SYSTEMS <Arrow /></a></div>
      </div>
      <div className="hero-media" aria-label="Illustration of a cloud delivery system">
        <div className="media-frame" />
        <Image className="hero-image" src="/devops-command-center.png" alt="Stylized DevOps command center showing cloud delivery and monitoring" width={1536} height={864} priority />
        <div className="release-card"><div className="card-bar"><span /><span /><span /><b>DEPLOYMENT / LIVE</b></div><p><i>$</i> release production</p><p className="muted"><strong>✓</strong> artifact verified</p><p className="muted"><strong>✓</strong> service health ready</p><p className="active"><span /> rollout in progress</p></div>
        <div className="signal-stamp"><b>OBS</b><span>MONITOR<br />THE SIGNAL</span></div>
        <div className="motion-gif" aria-label="Animated DevOps workflow"><iframe src="https://giphy.com/embed/gbl47QTWkbdjZSqCrc" title="Animated DevOps workflow" loading="lazy" /></div>
      </div>
      <a className="scroll-note" href="#capabilities"><span>SCROLL TO EXPLORE</span><i>↓</i></a>
    </section>

    <section className="intro-strip" aria-label="Portfolio introduction"><p>FROM <b>COMMIT</b> TO <b>CONFIDENCE.</b></p><p>Automation, infrastructure, observability.</p></section>

    <section className="capabilities" id="capabilities">
      <div className="section-capabilities-heading"><p className="section-label">01 / CAPABILITIES</p><h2>ENGINEERING<br />THE <em>PATH</em><br />TO PRODUCTION.</h2><p>Every system is designed to make change more understandable, repeatable, and recoverable.</p></div>
      <div className="capability-list">{capabilities.map((capability) => <article className="capability-row" key={capability.number}><span className="row-number">{capability.number}</span><h3>{capability.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><div className="row-detail"><p>{capability.description}</p><div>{capability.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div><span className="row-arrow">↗</span></article>)}</div>
    </section>

    <section className="manifesto" aria-label="DevOps operating principle"><div className="manifesto-orb" aria-hidden="true" /><p className="section-label">A CALMER WAY TO OPERATE</p><h2>LESS TOIL.<br /><em>MORE</em> CERTAINTY.</h2><p className="manifesto-copy">Release automation, secure infrastructure, observability, and recovery are not separate concerns. They are one delivery system.</p><div className="manifesto-tags"><span>CI/CD</span><span>CLOUD</span><span>SECURITY</span><span>OBSERVABILITY</span></div></section>

    <section className="toolchain" id="stack">
      <div className="toolchain-header"><p className="section-label">02 / TOOLCHAIN</p><p>Purposeful tools, selected for the production path.</p></div>
      <div className="stack-groups">{stackGroups.map((group) => <article key={group.title}><span>{group.number}</span><h3>{group.title}</h3><ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></article>)}</div>
      <div className="tool-logo-wall"><p>THE DELIVERY TOOLSET</p><div>{toolLogos.map((tool) => <ToolLogo key={tool.name} {...tool} />)}</div></div>
    </section>

    <section className="experience" id="experience">
      <div className="experience-visual" aria-hidden="true"><p>03</p><span>EXPERIENCE</span><div className="experience-disc" /><div className="experience-line" /></div>
      <div className="experience-content"><p className="section-label">DEVOPS ENGINEER / DIGICOGNIT PRIVATE LIMITED</p><h2>KEEPING<br />PRODUCTION<br /><em>IN MOTION.</em></h2><ol>{experience.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></div>
    </section>

    <section className="contact"><p className="section-label">NEXT RELEASE / LET&apos;S CONNECT</p><h2>BUILD FOR<br /><em>WHAT&apos;S NEXT.</em></h2><div className="contact-actions"><a href={social.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /><span>LINKEDIN</span><Arrow /></a><a href={social.github} target="_blank" rel="noopener noreferrer"><GithubIcon /><span>GITHUB</span><Arrow /></a><a href="/Sharan-DevOps-Resume.pdf" download><DownloadIcon /><span>DOWNLOAD RESUME</span><Arrow /></a></div></section>
    <footer><a className="wordmark" href="#top"><span>SHARAN</span><i>DEVOPS</i></a><p>© {new Date().getFullYear()} / SYSTEMS THAT SHIP WITH CONFIDENCE</p><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}

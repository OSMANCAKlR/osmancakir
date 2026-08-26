import Head from "next/head";
import Image from "next/image";
import poplocal from "../assets/poplocal1.png";
import mileu from "../assets/mileu1.png";
import Link from "next/link";
import osman from "../assets/potrait.webp";
import ProjectLaptop from "@/components/ProjectLaptop";
import { useEffect, useState, useRef } from "react";
import healthheiress from "../assets/healthheiress.png";
import dandaraga from "../assets/danda1.png";
import sharkninja from "../assets/sharkninja1.jpg";
import beautychef from "../assets/beautychef1.jpg";
import cygnett from "../assets/cygnett1.png";
import chief from "../assets/chief1.jpg";
import Contact from "@/components/Contact";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Home() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const codeRef = useRef(null);

  const codeSnippet = `// Senior Software Developer
const developer = {
  name: 'Osman Cakir',
  location: 'Sydney, NSW',
  skills: ['Shopify Liquid', 'JavaScript', 'React', 'Next.js'],
  specialties: ['Theme Builds', 'Migrations', 'Client Solutioning'],
  projects: '30+ client websites',
};`;

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    if (isTyping) {
      intervalId = setInterval(() => {
        setText(codeSnippet.substring(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex === codeSnippet.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setIsTyping(false);
          }, 1000);
        }
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [isTyping]);

  return (
    <>
      <Head>
        <title>Osman Cakir | Senior Software Developer</title>
        <meta
          name="description"
          content="Senior Software Developer specialising in client-facing Shopify delivery - storefronts, theme migrations, and technical solutioning. Based in Sydney, NSW."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="hero">
          <div className="container">
            <div className="hero-content">
              <div className="profile-card">
                <div className="profile-image-container">
                  <Image
                    src={osman}
                    alt="Osman Cakir"
                    className="profile-image"
                  />
                </div>
                <h2 className="profile-name">Osman Cakir</h2>
                <p className="profile-description">
                  Senior Software Developer based in Sydney, NSW - Shopify
                  storefronts, migrations, and client-facing technical delivery
                </p>
                <div className="profile-contact">
                  <a href="tel:0435341135" className="contact-item">
                    <FaPhone className="contact-icon" /> 0435 341 135
                  </a>
                  <a
                    href="mailto:osman.cakir1@outlook.com"
                    className="contact-item"
                  >
                    <FaEnvelope className="contact-icon" /> Email Me
                  </a>
                  <a
                    href="/resume.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    Resume / CV
                  </a>
                </div>
                <div className="profile-socials">
                  <a
                    href="https://github.com/calicomediadev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon github-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.calicomedia.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaGlobe />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/osman-cakir1/"
                    className="social-icon"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>

              <div className="hero-details">
                <div className="code-editor-container">
                  <div className="code-editor-header">
                    <div className="window-buttons">
                      <span className="window-button red"></span>
                      <span className="window-button yellow"></span>
                      <span className="window-button green"></span>
                    </div>
                    <div className="window-title">developer.js</div>
                  </div>
                  <pre className="code-editor">
                    <code
                      ref={codeRef}
                      dangerouslySetInnerHTML={{
                        __html: text
                          .replace(
                            /(\/\/ Senior Software Developer)/g,
                            '<span class="code-comment">$1</span>',
                          )
                          .replace(
                            /(const developer)/g,
                            '<span class="code-const">$1</span>',
                          )
                          .replace(
                            /(\{|\})/g,
                            '<span class="code-bracket">$1</span>',
                          )
                          .replace(
                            /(name|location|skills|specialties|projects):/g,
                            '<span class="code-property">$1</span>',
                          )
                          .replace(
                            /('Osman Cakir'|'Sydney, NSW'|'Shopify Liquid'|'JavaScript'|'React'|'Next\.js'|'Theme Builds'|'Migrations'|'Client Solutioning'|'30\+ client websites')/g,
                            '<span class="code-string">$1</span>',
                          )
                          .replace(
                            /(\[|\])/g,
                            '<span class="code-array">$1</span>',
                          )
                          .replace(
                            /(;)/g,
                            '<span class="code-semicolon">$1</span>',
                          ),
                      }}
                    ></code>
                    <span
                      className={`cursor ${!isTyping ? "blink" : ""}`}
                    ></span>
                  </pre>
                </div>

                <div className="title-container">
                  <h1 className="main-title">SHOPIFY</h1>
                  <h1 className="secondary-title">ENGINEER</h1>
                  <p className="title-description">
                    Client-facing Shopify engineer who takes outcomes from
                    conversation to production - clarifying requirements,
                    building storefronts, owning migrations, and walking clients
                    through how it works.
                  </p>
                  <a href="#projects" className="see-work-btn">
                    See My Work
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 13l5 5 5-5"></path>
                      <path d="M7 6l5 5 5-5"></path>
                    </svg>
                  </a>
                </div>

                <div className="stats-container">
                  <div className="stat-item">
                    <h2 className="stat-number">+30</h2>
                    <p className="stat-label">
                      CLIENT
                      <br />
                      PROJECTS
                    </p>
                  </div>
                  <div className="stat-item">
                    <h2 className="stat-number">~4</h2>
                    <p className="stat-label">
                      YEARS OF
                      <br />
                      EXPERIENCE
                    </p>
                  </div>
                  <div className="stat-item">
                    <h2 className="stat-number">UTS</h2>
                    <p className="stat-label">
                      BACHELOR
                      <br />
                      IT GRADUATE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">MY</h2>
              <h2 className="section-subtitle">EXPERTISE</h2>
            </div>

            <div className="expertise-content">
              <div className="expertise-text">
                <p>
                  As a Senior Software Developer at Process Creative, I work
                  directly with enterprise Shopify clients - joining meetings,
                  making technical decisions, and delivering storefront and
                  migration work end to end.
                </p>
                <p>
                  Previously as Lead Developer at Calico Media, I built Shopify
                  and Next.js sites from scratch for 30+ clients, translating
                  Figma designs into production-ready storefronts with custom
                  Liquid sections and third-party integrations.
                </p>
                <p>
                  I thrive on ownership across the delivery lifecycle:
                  requirements clarification, technical design, build, client
                  walkthroughs, and go-live support - explaining complex Shopify
                  concepts in language clients can act on.
                </p>
              </div>

              <div className="skills-list">
                <div className="skill-category">
                  <h3>Shopify & Commerce</h3>
                  <div className="skills-tags">
                    <span className="skill-tag">Shopify Liquid</span>
                    <span className="skill-tag">Online Store</span>
                    <span className="skill-tag">Theme Migrations</span>
                    <span className="skill-tag">Shopify 2.0</span>
                    <span className="skill-tag">Custom Sections</span>
                    <span className="skill-tag">Client Workshops</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Languages & Frameworks</h3>
                  <div className="skills-tags">
                    <span className="skill-tag">JavaScript (ES6+)</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Next.js</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">Tailwind CSS</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Delivery & Design</h3>
                  <div className="skills-tags">
                    <span className="skill-tag">
                      Figma Design Implementation
                    </span>
                    <span className="skill-tag">Technical Solutioning</span>
                    <span className="skill-tag">Responsive Design</span>
                    <span className="skill-tag">Web Accessibility (WCAG)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">PROCESS</h2>
              <h2 className="section-subtitle">CREATIVE</h2>
            </div>
            <p className="clients-intro">
              At Process Creative I work as a Senior Software Developer on
              enterprise Shopify accounts - attending client meetings, owning
              technical decisions, and shipping storefront work across BAU and
              project delivery. Shopify stores only.
            </p>
            <div className="clients-grid">
              <Link href="/sharkninja" className="client-card">
                <div className="client-card-header">
                  <h3>SharkNinja</h3>
                  <FaExternalLinkAlt className="client-link-icon" />
                </div>
                <p>
                  New unified Shopify store - previously separate Shark Clean
                  and Ninja Kitchen sites. Built PDPs, cart, and compare;
                  order/customer migrations; major UAT.
                </p>
              </Link>
              <Link href="/beautychef" className="client-card">
                <div className="client-card-header">
                  <h3>The Beauty Chef</h3>
                  <FaExternalLinkAlt className="client-link-icon" />
                </div>
                <p>
                  Led Shopify 1.0 → 2.0 migration end to end - Slate to
                  proprietary themekit via internal toolkit, full client
                  communication, and live walkthrough handover.
                </p>
              </Link>
              <Link href="/chief" className="client-card">
                <div className="client-card-header">
                  <h3>Chief Nutrition</h3>
                  <FaExternalLinkAlt className="client-link-icon" />
                </div>
                <p>
                  Led client meetings and storefront work - bulk-buy discount UX
                  plus a custom Shopify app that applies quantity discounts from
                  product metafields.
                </p>
              </Link>
              <a
                href="https://bondisands.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="client-card"
              >
                <div className="client-card-header">
                  <h3>Bondi Sands</h3>
                  <FaExternalLinkAlt className="client-link-icon" />
                </div>
                <p>
                  Assisted with the launch of the new site - storefront
                  development supporting go-live for the refreshed brand
                  experience.
                </p>
              </a>
              <a
                href="https://www.mocka.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="client-card"
              >
                <div className="client-card-header">
                  <h3>Mocka</h3>
                  <FaExternalLinkAlt className="client-link-icon" />
                </div>
                <p>
                  Shopify development and technical support on an active
                  enterprise account, including client-facing technical
                  discussions.
                </p>
              </a>
              <Link href="/cygnett" className="client-card">
                <div className="client-card-header">
                  <h3>Cygnett</h3>
                  <FaExternalLinkAlt className="client-link-icon" />
                </div>
                <p>
                  General Shopify development with a focus on product detail
                  pages across the live AU accessories storefront.
                </p>
              </Link>
              <a
                href="https://www.strangelove.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="client-card"
              >
                <div className="client-card-header">
                  <h3>Strangelove</h3>
                  <FaExternalLinkAlt className="client-link-icon" />
                </div>
                <p>
                  Shopify storefront development and technical support on an
                  active brand account.
                </p>
              </a>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">FEATURED</h2>
              <h2 className="section-subtitle">PROJECTS</h2>
            </div>

            <div className="projects-grid">
              <Link href="/sharkninja" className="project-card">
                <ProjectLaptop
                  image={sharkninja}
                  title="SharkNinja"
                  description="New unified Shopify store - Shark Clean and Ninja Kitchen were separate sites. Built PDPs, cart, and compare; migrated orders and customers; major UAT."
                  link="/sharkninja"
                  tags={[
                    "Shopify",
                    "Liquid",
                    "PDPs",
                    "Cart",
                    "Compare",
                    "Migration",
                  ]}
                />
              </Link>

              <Link href="/beautychef" className="project-card">
                <ProjectLaptop
                  image={beautychef}
                  title="The Beauty Chef"
                  description="Led Shopify 1.0 → 2.0 migration end to end - Slate to proprietary themekit via internal toolkit, full client communication, and live walkthrough handover."
                  link="/beautychef"
                  tags={[
                    "Shopify 2.0",
                    "Migration",
                    "Slate",
                    "Themekit",
                    "Liquid",
                  ]}
                />
              </Link>

              <Link href="/dandaraga" className="project-card">
                <ProjectLaptop
                  image={dandaraga}
                  title="Dandaraga Springs"
                  description="Transformed WordPress / WooCommerce to Shopify from scratch - Build Your Box, subscriptions, BeCool courier integration, and full client ownership."
                  link="/dandaraga"
                  stats={[
                    { value: "253K+", label: "Page Visits" },
                    { value: "7400%", label: "Revenue Increase" },
                  ]}
                  tags={[
                    "Shopify",
                    "WooCommerce Migration",
                    "Subscriptions",
                    "Build Your Box",
                    "BeCool API",
                  ]}
                />
              </Link>

              <Link href="/poplocal" className="project-card">
                <ProjectLaptop
                  image={poplocal}
                  title="PopLocal"
                  description="Built from scratch - advanced eCommerce platform connecting 300+ local Canberra businesses with customers. Next.js, Square API, real-time inventory sync, and a headless CMS."
                  link="/poplocal"
                  stats={[
                    { value: "25K+", label: "Page Visits" },
                    { value: "1,831", label: "User Accounts" },
                  ]}
                  tags={[
                    "Next.js",
                    "React",
                    "Square API",
                    "Contentful",
                    "Firebase",
                    "RESTful APIs",
                  ]}
                />
              </Link>

              <Link href="/healthheiress" className="project-card">
                <ProjectLaptop
                  image={healthheiress}
                  title="Health Heiress"
                  description="Custom Shopify development with pixel-perfect Figma implementation for a health and wellness e-commerce brand. Achieved 4% increase in conversion rate through strategic UX optimisations."
                  link="/healthheiress"
                  stats={[
                    { value: "4%", label: "CRO Increase" },
                    { value: "429k", label: "Page Visits" },
                  ]}
                  tags={["Shopify", "Liquid", "JavaScript", "HTML/CSS", "CRO"]}
                />
              </Link>

              <Link href="/milieu" className="project-card">
                <ProjectLaptop
                  image={mileu}
                  title="Milieu Childcare Consulting"
                  description="Developed from the ground up using NextJS to deliver an innovative and dynamic website. Translated detailed Figma designs into a responsive, user-friendly interface."
                  link="/milieu"
                  stats={[{ value: "30%", label: "More Form Submissions" }]}
                  tags={[
                    "Next.js",
                    "React",
                    "GHL Webhooks",
                    "Tailwind CSS",
                    "Vercel",
                  ]}
                />
              </Link>

              <Link href="/chief" className="project-card">
                <ProjectLaptop
                  image={chief}
                  title="Chief Nutrition"
                  description="Led client meetings and Shopify storefront work - bulk-buy discount UX and a custom app that discounts by quantity using product metafields the client controls."
                  link="/chief"
                  tags={[
                    "Shopify",
                    "Custom App",
                    "Metafields",
                    "Bulk Discount",
                    "Liquid",
                  ]}
                />
              </Link>

              <Link href="/cygnett" className="project-card">
                <ProjectLaptop
                  image={cygnett}
                  title="Cygnett"
                  description="General Shopify development at Process Creative with a focus on product detail pages across the live AU accessories storefront."
                  link="/cygnett"
                  tags={["Shopify", "Liquid", "PDPs", "JavaScript"]}
                />
              </Link>
            </div>

            <div className="more-projects-cta">
              <h3>And Many More...</h3>
              <p>
                These featured projects represent just a small sample of my
                work. I&apos;d be happy to discuss more projects and how I can
                help bring your vision to life.
              </p>
              <a href="#contact" className="see-work-btn">
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l5 5 5-5"></path>
                  <path d="M7 7l5 5 5-5"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">WORK</h2>
              <h2 className="section-subtitle">EXPERIENCE</h2>
            </div>

            <div className="experience-content">
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">
                    Senior Software Developer
                  </h3>
                  <span className="experience-company">
                    Process Creative - Shopify Premier Partner
                  </span>
                  <span className="experience-duration">
                    Jun 2025 – Present · ~1 yr 4 mo
                  </span>
                </div>
                <div className="experience-description">
                  <p>
                    Shopify-only client work at a Premier Partner. Promoted to
                    Senior in Jun 2026. Client meetings, technical decisions,
                    storefront delivery, migrations, UAT, and custom apps when
                    themes aren&apos;t enough.
                  </p>
                  <ul className="experience-bullets">
                    <li>
                      Enterprise accounts including SharkNinja, Cygnett, Bondi
                      Sands, The Beauty Chef, Chief Nutrition, Mocka, and
                      Strangelove
                    </li>
                    <li>
                      SharkNinja unified store - previously separate Shark Clean
                      and Ninja Kitchen sites; built PDPs, cart, and compare;
                      order/customer migrations; major UAT
                    </li>
                    <li>
                      Led The Beauty Chef Shopify 1.0 → 2.0 migration (Slate to
                      proprietary themekit), including all client communication
                      and a live walkthrough handover
                    </li>
                    <li>
                      Chief Nutrition - led client meetings; bulk-buy discount
                      UX; custom Shopify app applying quantity discounts from
                      product metafields
                    </li>
                    <li>
                      Built custom Shopify apps for client-specific logic; Bondi
                      Sands launch support; Cygnett PDPs; Mocka &amp;
                      Strangelove storefront work
                    </li>
                  </ul>
                </div>
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">Lead Developer</h3>
                  <span className="experience-company">Calico Media</span>
                  <span className="experience-duration">2023 – Jun 2025</span>
                </div>
                <div className="experience-description">
                  <p>
                    Led development for 30+ client projects - greenfield Shopify
                    and Next.js builds from scratch, with a focus on custom
                    storefronts and pixel-perfect Figma implementation.
                  </p>
                  <ul className="experience-bullets">
                    <li>
                      Transformed Dandaraga Springs from WordPress / WooCommerce
                      to Shopify from scratch - Build Your Box, subscriptions,
                      BeCool courier API, and full client ownership
                    </li>
                    <li>
                      Built PopLocal from scratch - Next.js eCommerce platform
                      with Square API, Contentful, and Firebase
                    </li>
                    <li>
                      Delivered custom Shopify Liquid sections, templates, and
                      CRO-focused storefront work across multiple brands
                    </li>
                    <li>
                      Managed multiple concurrent projects while collaborating
                      with designers and meeting client deadlines
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">CONTACT</h2>
            </div>
            <div className="contact-content">
              <p className="contact-description">
                Interested in working together? I&apos;m currently available for
                new projects and opportunities. Feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">
                      <FaPhone />
                    </span>
                    <a href="tel:0435341135">0435 341 135</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">
                      <FaEnvelope />
                    </span>
                    <a href="mailto:osman.cakir1@outlook.com">
                      osman.cakir1@outlook.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">
                      <FaMapMarkerAlt />
                    </span>
                    <span>Sydney, NSW</span>
                  </div>
                </div>
              </div>
              <Contact />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

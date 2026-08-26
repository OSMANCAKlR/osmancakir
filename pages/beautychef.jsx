import Head from "next/head";
import Link from "next/link";
import beautychef1 from "../assets/beautychef1.jpg";
import ImageCarousel from "@/components/ImageCarousel";

export default function BeautyChef() {
  const carouselImages = [
    {
      src: beautychef1,
      alt: "The Beauty Chef Shopify 2.0 storefront homepage",
    },
  ];

  return (
    <>
      <Head>
        <title>The Beauty Chef Case Study | Osman Cakir</title>
        <meta
          name="description"
          content="Case study of The Beauty Chef Shopify 2.0 migration - led end to end from a 1.0 Slate theme to Process Creative's proprietary themekit"
        />
      </Head>
      <main>
        <section className="case-study-hero">
          <div className="container">
            <Link href="/" className="back-button">
              ← Back to Home
            </Link>
            <div className="case-study-header">
              <h1 className="case-title">The Beauty Chef</h1>
              <h2 className="case-subtitle">Shopify 2.0 Migration</h2>
              <div className="links-container">
                <a
                  href="https://thebeautychef.com/"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit The Beauty Chef website"
                >
                  <span
                    role="img"
                    aria-label="link"
                    style={{ marginRight: "6px", fontSize: "16px" }}
                  >
                    🔗
                  </span>
                  View Website
                </a>
              </div>
            </div>
            <div className="case-overview">
              <div className="case-image-container">
                <ImageCarousel images={carouselImages} />
              </div>
              <div className="case-details">
                <div className="case-info">
                  <div className="info-group">
                    <h3>Client</h3>
                    <p>The Beauty Chef (via Process Creative)</p>
                  </div>
                  <div className="info-group">
                    <h3>Engagement</h3>
                    <p>Shopify 1.0 → 2.0 migration</p>
                  </div>
                  <div className="info-group">
                    <h3>Role</h3>
                    <p>Lead - migration &amp; client delivery</p>
                  </div>
                  <div className="info-group">
                    <h3>Technologies</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">Shopify 2.0</span>
                      <span className="tech-tag">Liquid</span>
                      <span className="tech-tag">Slate → Themekit</span>
                      <span className="tech-tag">Internal Toolkit</span>
                    </div>
                  </div>
                </div>
                <div className="case-summary">
                  <h3>Project Overview</h3>
                  <p>
                    The Beauty Chef was on a Shopify 1.0 storefront. I led the
                    upgrade to Shopify 2.0 end to end - owning the technical
                    migration, all client communication, and a live walkthrough
                    of what changed and how to use the new theme. We moved from
                    Slate onto Process Creative&apos;s proprietary themekit
                    using our internal toolkit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-study-content">
          <div className="container">
            <div className="content-section">
              <h2>Key Accomplishments</h2>
              <div className="approach-grid">
                <div className="approach-card">
                  <h3>Led the 2.0 Migration</h3>
                  <p>
                    Took charge of upgrading the live store from Shopify 1.0 to
                    Shopify 2.0 - sections, templates, and Online Store 2.0
                    patterns suited to a modern beauty &amp; wellness catalogue.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Slate → Proprietary Themekit</h3>
                  <p>
                    The existing build ran on Slate. Using our internal toolkit,
                    we transformed the theme onto Process Creative&apos;s
                    proprietary themekit as the baseline for the 2.0 storefront.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Full Client Ownership</h3>
                  <p>
                    Managed all client communication throughout the project -
                    clarifying requirements, flagging trade-offs, and keeping
                    stakeholders aligned on what would change at go-live.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Live Walkthrough Handover</h3>
                  <p>
                    After delivery, ran a live walkthrough covering what changed
                    and how to use the new theme - so the client could operate
                    the storefront confidently without a paperwork dump.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Technical Deep Dive</h2>
              <div className="tech-details">
                <div className="tech-detail-group">
                  <h3>Why 2.0 mattered</h3>
                  <p>
                    Shopify 1.0 limited how the brand could iterate on
                    merchandising and content. Moving to 2.0 unlocked modern
                    sections and a theme architecture the team could maintain
                    long-term - without a full rebuild from an unrelated
                    starter.
                  </p>
                </div>
                <div className="tech-detail-group">
                  <h3>Internal toolkit &amp; themekit</h3>
                  <p>
                    Rather than hand-porting a legacy Slate theme, we used
                    Process Creative&apos;s internal toolkit to transform onto
                    the proprietary themekit. That kept agency standards
                    consistent and gave The Beauty Chef a maintainable 2.0
                    baseline.
                  </p>
                </div>
                <div className="tech-detail-group">
                  <h3>Handover as part of delivery</h3>
                  <p>
                    Migration success isn&apos;t only cutover - it&apos;s the
                    client understanding the new admin experience. The live
                    walkthrough closed that gap: what moved, what&apos;s
                    editable, and what to watch for.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Results &amp; Impact</h2>
              <div className="results-grid">
                <div className="result-card">
                  <div className="result-number">1.0→2.0</div>
                  <p>Full Shopify Online Store upgrade</p>
                </div>
                <div className="result-card">
                  <div className="result-number">Solo</div>
                  <p>End-to-end ownership of migration</p>
                </div>
                <div className="result-card">
                  <div className="result-number">Live</div>
                  <p>Client walkthrough &amp; handover</p>
                </div>
              </div>
              <p className="results-summary">
                The Beauty Chef now runs on Shopify 2.0 on Process
                Creative&apos;s proprietary themekit - with the client briefed
                through a live walkthrough on how the new storefront works.
              </p>
            </div>

            <div className="next-project">
              <h2>Next Project</h2>
              <Link href="/dandaraga" className="next-project-link">
                <span>Dandaraga Springs</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

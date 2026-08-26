import Head from "next/head";
import Link from "next/link";
import cygnett1 from "../assets/cygnett1.png";
import ImageCarousel from "@/components/ImageCarousel";

export default function Cygnett() {
  const carouselImages = [
    {
      src: cygnett1,
      alt: "Cygnett product detail page for Power Bank 45K",
    },
  ];

  return (
    <>
      <Head>
        <title>Cygnett Case Study | Osman Cakir</title>
        <meta
          name="description"
          content="Case study of Cygnett Shopify work at Process Creative - general storefront development with a focus on product detail pages"
        />
      </Head>
      <main>
        <section className="case-study-hero">
          <div className="container">
            <Link href="/" className="back-button">
              ← Back to Home
            </Link>
            <div className="case-study-header">
              <h1 className="case-title">Cygnett</h1>
              <h2 className="case-subtitle">Shopify Storefront Development</h2>
              <div className="links-container">
                <a
                  href="https://www.cygnett.com/"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Cygnett website"
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
                    <p>Cygnett (via Process Creative)</p>
                  </div>
                  <div className="info-group">
                    <h3>Engagement</h3>
                    <p>Ongoing Shopify development</p>
                  </div>
                  <div className="info-group">
                    <h3>Role</h3>
                    <p>Senior Software Engineer</p>
                  </div>
                  <div className="info-group">
                    <h3>Technologies</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">Shopify</span>
                      <span className="tech-tag">Liquid</span>
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">PDPs</span>
                    </div>
                  </div>
                </div>
                <div className="case-summary">
                  <h3>Project Overview</h3>
                  <p>
                    On the Cygnett account at Process Creative I do general
                    Shopify development across the live AU storefront, with a
                    strong focus on product detail pages - galleries, pricing,
                    features, and add-to-cart for a large accessories catalogue.
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
                  <h3>Product Detail Pages</h3>
                  <p>
                    Built and iterated on PDPs for Cygnett&apos;s product range
                    - media galleries, pricing and promotions, feature blocks,
                    and clear add-to-cart paths for power banks, chargers, and
                    accessories.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>General Storefront Development</h3>
                  <p>
                    Delivered ongoing Shopify theme and storefront work as part
                    of the Process Creative engagement - shipping practical
                    improvements against live brand requirements.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Client-Facing Delivery</h3>
                  <p>
                    Joined technical discussions on the account, translating
                    requests into Shopify-feasible solutions and keeping
                    delivery aligned with commercial priorities.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Technical Deep Dive</h2>
              <div className="tech-details">
                <div className="tech-detail-group">
                  <h3>PDPs at catalogue scale</h3>
                  <p>
                    Cygnett&apos;s range spans power, cases, cables, and
                    accessories. PDPs need consistent structure - imagery,
                    specs, promos, and CTAs - so shoppers can evaluate products
                    quickly without one-off templates for every SKU.
                  </p>
                </div>
                <div className="tech-detail-group">
                  <h3>BAU-style delivery</h3>
                  <p>
                    Work sits in an ongoing agency model: clarify the request,
                    implement in Liquid/JS on the live theme, and validate
                    against the real storefront before release.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Results &amp; Impact</h2>
              <div className="results-grid">
                <div className="result-card">
                  <div className="result-number">PDPs</div>
                  <p>Core product page development</p>
                </div>
                <div className="result-card">
                  <div className="result-number">Live</div>
                  <p>Ongoing AU storefront support</p>
                </div>
                <div className="result-card">
                  <div className="result-number">Agency</div>
                  <p>Process Creative engagement</p>
                </div>
              </div>
              <p className="results-summary">
                Cygnett&apos;s Shopify storefront continues to ship PDP and
                general theme work through Process Creative - keeping the
                accessories catalogue presentation sharp for AU shoppers.
              </p>
            </div>

            <div className="next-project">
              <h2>Next Project</h2>
              <Link href="/poplocal" className="next-project-link">
                <span>PopLocal</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

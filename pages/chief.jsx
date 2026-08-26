import Head from "next/head";
import Link from "next/link";
import chief1 from "../assets/chief1.jpg";
import ImageCarousel from "@/components/ImageCarousel";

export default function ChiefNutrition() {
  const carouselImages = [
    {
      src: chief1,
      alt: "Chief Nutrition PDP with bulk-buy quantity discounts",
    },
  ];

  return (
    <>
      <Head>
        <title>Chief Nutrition Case Study | Osman Cakir</title>
        <meta
          name="description"
          content="Case study of Chief Nutrition - Shopify storefront development and a custom app for metafield-driven bulk-buy quantity discounts"
        />
      </Head>
      <main>
        <section className="case-study-hero">
          <div className="container">
            <Link href="/" className="back-button">
              ← Back to Home
            </Link>
            <div className="case-study-header">
              <h1 className="case-title">Chief Nutrition</h1>
              <h2 className="case-subtitle">
                Shopify Development &amp; Custom Discount App
              </h2>
              <div className="links-container">
                <a
                  href="https://wearechief.com/"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Chief Nutrition website"
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
                    <p>Chief Nutrition (via Process Creative)</p>
                  </div>
                  <div className="info-group">
                    <h3>Engagement</h3>
                    <p>Storefront + custom Shopify app</p>
                  </div>
                  <div className="info-group">
                    <h3>Role</h3>
                    <p>Senior Software Developer</p>
                  </div>
                  <div className="info-group">
                    <h3>Technologies</h3>
                    <div className="tech-tags">
                      <span className="tech-tag">Shopify</span>
                      <span className="tech-tag">Custom App</span>
                      <span className="tech-tag">Metafields</span>
                      <span className="tech-tag">Liquid</span>
                      <span className="tech-tag">JavaScript</span>
                    </div>
                  </div>
                </div>
                <div className="case-summary">
                  <h3>Project Overview</h3>
                  <p>
                    For Chief Nutrition I led client meetings, shaped the
                    technical approach, and delivered the storefront work they
                    asked for - including a bulk-buy discount flow on product
                    pages. I also built a custom Shopify app that applies
                    quantity-based discounts driven by product metafields the
                    client can edit themselves.
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
                  <h3>Led client meetings</h3>
                  <p>
                    Ran technical conversations with the client - clarified what
                    they wanted for bulk pricing, agreed the approach, and
                    shipped against those requirements without leaving gaps.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Bulk-buy discount UI</h3>
                  <p>
                    Built the quantity chooser on PDPs (e.g. 1 / 3 / 5 pouches)
                    so shoppers see unit prices, savings, and free-shipping
                    callouts before add to cart - with the cart total updating
                    to the selected pack size.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Custom Shopify app</h3>
                  <p>
                    Built a custom Shopify app that discounts line items based
                    on quantity rules. Themes alone couldn&apos;t own that
                    pricing logic cleanly - the app applies the correct discount
                    against the quantity the shopper picks.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Metafield-driven rules</h3>
                  <p>
                    Each product can carry a metafield defining which discount
                    applies at which quantity. Merchants set the tiers in admin
                    - no code change when they tweak 5% at 3 units vs 10% at 5.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Technical Deep Dive</h2>
              <div className="tech-details">
                <div className="tech-detail-group">
                  <h3>Why a custom app</h3>
                  <p>
                    Bulk pack pricing had to stay accurate from PDP through
                    cart. Putting the rules in a custom app kept discounting
                    consistent and let the storefront UI stay focused on
                    presenting options, not inventing prices.
                  </p>
                </div>
                <div className="tech-detail-group">
                  <h3>Metafields as the source of truth</h3>
                  <p>
                    Quantity → discount mapping lives on the product metafield.
                    The app reads those values and applies the matching discount
                    when the cart quantity hits a configured tier. The client
                    stays in control of commercial rules without a developer
                    ticket for every change.
                  </p>
                </div>
                <div className="tech-detail-group">
                  <h3>Storefront + subscriptions</h3>
                  <p>
                    The same PDP also supports one-time vs subscribe paths
                    alongside bulk packs - so the quantity discount work had to
                    sit cleanly next to existing purchase options.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Results &amp; Impact</h2>
              <div className="results-grid">
                <div className="result-card">
                  <div className="result-number">App</div>
                  <p>Custom quantity discount app</p>
                </div>
                <div className="result-card">
                  <div className="result-number">Meta</div>
                  <p>Client-editable quantity tiers</p>
                </div>
                <div className="result-card">
                  <div className="result-number">PDP</div>
                  <p>Bulk-buy UX on live products</p>
                </div>
              </div>
              <p className="results-summary">
                Chief Nutrition can run metafield-driven bulk discounts on
                products like Meal Shake - shoppers pick a pack size, see the
                saving, and checkout at the correct price, while the brand edits
                tiers in Shopify admin.
              </p>
            </div>

            <div className="next-project">
              <h2>Next Project</h2>
              <Link href="/cygnett" className="next-project-link">
                <span>Cygnett</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

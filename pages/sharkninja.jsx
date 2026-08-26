import Head from "next/head";
import Link from "next/link";
import sharkninja1 from "../assets/sharkninja1.jpg";
import sharkninja2 from "../assets/sharkninja2.png";
import ImageCarousel from "@/components/ImageCarousel";

export default function SharkNinja() {
  const carouselImages = [
    {
      src: sharkninja1,
      alt: "SharkNinja product visual from the unified AU storefront",
    },
    {
      src: sharkninja2,
      alt: "SharkNinja collection page with product compare functionality",
    },
  ];

  return (
    <>
      <Head>
        <title>SharkNinja Case Study | Osman Cakir</title>
        <meta
          name="description"
          content="Case study of SharkNinja AU - unified Shopify storefront from separate Shark Clean and Ninja Kitchen sites, with PDPs, cart, compare, and data migration"
        />
      </Head>
      <main>
        <section className="case-study-hero">
          <div className="container">
            <Link href="/" className="back-button">
              ← Back to Home
            </Link>
            <div className="case-study-header">
              <h1 className="case-title">SharkNinja</h1>
              <h2 className="case-subtitle">
                Unified Shopify Storefront Launch
              </h2>
              <div className="links-container">
                <a
                  href="https://sharkninja.com.au"
                  className="figma-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit SharkNinja Australia website"
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
                    <p>SharkNinja (via Process Creative)</p>
                  </div>
                  <div className="info-group">
                    <h3>Engagement</h3>
                    <p>New store build &amp; migration</p>
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
                      <span className="tech-tag">PDP / Cart</span>
                      <span className="tech-tag">Data Migration</span>
                    </div>
                  </div>
                </div>
                <div className="case-summary">
                  <h3>Project Overview</h3>
                  <p>
                    SharkNinja previously ran separate Shark Clean and Ninja
                    Kitchen storefronts. At Process Creative I helped deliver
                    the new unified Shopify store at sharkninja.com.au -
                    building core shopping experiences, migrating orders and
                    customers, and supporting major UAT before go-live.
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
                    Built PDPs for the unified brand storefront so Shark and
                    Ninja products share a consistent, conversion-ready product
                    experience across categories.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Cart Experience</h3>
                  <p>
                    Implemented cart functionality for the new store, supporting
                    the combined catalogue and checkout path for the single
                    SharkNinja brand site.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Compare Functionality</h3>
                  <p>
                    Built the product compare flow on collection pages -
                    checkboxes on product cards, a floating compare tray, and
                    the ability to select and compare multiple products
                    side-by-side.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Order &amp; Customer Migration</h3>
                  <p>
                    Supported migration of orders and customers from the
                    previous separate Shark Clean and Ninja Kitchen stores into
                    the new unified Shopify storefront.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Major UAT Testing</h3>
                  <p>
                    Contributed to major UAT ahead of launch - exercising core
                    shopping flows, migrations, and storefront behaviour so
                    issues were caught before customers hit the live site.
                  </p>
                </div>
                <div className="approach-card">
                  <h3>Client Communication</h3>
                  <p>
                    Worked in client meetings on technical decisions throughout
                    the build, keeping delivery aligned with brand and launch
                    requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Technical Deep Dive</h2>
              <div className="tech-details">
                <div className="tech-detail-group">
                  <h3>One brand, one store</h3>
                  <p>
                    The commercial goal was a single SharkNinja AU destination.
                    That meant collapsing two legacy catalogues and customer
                    bases into one Shopify store while preserving shopping
                    behaviour customers already expected - PDPs, cart, and
                    comparison across a large appliance range.
                  </p>
                </div>
                <div className="tech-detail-group">
                  <h3>Compare as a discovery tool</h3>
                  <p>
                    Compare sits on collection grids so shoppers can tick
                    products, stage them in a tray, and run a side-by-side
                    comparison. It reduces bounce between PDPs when evaluating
                    similar blenders, vacuums, and kitchen appliances.
                  </p>
                </div>
                <div className="tech-detail-group">
                  <h3>Migration + UAT discipline</h3>
                  <p>
                    Order and customer migration had to land cleanly alongside
                    storefront work. UAT covered the critical path: product
                    discovery, PDP → cart, compare, and post-migration account
                    continuity before cutover.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Results &amp; Impact</h2>
              <div className="results-grid">
                <div className="result-card">
                  <div className="result-number">1</div>
                  <p>Unified brand storefront live</p>
                </div>
                <div className="result-card">
                  <div className="result-number">2→1</div>
                  <p>Shark Clean &amp; Ninja Kitchen consolidated</p>
                </div>
                <div className="result-card">
                  <div className="result-number">UAT</div>
                  <p>Major testing before go-live</p>
                </div>
              </div>
              <p className="results-summary">
                SharkNinja Australia now runs as one Shopify storefront -
                bringing Shark and Ninja under a single brand experience with
                production PDPs, cart, compare, and migrated customer and order
                data.
              </p>
            </div>

            <div className="next-project">
              <h2>Next Project</h2>
              <Link href="/beautychef" className="next-project-link">
                <span>The Beauty Chef</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav-luxury">
        <div className="nav-luxury-container">
          <Link href="/" className="nav-luxury-logo">Kapunka</Link>
          <ul className="nav-luxury-links">
            <li><Link href="/products">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/professionals">Professionals</Link></li>
            <li><Link href="/origin">Origin</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-luxury">
        <div className="hero-luxury-content animate-fade-in-up">
          <h1 className="hero-luxury-title aesop-display">Kapunka</h1>
          <p className="hero-luxury-subtitle aesop-body">Luxury skincare redefined through the fusion of nature and science</p>
          <Link href="/products" className="btn-luxury">Explore Collection</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3 className="feature-title aesop-heading">Botanical Excellence</h3>
              <p className="feature-description aesop-body">Sourced from the finest botanical gardens around the world, each ingredient is selected for its purity and efficacy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3 className="feature-title aesop-heading">Scientific Innovation</h3>
              <p className="feature-description aesop-body">Advanced formulations backed by cutting-edge research, delivering visible results through molecular precision.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title aesop-heading">Sustainable Luxury</h3>
              <p className="feature-description aesop-body">Committed to environmental stewardship with recyclable packaging and ethically sourced ingredients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-luxury">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kapunka</h3>
            <p>Luxury skincare redefined through the fusion of nature and science.</p>
          </div>
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/products/skincare">Skincare</Link></li>
              <li><Link href="/products/body">Body Care</Link></li>
              <li><Link href="/products/gifts">Gift Sets</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/professionals">Professionals</Link></li>
              <li><Link href="/origin">Origin</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/stores">Store Locations</Link></li>
              <li><Link href="/shipping">Shipping</Link></li>
              <li><Link href="/returns">Returns</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Kapunka. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

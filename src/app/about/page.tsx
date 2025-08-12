import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav-luxury">
        <div className="nav-luxury-container">
          <Link href="/" className="nav-luxury-logo">Kapunka</Link>
          <ul className="nav-luxury-links">
            <li><Link href="/products">Shop</Link></li>
            <li><Link href="/about" className="text-luxury-gold">About</Link></li>
            <li><Link href="/professionals">Professionals</Link></li>
            <li><Link href="/origin">Origin</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-luxury">
        <div className="hero-luxury-content animate-fade-in-up">
          <h1 className="hero-luxury-title aesop-display">Clean & Transparent</h1>
          <p className="hero-luxury-subtitle aesop-body">Our commitment to purity, honesty, and sustainable luxury in every formulation</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Our Philosophy</h2>
            <p className="text-body-large aesop-body">At Kapunka, we believe that luxury skincare should be both effective and ethical. Every product we create reflects our commitment to transparency, sustainability, and scientific excellence.</p>
          </div>

          <div className="feature-grid">
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Ingredient Transparency</h3>
              <p className="text-body-medium aesop-body">We disclose every ingredient and its source, ensuring you know exactly what you're putting on your skin. No hidden chemicals, no proprietary blends—just pure, honest ingredients.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Sustainable Sourcing</h3>
              <p className="text-body-medium aesop-body">Our botanical ingredients are ethically sourced from certified organic farms around the world. We support fair trade practices and environmental stewardship.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Scientific Integrity</h3>
              <p className="text-body-medium aesop-body">Every formulation is backed by rigorous scientific research and testing. We publish our clinical studies and welcome independent verification of our claims.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-luxury-off-white">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Our Values</h2>
          </div>

          <div className="feature-grid">
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Purity</h3>
              <p className="text-body-medium aesop-body">We use only the finest natural ingredients, free from harmful chemicals, synthetic fragrances, and unnecessary additives.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Efficacy</h3>
              <p className="text-body-medium aesop-body">Our products deliver visible results through advanced formulations that combine traditional wisdom with modern science.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Responsibility</h3>
              <p className="text-body-medium aesop-body">We take responsibility for our environmental impact, from sustainable sourcing to recyclable packaging and carbon-neutral shipping.</p>
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
              <li><Link href="/about" className="text-luxury-gold">About Us</Link></li>
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

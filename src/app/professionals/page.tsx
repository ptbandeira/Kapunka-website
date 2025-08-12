import Link from "next/link";

export default function ProfessionalsPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav-luxury">
        <div className="nav-luxury-container">
          <Link href="/" className="nav-luxury-logo">Kapunka</Link>
          <ul className="nav-luxury-links">
            <li><Link href="/products">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/professionals" className="text-luxury-gold">Professionals</Link></li>
            <li><Link href="/origin">Origin</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-luxury">
        <div className="hero-luxury-content animate-fade-in-up">
          <h1 className="hero-luxury-title aesop-display">Professionals</h1>
          <p className="hero-luxury-subtitle aesop-body">Partnering with skincare professionals and spas worldwide to deliver exceptional luxury experiences</p>
        </div>
      </section>

      {/* Professional Program Section */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Professional Partnership Program</h2>
            <p className="text-body-large aesop-body">Join the exclusive network of skincare professionals who trust Kapunka for their clients' luxury skincare needs</p>
          </div>

          <div className="feature-grid">
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Spa Partnerships</h3>
              <p className="text-body-medium aesop-body">Elevate your spa's treatment offerings with our professional-grade formulations. Receive exclusive training, marketing support, and preferred pricing.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Dermatologist Network</h3>
              <p className="text-body-medium aesop-body">Partner with us to provide your patients with clinically-proven luxury skincare solutions. Access our research and professional development resources.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Retail Partners</h3>
              <p className="text-body-medium aesop-body">Bring Kapunka's luxury experience to your retail space. Benefit from our brand recognition, visual merchandising, and dedicated account management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-luxury-off-white">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Partnership Benefits</h2>
          </div>

          <div className="feature-grid">
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Exclusive Pricing</h3>
              <p className="text-body-medium aesop-body">Enjoy preferential wholesale pricing and volume discounts. Our tiered pricing structure rewards your commitment to excellence.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Professional Training</h3>
              <p className="text-body-medium aesop-body">Access our comprehensive training programs, including product knowledge, treatment protocols, and client consultation techniques.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Marketing Support</h3>
              <p className="text-body-medium aesop-body">Receive co-branded marketing materials, social media content, and promotional support to help grow your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="text-center">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Join Our Network</h2>
            <p className="text-body-large aesop-body margin-bottom-large">Ready to elevate your practice with Kapunka's luxury skincare solutions?</p>
            <Link href="/contact" className="btn-luxury">Apply Now</Link>
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
              <li><Link href="/professionals" className="text-luxury-gold">Professionals</Link></li>
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

import Link from "next/link";

export default function OriginPage() {
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
            <li><Link href="/origin" className="text-luxury-gold">Origin</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-luxury">
        <div className="hero-luxury-content animate-fade-in-up">
          <h1 className="hero-luxury-title aesop-display">Our Origin</h1>
          <p className="hero-luxury-subtitle aesop-body">The story of Kapunka begins with a vision to create the world's most luxurious and effective skincare</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Our Story</h2>
            <p className="text-body-large aesop-body">Founded in 2018, Kapunka emerged from a passion for combining ancient botanical wisdom with modern scientific innovation</p>
          </div>

          <div className="feature-grid">
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">The Beginning</h3>
              <p className="text-body-medium aesop-body">Our journey began in a small laboratory in Switzerland, where our founder, Dr. Elena Vasquez, sought to create skincare products that would bridge the gap between luxury and efficacy.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">The Vision</h3>
              <p className="text-body-medium aesop-body">To create skincare that not only delivers visible results but also provides a luxurious experience that transforms daily routines into moments of self-care and indulgence.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">The Evolution</h3>
              <p className="text-body-medium aesop-body">From our humble beginnings, we've grown into a global luxury brand, remaining committed to our founding principles of purity, efficacy, and sustainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-luxury-off-white">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Our Heritage</h2>
          </div>

          <div className="feature-grid">
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Swiss Precision</h3>
              <p className="text-body-medium aesop-body">Our formulations are developed in Switzerland, adhering to the highest standards of quality and precision that Swiss skincare is renowned for worldwide.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Botanical Excellence</h3>
              <p className="text-body-medium aesop-body">We source the finest botanical ingredients from around the world, working directly with farmers and growers to ensure the highest quality and sustainability.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Scientific Innovation</h3>
              <p className="text-body-medium aesop-body">Our research team combines traditional knowledge with cutting-edge science to create formulations that deliver visible, lasting results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Our Journey</h2>
          </div>

          <div className="feature-grid">
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">2018</h3>
              <p className="text-body-medium aesop-body">Kapunka was founded with the launch of our signature Facial Treatment Serum, quickly gaining recognition among skincare enthusiasts.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">2020</h3>
              <p className="text-body-medium aesop-body">Expanded our product line and opened our first flagship store in Zurich, establishing our presence in the luxury retail market.</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">2024</h3>
              <p className="text-body-medium aesop-body">Global expansion with presence in over 20 countries, remaining committed to our founding principles of luxury and sustainability.</p>
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
              <li><Link href="/origin" className="text-luxury-gold">Origin</Link></li>
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

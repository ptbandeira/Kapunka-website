import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      name: "Facial Treatment Serum",
      price: "$120",
      description: "A potent anti-aging serum that revitalizes and nourishes mature skin."
    },
    {
      name: "Hydrating Night Cream",
      price: "$85",
      description: "Luxurious night cream that deeply hydrates and repairs while you sleep."
    },
    {
      name: "Gentle Cleansing Balm",
      price: "$65",
      description: "A rich, balm-to-oil cleanser that melts away makeup and impurities."
    },
    {
      name: "Eye Contour Cream",
      price: "$95",
      description: "Targeted treatment for delicate eye area, reducing fine lines and puffiness."
    },
    {
      name: "Exfoliating Mask",
      price: "$75",
      description: "Gentle exfoliation that reveals brighter, smoother skin texture."
    },
    {
      name: "Facial Treatment Oil",
      price: "$110",
      description: "Lightweight oil that balances and nourishes all skin types."
    }
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="nav-luxury">
        <div className="nav-luxury-container">
          <Link href="/" className="nav-luxury-logo">Kapunka</Link>
          <ul className="nav-luxury-links">
            <li><Link href="/products" className="text-luxury-gold">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/professionals">Professionals</Link></li>
            <li><Link href="/origin">Origin</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Products Header */}
      <section className="section-padding bg-luxury-off-white">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h1 className="text-display-medium aesop-display margin-bottom-small">Our Collection</h1>
            <p className="text-body-large aesop-body">Discover our curated selection of luxury skincare essentials</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="product-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">Product Image</div>
                <div className="product-info">
                  <h3 className="product-name aesop-heading">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <p className="product-description aesop-body">{product.description}</p>
                  <button className="btn-luxury">Add to Cart</button>
                </div>
              </div>
            ))}
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
              <li><Link href="/products" className="text-luxury-gold">All Products</Link></li>
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

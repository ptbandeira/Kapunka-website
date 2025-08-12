import Link from "next/link";

export default function ContactPage() {
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
            <li><Link href="/contact" className="text-luxury-gold">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-luxury">
        <div className="hero-luxury-content animate-fade-in-up">
          <h1 className="hero-luxury-title aesop-display">Contact</h1>
          <p className="hero-luxury-subtitle aesop-body">We welcome your inquiries and look forward to assisting you with your luxury skincare needs</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Get in Touch</h2>
            <p className="text-body-large aesop-body">Our dedicated team is here to provide you with personalized assistance and expert guidance</p>
          </div>

          <div className="feature-grid">
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Customer Service</h3>
              <p className="text-body-medium aesop-body margin-bottom-small">For product inquiries, orders, and general assistance</p>
              <p className="text-body-medium aesop-body margin-bottom-small">Email: care@kapunka.com</p>
              <p className="text-body-medium aesop-body margin-bottom-small">Phone: +1 (888) KAPUNKA</p>
              <p className="text-body-medium aesop-body">Monday-Friday: 9AM-6PM EST</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Professional Partnerships</h3>
              <p className="text-body-medium aesop-body margin-bottom-small">For spa, dermatology, and retail partnership inquiries</p>
              <p className="text-body-medium aesop-body margin-bottom-small">Email: partners@kapunka.com</p>
              <p className="text-body-medium aesop-body margin-bottom-small">Phone: +1 (888) 927-8652</p>
              <p className="text-body-medium aesop-body">Monday-Friday: 9AM-5PM EST</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Press & Media</h3>
              <p className="text-body-medium aesop-body margin-bottom-small">For media inquiries, press kits, and interview requests</p>
              <p className="text-body-medium aesop-body margin-bottom-small">Email: press@kapunka.com</p>
              <p className="text-body-medium aesop-body margin-bottom-small">Phone: +1 (888) 777-8652</p>
              <p className="text-body-medium aesop-body">Monday-Friday: 10AM-4PM EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-luxury-off-white">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Send Us a Message</h2>
            <p className="text-body-large aesop-body">We'd love to hear from you. Please fill out the form below and we'll respond within 24 hours.</p>
          </div>

          <div className="max-w-2xl margin-auto">
            <form className="card-luxury">
              <div className="margin-bottom-medium">
                <label className="aesop-caption text-luxury-gray margin-bottom-small">Full Name</label>
                <input 
                  type="text" 
                  className="width-full padding-medium border-luxury-light-gray border-1px"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '1px solid var(--aesop-light-gray)',
                    background: 'var(--aesop-off-white)',
                    fontFamily: 'Times New Roman, Times, serif',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="margin-bottom-medium">
                <label className="aesop-caption text-luxury-gray margin-bottom-small">Email Address</label>
                <input 
                  type="email" 
                  className="width-full padding-medium border-luxury-light-gray border-1px"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '1px solid var(--aesop-light-gray)',
                    background: 'var(--aesop-off-white)',
                    fontFamily: 'Times New Roman, Times, serif',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}
                  placeholder="Enter your email address"
                />
              </div>

              <div className="margin-bottom-medium">
                <label className="aesop-caption text-luxury-gray margin-bottom-small">Subject</label>
                <select 
                  className="width-full padding-medium border-luxury-light-gray border-1px"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '1px solid var(--aesop-light-gray)',
                    background: 'var(--aesop-off-white)',
                    fontFamily: 'Times New Roman, Times, serif',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="products">Product Information</option>
                  <option value="orders">Order Status</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="press">Press & Media</option>
                </select>
              </div>

              <div className="margin-bottom-medium">
                <label className="aesop-caption text-luxury-gray margin-bottom-small">Message</label>
                <textarea 
                  rows="6"
                  className="width-full padding-medium border-luxury-light-gray border-1px"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '1px solid var(--aesop-light-gray)',
                    background: 'var(--aesop-off-white)',
                    fontFamily: 'Times New Roman, Times, serif',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    resize: 'vertical'
                  }}
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn-luxury">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-luxury-cream">
        <div className="container-luxury">
          <div className="text-center margin-bottom-large">
            <h2 className="text-heading-large aesop-heading margin-bottom-medium">Visit Our Boutiques</h2>
            <p className="text-body-large aesop-body">Experience Kapunka luxury at our flagship locations worldwide</p>
          </div>

          <div className="feature-grid">
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Zurich Flagship</h3>
              <p className="text-body-medium aesop-body margin-bottom-small">Bahnhofstrasse 25</p>
              <p className="text-body-medium aesop-body margin-bottom-small">8001 Zurich, Switzerland</p>
              <p className="text-body-medium aesop-body margin-bottom-small">Phone: +41 44 123 4567</p>
              <p className="text-body-medium aesop-body">Monday-Saturday: 10AM-7PM</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">Paris Boutique</h3>
              <p className="text-body-medium aesop-body margin-bottom-small">8 Rue Saint-Honoré</p>
              <p className="text-body-medium aesop-body margin-bottom-small">75001 Paris, France</p>
              <p className="text-body-medium aesop-body margin-bottom-small">Phone: +33 1 23 45 67 89</p>
              <p className="text-body-medium aesop-body">Monday-Saturday: 10AM-8PM</p>
            </div>
            <div className="card-luxury">
              <h3 className="text-heading-medium aesop-heading margin-bottom-small">New York Flagship</h3>
              <p className="text-body-medium aesop-body margin-bottom-small">815 Madison Avenue</p>
              <p className="text-body-medium aesop-body margin-bottom-small">New York, NY 10065</p>
              <p className="text-body-medium aesop-body margin-bottom-small">Phone: +1 (212) 555-0123</p>
              <p className="text-body-medium aesop-body">Monday-Saturday: 10AM-7PM</p>
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
              <li><Link href="/contact" className="text-luxury-gold">Contact Us</Link></li>
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

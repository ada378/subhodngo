import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/Logo (1).png';

function Footer() {
  return (
    <footer className="main-footer dark-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="about-footer">
              <div className="footer-logo">
                <Link to="/">
                  <img src={LogoImg} alt="Logo" style={{ width: '180px' }} />
                </Link>
              </div>
              <div className="about-footer-content">
                <p>We've gathered answers to the questions we hear most, making it easy for you to learn about our work, values, and the impact.</p>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="footer-links-box">
              <div className="footer-links">
                <h2>Quick Links</h2>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Our Services</Link></li>
                  <li><Link to="/blog">Blogs</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>

              <div className="footer-links">
                <h2>Our Programs</h2>
                <ul>
                  <li><Link to="/programs">Health & Wellness Outreach</Link></li>
                  <li><Link to="/programs">Human Rights Advocacy</Link></li>
                  <li><Link to="/programs">Disaster Relief & Recovery</Link></li>
                  <li><Link to="/programs">Clean Water & Sanitation</Link></li>
                  <li><Link to="/programs">Environmental Awareness</Link></li>
                </ul>
              </div>

              <div className="footer-links footer-location-info">
                <h2>Our Location</h2>
                <ul>
                  <li><img src="/images/icon-location-accent.svg" alt="" />Nadakhya NGO, Delhi, India</li>
                </ul>

                <div className="footer-social-links">
                  <h3>Follow Us On Socials:</h3>
                  <ul>
                    <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="footer-body">
              <div className="footer-newsletter-form">
                <form id="newslettersForm" action="#" method="post">
                  <div className="form-group">
                    <input type="email" name="mail" className="form-control" id="email" placeholder="Enter Email Address *" required />
                    <button type="submit" className="btn-default btn-highlighted">Subscribe</button>
                  </div>
                </form>
              </div>

              <div className="footer-contact-items-list">
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-mail-primary.svg" alt="" />
                  </div>
                  <div className="footer-contact-item-content">
                    <h3>Email Address</h3>
                    <p><a href="mailto:info@domainname.com">info@domainname.com</a></p>
                  </div>
                </div>

                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-phone-primary.svg" alt="" />
                  </div>
                  <div className="footer-contact-item-content">
                    <h3>Phone Number</h3>
                    <p><a href="tel:123456789">+(123) 456-789</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="footer-copyright-text">
              <p>Copyright © 2026 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
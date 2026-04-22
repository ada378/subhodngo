import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Reusable/PageHeader';
import ScrollingTicker from '../components/Reusable/ScrollingTicker';

function Contact() {
  return (
    <Layout>
      <PageHeader title="Contact us" breadcrumb={['Contact Us']} />
      <ScrollingTicker items={['Healthcare for All', 'Education for All', 'Women Empowerment', 'Blood Donation', 'Get In Touch']} />

      <div className="page-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-info-list">
                <div className="contact-info-item wow fadeInUp">
                  <div className="icon-box">
                    <img src="/images/icon-phone-primary.svg" alt="" />
                  </div>
                  <div className="contact-info-content">
                    <h2>Phone Number</h2>
                    <p>We work closely with communities to identify real needs.</p>
                    <ul>
                      <li>Call Us: <a href="tel:123456789">+(123) 456-789</a></li>
                    </ul>
                  </div>
                </div>

                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon-box">
                    <img src="/images/icon-mail-primary.svg" alt="" />
                  </div>
                  <div className="contact-info-content">
                    <h2>Email Address</h2>
                    <p>We work closely with communities to identify real needs.</p>
                    <ul>
                      <li>Email: <a href="mailto:info@domainname.com">info@domainname.com</a></li>
                    </ul>
                  </div>
                </div>

                <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon-box">
                    <img src="/images/icon-clock-primary.svg" alt="" />
                  </div>
                  <div className="contact-info-content">
                    <h2>Working Hours</h2>
                    <p>We work closely with communities to identify real needs.</p>
                    <ul>
                      <li>Mon - Fri: 09 AM - 06 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="contact-image-form-box">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="contact-form-header">
                      <h2 className="text-anime-style-3" data-cursor="-opaque">Get In Touch With Us</h2>
                      <p>Have questions or want to get involved? We'd love to hear from you.</p>
                    </div>
                    <form className="contact-form">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Your Name *" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Your Email *" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="tel" name="phone" className="form-control" placeholder="Phone Number" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="btn-default btn-highlighted">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-6">
                    <div className="google-map">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0123456789!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ0LjEiTiA3N8KwMTInNTMuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        title="Google Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
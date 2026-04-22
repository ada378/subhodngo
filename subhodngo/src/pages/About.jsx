import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Reusable/PageHeader';
import SectionTitle from '../components/Reusable/SectionTitle';
import ScrollingTicker from '../components/Reusable/ScrollingTicker';
import aboutImg1 from '../assets/images/pexels-noblursbyshivam-13232558.jpg';
import aboutImg2 from '../assets/images/pexels-swastikarora-12818157.jpg';
import aboutBodyImg from '../assets/images/pexels-parijb-3070333.jpg';

function About() {
  return (
    <Layout>
      <PageHeader title="About us" breadcrumb={['About Us']} />
      <ScrollingTicker />

      {/* About Us Section */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-us-image-box wow fadeInUp">
                <div className="about-us-image-box-1">
                  <div className="about-us-image">
                    <figure className="image-anime">
                      <img src={aboutImg1} alt="" />
                    </figure>
                  </div>
                  <div className="about-us-counter-box">
                    <h2><span className="counter">10</span>+</h2>
                    <p>Years Of Service in India</p>
                  </div>
                </div>
                <div className="about-us-image-box-2">
                  <div className="about-us-image">
                    <figure className="image-anime">
                      <img src={aboutImg2} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="about-us-content">
                <SectionTitle
                  subTitle="About Our NGO"
                  title="Building Hope and Humanity Across India"
                  description="We believe in the power of collective compassion. Through dedicated efforts and inclusive programs, we support vulnerable communities across rural and urban India."
                />

                <div className="about-us-body wow fadeInUp" data-wow-delay="0.4s">
                  <div className="about-body-item">
                    <div className="icon-box">
                      <img src="/images/icon-about-us-item-1.svg" alt="" />
                    </div>
                    <div className="about-body-item-content">
                      <h3>Empowering Communities</h3>
                      <ul>
                        <li>We work closely with community to identify real needs.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="about-body-image">
                    <figure className="image-anime">
                      <img src={aboutBodyImg} alt="" />
                    </figure>
                  </div>
                </div>

                <div className="about-us-footer wow fadeInUp" data-wow-delay="0.6s">
                  <div className="about-us-btn">
                    <Link to="/contact" className="btn-default">Get Involved</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="our-benefits dark-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <SectionTitle
                center
                subTitle="Our Core Values"
                title="What Drives Us Forward"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="our-benefit-box wow fadeInUp">
                <div className="our-benefit-counter-content">
                  <h2><span className="counter">25</span><sup>+</sup></h2>
                </div>
                <div className="our-benefit-item">
                  <div className="icon-box">
                    <img src="/images/icon-our-benefit-item-1.svg" alt="" />
                  </div>
                  <div className="our-benefit-item-content">
                    <h3>Years of Experience</h3>
                    <p>Decades of dedicated service to communities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="our-benefit-box wow fadeInUp" data-wow-delay="0.2s">
                <div className="our-benefit-counter-content">
                  <h2><span className="counter">12,000</span><sup>+</sup></h2>
                </div>
                <div className="our-benefit-item">
                  <div className="icon-box">
                    <img src="/images/icon-our-benefit-item-1.svg" alt="" />
                  </div>
                  <div className="our-benefit-item-content">
                    <h3>Lives Impacted</h3>
                    <p>Through our various programs and initiatives</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="our-benefit-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="our-benefit-counter-content">
                  <h2><span className="counter">180</span><sup>+</sup></h2>
                </div>
                <div className="our-benefit-item">
                  <div className="icon-box">
                    <img src="/images/icon-our-benefit-item-1.svg" alt="" />
                  </div>
                  <div className="our-benefit-item-content">
                    <h3>Active Volunteers</h3>
                    <p>Passionate individuals making a difference</p>
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

export default About;
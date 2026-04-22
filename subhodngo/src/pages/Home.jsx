import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ScrollingTicker from '../components/Reusable/ScrollingTicker';
import ServiceItem from '../components/Reusable/ServiceItem';

import heroImg1 from '../assets/images/pexels-swastikarora-12818157.jpg';
import heroImg2 from '../assets/images/pexels-harshad-pendse-2158718535-35558791.jpg';
import heroImg3 from '../assets/images/pexels-suresh-boddu-3771224-5636692.jpg';
import heroImg4 from '../assets/images/pexels-rebecca-zaal-252062-764681.jpg';
import aboutImg1 from '../assets/images/pexels-noblursbyshivam-13232558.jpg';
import aboutImg2 from '../assets/images/pexels-ritesh-arya-1423700-3079978.jpg';
import aboutBodyImg from '../assets/images/pexels-parijb-3070333.jpg';
import serviceImg1 from '../assets/images/pexels-ian-taylor-2156586581-36384099.jpg';
import serviceImg2 from '../assets/images/pexels-ian-taylor-2156586581-36746074.jpg';
import serviceImg3 from '../assets/images/pexels-swastikarora-12818157.jpg';
import serviceImg4 from '../assets/images/pexels-harshad-pendse-2158718535-35558791.jpg';
import serviceImg5 from '../assets/images/pexels-suresh-boddu-3771224-5636692.jpg';
import serviceImg6 from '../assets/images/pexels-rebecca-zaal-252062-764681.jpg';
import benefitImg1 from '../assets/images/pexels-harshad-pendse-2158718535-35558791.jpg';
import benefitImg2 from '../assets/images/pexels-suresh-boddu-3771224-5636692.jpg';
import programImg1 from '../assets/images/pexels-parijb-3070333.jpg';
import programImg2 from '../assets/images/pexels-ian-taylor-2156586581-36384099.jpg';
import programImg3 from '../assets/images/pexels-ian-taylor-2156586581-36746074.jpg';
import causesImg from '../assets/images/pexels-swastikarora-12818157.jpg';

const services = [
  {
    image: serviceImg1,
    icon: '/images/icon-our-service-1.svg',
    title: 'Nadakhya Sehat Card',
    description: 'Providing health cards for accessible healthcare services to all',
    link: '/services',
  },
  {
    image: serviceImg2,
    icon: '/images/icon-our-service-2.svg',
    title: 'Free Health Camp',
    description: 'Organizing free health check-up camps for underprivileged communities',
    link: '/services',
  },
  {
    image: serviceImg3,
    icon: '/images/icon-our-service-3.svg',
    title: 'Home Nursing Care',
    description: 'Professional nursing care services at home for patients in need',
    link: '/services',
  },
  {
    image: serviceImg4,
    icon: '/images/icon-our-service-1.svg',
    title: 'Ambulance Services',
    description: '24/7 ambulance services for emergency medical transport',
    link: '/services',
  },
  {
    image: serviceImg5,
    icon: '/images/icon-our-service-2.svg',
    title: 'Doctor E-Consultation',
    description: 'Online doctor consultation from the comfort of your home',
    link: '/services',
  },
  {
    image: serviceImg6,
    icon: '/images/icon-our-service-3.svg',
    title: 'Emergency Health Loan',
    description: 'Quick emergency health loans for medical treatments',
    link: '/services',
  },
];

const programs = [
  {
    image: programImg1,
    category: 'Community Health',
    title: 'Health & Wellness Outreach',
    link: '/programs',
  },
  {
    image: programImg2,
    category: 'Legal Awareness',
    title: 'Human Rights Advocacy',
    link: '/programs',
  },
  {
    image: programImg3,
    category: 'Crisis Support',
    title: 'Disaster Relief & Recovery',
    link: '/programs',
  },
];

const causes = [
  { icon: '/images/icon-our-causes-item-1.svg', title: 'Healthcare for All', description: 'Providing accessible healthcare services to all communities' },
  { icon: '/images/icon-our-causes-item-2.svg', title: 'Education for All', description: 'Ensuring quality education reaches every child and adult' },
  { icon: '/images/icon-our-causes-item-3.svg', title: 'Women Empowerment', description: ' Empowering women through leadership and skill development' },
  { icon: '/images/icon-our-causes-item-4.svg', title: 'Youth Empowerment', description: 'Engaging and empowering youth for a better future' },
  { icon: '/images/icon-our-causes-item-1.svg', title: 'Skill Development', description: 'Providing vocational training for employment opportunities' },
  { icon: '/images/icon-our-causes-item-2.svg', title: 'Disaster Management', description: 'relief and recovery support during natural disasters' },
  { icon: '/images/icon-our-causes-item-3.svg', title: 'Food for Hunger', description: 'Providing nutritious food to those in need' },
  { icon: '/images/icon-our-causes-item-4.svg', title: 'Livelihood', description: 'Creating sustainable income opportunities' },
];

function Home() {
  return (
    <Layout>
      {/* Hero Section Start */}
      <div className="hero dark-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              {/* Hero Content Start */}
              <div className="hero-content">
                {/* Hero Sub Heading Start */}
                <div className="hero-sub-heading wow fadeInUp">
                  {/* Satisfy Client Images Start */}
                  <div className="satisfy-client-images">
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img src={heroImg1} alt="" />
                      </figure>
                    </div>
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img src={heroImg2} alt="" />
                      </figure>
                    </div>
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img src={heroImg3} alt="" />
                      </figure>
                    </div>
                    <div className="satisfy-client-image">
                      <figure className="image-anime">
                        <img src={heroImg4} alt="" />
                      </figure>
                    </div>
                  </div>
                  {/* Satisfy Client Images End */}

                  {/* Satisfy Client Content Start */}
                  <div className="satisfy-client-content">
                    <p>Empowering India, Changing Lives</p>
                  </div>
                  {/* Satisfy Client Content End */}
                </div>
                {/* Hero Sub Heading End */}

                {/* Section Title Start */}
                <div className="section-title">
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    Empowering Communities, Building Brighter Future for India
                  </h1>
                </div>
                {/* Section Title End */}
              </div>
              {/* Hero Content End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/* Hero Body Start */}
              <div className="hero-body">
                {/* Hero Body Content Start */}
                <div className="hero-body-content">
                  {/* Hero Content Start */}
                  <div className="hero-content wow fadeInUp" data-wow-delay="0.2s">
                    <p>
                      We bring communities together to challenge injustice, amplify unheard voices, 
                      and drive collective action that addresses inequality, promotes healthcare, 
                      education, and builds an inclusive India.
                    </p>
                  </div>
                  {/* Hero Content End */}
              
                  {/* Hero Body Button Start */}
                  <div className="hero-body-btn wow fadeInUp" data-wow-delay="0.4s">
                    <Link to="/contact" className="btn-default btn-highlighted">
                      Become a Volunteer
                    </Link>
                  </div>
                  {/* Hero Body Button End */}
                </div> 
                {/* Hero Body Content End */}

                {/* Hero Counter Box Start */}
                <div className="hero-counter-box wow fadeInUp" data-wow-delay="0.2s">
                  <h2><span className="counter">180</span><sup>+</sup></h2>
                  <h3>Active Volunteers</h3>
                  <p>A passionate network of volunteers working across India.</p>
                </div>
                {/* Hero Counter Box End */}
              </div>     
              {/* Hero Body End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Our Scrolling Ticker Section Start */}
      <ScrollingTicker />
      {/* Our Scrolling Ticker Section End */}

      {/* About US Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              {/* About Us Image Box Start */}
              <div className="about-us-image-box wow fadeInUp">
                {/* About Us Image Box 1 Start */}
                <div className="about-us-image-box-1">
                  {/* About Us Image Start */}
                  <div className="about-us-image">
                    <figure className="image-anime">
                      <img src={aboutImg1} alt="" />
                    </figure>
                  </div>
                  {/* About Us Image End */}

                  {/* About Us Counter Box Start */}
                  <div className="about-us-counter-box">
                    <h2><span className="counter">25</span>+</h2>
                    <p>Years Of Experience</p>
                  </div>
                  {/* About Us Counter Box End */}
                </div>
                {/* About Us Image Box 1 End */}

                {/* About Us Image Box 2 Start */}
                <div className="about-us-image-box-2">
                  {/* About Us Image Start */}
                  <div className="about-us-image">
                    <figure className="image-anime">
                      <img src={aboutImg2} alt="" />
                    </figure>
                  </div>
                  {/* About Us Image End */}
                </div>
                {/* About Us Image Box 2 End */}
              </div>
              {/* About Us Image Box End */}
            </div>

            <div className="col-xl-6">
              {/* About Us Content Start */}
              <div className="about-us-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">About Our NGO</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Building Hope and Humanity Across India</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    We believe in the power of collective compassion. Through dedicated efforts and inclusive programs, we support vulnerable communities across rural and urban India.
                  </p>
                </div>
                {/* Section Title End */}

                {/* About Us Body Start */}
                <div className="about-us-body wow fadeInUp" data-wow-delay="0.4s">
                  {/* About Body Item Start */}
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
                  {/* About Body Item End */}

                  {/* About Body Image Start */}
                  <div className="about-body-image">
                    <figure className="image-anime">
                      <img src={aboutBodyImg} alt="" />
                    </figure>
                  </div>
                  {/* About Body Image Start */}
                </div>
                {/* About Us Body End */}

                {/* About Us Footer Start */}
                <div className="about-us-footer wow fadeInUp" data-wow-delay="0.6s">
                  {/* About Us Button Start */}
                  <div className="about-us-btn">
                    <Link to="/about" className="btn-default">More About Us</Link>
                  </div>
                  {/* About Us Button End */}

                  {/* Video Play Button Start */}
                  <div className="video-play-button">
                    <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video bg-effect" data-cursor-text="Play">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <p>Watch Our Video</p>
                  </div>
                  {/* Video Play Button End */}
                </div>
                {/* About Us Footer End */}
              </div>
              {/* About Us Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* About US Section End */}

      {/* Our Service Section Start */}
      <div className="our-service">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Our Services</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Our Actions for Social Change in India</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  We turn compassion into action by implementing community-led programs, advocating for social justice, and promoting education, health, and equality
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row service-item-list">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} active={index === 0} />
            ))}

            <div className="col-lg-12">
              {/* Section Footer Text Start */}
              <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
                <p>
                  <span>$350</span>Help Our Kids with Education, Food, Health Support. <Link to="/contact">Contact Now</Link>
                </p>
                <ul>
                  <li><span className="counter">4.9</span></li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>Over 2000 Reviews</li>
                </ul>
              </div>
              {/* Section Footer Text End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Service Section End */}

      {/* Why Choosse Us Section Start */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              {/* Why Choosse Us Content Start */}
              <div className="why-choose-us-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Why Choose Us</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">What Makes our Impact Strong</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    We approach every initiative with compassion, operate with full transparency, and focus on creating sustainable impact that improves lives.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Why Choosse Item List Start */}
                <div className="why-choose-item-list wow fadeInUp" data-wow-delay="0.4s">
                  {/* Why Choosse Item Start */}
                  <div className="why-choose-item">
                    <div className="icon-box">
                      <img src="/images/icon-why-choose-us-item-1.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <p>We operate with complete openness, clearly communicating</p>
                    </div>
                  </div>
                  {/* Why Choosse Item End */}

                  {/* Why Choosse Item Start */}
                  <div className="why-choose-item">
                    <div className="icon-box">
                      <img src="/images/icon-why-choose-us-item-2.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <p>Ensuring every program is guided by empathy, dignity, & community</p>
                    </div>
                  </div>
                  {/* Why Choosse Item End */}

                  {/* Why Choosse Item Start */}
                  <div className="why-choose-item">
                    <div className="icon-box">
                      <img src="/images/icon-why-choose-us-item-3.svg" alt="" />
                    </div>
                    <div className="why-choose-item-content">
                      <p>Our initiative focus on long-term solution that empower community</p>
                    </div>
                  </div>
                  {/* Why Choosse Item End */}
                </div>
                {/* Why Choosse Item List End */}

                {/* Why Choosse Buton Start */}
                <div className="why-choose-btn wow fadeInUp" data-wow-delay="0.6s">
                  <Link to="/contact" className="btn-default">Learn More</Link>
                </div>
                {/* Why Choosse Buton End */}
              </div>
              {/* Why Choosse Us Content End */}
            </div>

            <div className="col-xl-6">
              {/* Why Choosse Us Image Box Start */}
              <div className="why-choose-us-image-box wow fadeInUp">
                {/* Why Choosse Image Box 1 Start */}
                <div className="why-choose-image-box-1">
                  {/* Why Choosse Image Start */}
                  <div className="why-choose-image">
                    <figure className="image-anime">
                      <img src={aboutImg1} alt="" />
                    </figure>
                  </div>
                  {/* Why Choosse Image End */}
                </div>
                {/* Why Choosse Image Box 1 End */}

                {/* Why Choosse Image Box 2 Start */}
                <div className="why-choose-image-box-2">
                  {/* Why Choosse Image Start */}
                  <div className="why-choose-image">
                    <figure className="image-anime">
                      <img src={aboutImg2} alt="" />
                    </figure>
                  </div>
                  {/* Why Choosse Image Start */}

                  {/* Why Choosse Contact Box Start */}
                  <div className="why-choose-contact-box">
                    <div className="icon-box">
                      <img src="/images/icon-headphone-primary.svg" alt="" />
                    </div>
                    <div className="why-choose-contact-content">
                      <h3>Call Us</h3>
                      <p><Link to="tel:123456789">+(123) 456 - 789</Link></p>
                    </div>
                  </div>
                  {/* Why Choosse Contact Box End */}
                </div>
                {/* Why Choosse Image Box 2 End */}
              </div>
              {/* Why Choosse Us Image Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Why Choosse Us Section End */}

      {/* Our Benefits Section Start */}
      <div className="our-benefits dark-section">
        <div className="container">
          <div className="row section-row align-items-end">
            <div className="col-xl-7">
              {/* Section Title Start */}
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Our Benefits</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Thoughtful Actions with Measurable Impact</h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-xl-5">
              {/* Section Content Btn Start */}
              <div className="section-content-btn">
                {/* Section Title Content Start */}
                <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                  <p>
                    We plan and execute every initiative with care, clarity, and accountability. By setting clear goals and tracking outcomes, we ensure our actions deliver real.
                  </p>
                </div>
                {/* Section Title Content End */}
                
                {/* Section Button Start */}
                <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link className="btn-default btn-highlighted" to="/contact">Contact Us</Link>
                </div>
                {/* Section Button End */}
              </div>
              {/* Section Content Btn End */}
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-md-6 order-1">
              {/* Our Benefit Box Start */}
              <div className="our-benefit-box wow fadeInUp">
                {/* Our Benefit Counter Content Start */}
                <div className="our-benefit-counter-content">
                  <h2><span className="counter">12,000</span><sup>+</sup></h2>
                </div>
                {/* Our Benefit Counter Content End */}

                {/* Our Benefit Item Start */}
                <div className="our-benefit-item">
                  <div className="icon-box">
                    <img src="/images/icon-our-benefit-item-1.svg" alt="" />
                  </div>
                  <div className="our-benefit-item-content">
                    <h3>Lives Impacted</h3>
                    <p>Providing education, healthcare, and support programs that have positively affected</p>
                  </div>
                </div>
                {/* Our Benefit Item End */}
              </div>
              {/* Our Benefit Box End */}
            </div>

            <div className="col-xl-4 col-md-12 order-xl-2 order-3">
              {/* Our Benefit Image Box Start */}
              <div className="benefit-image-box">
                <figure className="image-anime reveal">
                  <img src={benefitImg1} alt="" />
                </figure>
              </div>
              {/* Our Benefit Image Box End */}
            </div>

            <div className="col-xl-4 col-md-6 order-xl-3 order-2">
              {/* Our Benefit Box Start */}
              <div className="our-benefit-box wow fadeInUp" data-wow-delay="0.2s">
                {/* Our Benefit Image Start */}
                <div className="our-benefit-image">
                  <figure className="image-anime">
                    <img src={benefitImg2} alt="" />
                  </figure>
                </div>
                {/* Our Benefit Image End */}

                {/* Our Benefit Item Start */}
                <div className="our-benefit-item">
                  <div className="our-benefit-item-content">
                    <h3>Real Community Impact</h3>
                    <p>Every program we run is designed to address genuine community needs.</p>
                    <ul>
                      <li>Ensuring that every initiative delivers</li>
                      <li>We track outcomes & monitor progress</li>
                    </ul>
                  </div>
                </div>
                {/* Our Benefit Item End */}
              </div>
              {/* Our Benefit Box End */}
            </div>

            <div className="col-lg-12 order-4">
              {/* Section Footer Text Start */}
              <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.4s">
                {/* Satisfy Client Images Start */}
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <img src={aboutImg1} alt="" />
                    </figure>
                  </div>
                  <div className="satisfy-client-image add-more">
                    <img src="/images/icon-phone-primary.svg" alt="" />
                  </div>
                </div>
                {/* Satisfy Client Images End */}    
                <p>Let's make something great work together. <Link to="/contact">Get Free Quote</Link></p>
              </div>
              {/* Section Footer Text End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Benefits Section End */}

      {/* Our Programs Section Start */}
      <div className="our-program">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Section Start */}
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Our Programs</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Initiatives that Empower</h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Our programs are thoughtfully designed to address real community needs, promote self-reliance, and create sustainable opportunities in education, etc.
                </p>
              </div>
              {/* Section Title Section End */}
            </div>
          </div>

          <div className="row">
            {programs.map((program, index) => (
              <div key={index} className="col-xl-4 col-md-6">
                {/* Programs Item Start */}
                <div className="program-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="program-item-image">
                    <Link to={program.link} data-cursor-text="View">
                      <figure>
                        <img src={program.image} alt="" />
                      </figure>
                    </Link>
                  </div>
                  <div className="program-item-content">
                    <ul>
                      <li>{program.category}</li>
                    </ul>
                    <h2><Link to={program.link}>{program.title}</Link></h2>
                  </div>
                </div>
                {/* Programs Item End */}
              </div>
            ))}

            <div className="col-lg-12">
              {/* Section Footer Text Start */}
              <div className="section-footer-text wow fadeInUp" data-wow-delay="0.6s">
                <p>
                  <span>$350</span>Help Our Kids with Education, Food, Health Support. <Link to="/programs">View all Programs</Link>
                </p>
                <ul>
                  <li><span className="counter">4.9</span></li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li>Over 2000 Reviews</li>
                </ul>
              </div>
              {/* Section Footer Text End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Programs Section End */}

      {/* Our Causes Section Start */}
      <div className="our-causes">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-xl-6">
              {/* Our Causes Image Start */}
              <div className="our-causes-image">
                <figure className="image-anime">
                  <img src={causesImg} alt="" />
                </figure>
              </div>
              {/* Our Causes Image End */}
            </div>

            <div className="col-xl-6">
              {/* Our Causes Content Start */}
              <div className="our-causes-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Our Causes</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Building a Just and Sustainable Future</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    By addressing interconnected social & environmental issues, we strive to create inclusive communities and lasting positive change across India.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Causes Item List Start */}
                <div className="causes-item-list">
                  {causes.map((cause, index) => (
                    <div key={index} className={`causes-item wow fadeInUp`} data-wow-delay={`${index * 0.2}s`}>
                      <div className="icon-box">
                        <img src={cause.icon} alt="" />
                      </div>
                      <div className="causes-item-content">
                        <h3>{cause.title}</h3>
                        <p>{cause.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Causes Item List End */}
              </div>
              {/* Our Causes Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Causes Section End */}
    </Layout>
  );
}

export default Home;
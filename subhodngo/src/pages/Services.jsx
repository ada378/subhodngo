import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Reusable/PageHeader';
import ScrollingTicker from '../components/Reusable/ScrollingTicker';
import ServiceItem from '../components/Reusable/ServiceItem';
import serviceImg1 from '../assets/images/pexels-swastikarora-12818157.jpg';
import serviceImg2 from '../assets/images/pexels-harshad-pendse-2158718535-35558791.jpg';
import serviceImg3 from '../assets/images/pexels-suresh-boddu-3771224-5636692.jpg';
import serviceImg4 from '../assets/images/pexels-rebecca-zaal-252062-764681.jpg';
import serviceImg5 from '../assets/images/pexels-parijb-3070333.jpg';
import serviceImg6 from '../assets/images/pexels-ian-taylor-2156586581-36384099.jpg';

const services = [
  {
    image: serviceImg1,
    icon: '/images/icon-our-service-1.svg',
    title: 'Free Health Camp',
    description: 'Providing free health check-ups and medical care to underserved communities.',
    link: '/services',
  },
  {
    image: serviceImg2,
    icon: '/images/icon-our-service-2.svg',
    title: 'Ambulance Services',
    description: '24/7 emergency ambulance services for medical transport.',
    link: '/services',
  },
  {
    image: serviceImg3,
    icon: '/images/icon-our-service-3.svg',
    title: 'Doctor E-Consultation',
    description: 'Online doctor consultation from the comfort of your home.',
    link: '/services',
  },
  {
    image: serviceImg4,
    icon: '/images/icon-our-service-1.svg',
    title: 'Nadakhya Sehat Card',
    description: 'Health cards for accessible healthcare services to all.',
    link: '/services',
  },
  {
    image: serviceImg5,
    icon: '/images/icon-our-service-2.svg',
    title: 'Home Nursing Care',
    description: 'Professional nursing care services at home for patients in need.',
    link: '/services',
  },
  {
    image: serviceImg6,
    icon: '/images/icon-our-service-3.svg',
    title: 'Emergency Health Loan',
    description: 'Quick emergency health loans for medical treatments.',
    link: '/services',
  },
];

function Services() {
  return (
    <Layout>
      <PageHeader title="Our Services in India" breadcrumb={['Services']} />
      <ScrollingTicker />

      <div className="page-services">
        <div className="container">
          <div className="row service-item-list">
            {services.map((service, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <ServiceItem
                  image={service.image}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  delay={index * 0.2}
                  active={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Services;
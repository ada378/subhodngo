import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Reusable/PageHeader';

const testimonials = [
  { name: 'Rajesh Kumar', location: 'Delhi', text: 'The healthcare program changed my life. I am grateful for the support I received.' },
  { name: 'Priya Sharma', location: 'Mumbai', text: 'Outstanding work by Aasha NGO. They truly care about community welfare.' },
  { name: 'Amit Patel', location: 'Ahmedabad', text: 'The education program helped my children get quality education. Thank you!' },
];

function Testimonials() {
  return (
    <Layout>
      <PageHeader title="Testimonials" breadcrumb={['Testimonials']} />

      <div className="page-services">
        <div className="container">
          <div className="row service-item-list">
            {testimonials.map((testimonial, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div className="service-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="service-item-body">
                    <div className="service-item-content">
                      <h2><Link to="/testimonials">{testimonial.name}</Link></h2>
                      <p>{testimonial.location}</p>
                      <p>"{testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Testimonials;
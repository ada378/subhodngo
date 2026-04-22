import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Reusable/PageHeader';
import blogImg1 from '../assets/images/pexels-noblursbyshivam-13232558.jpg';
import blogImg2 from '../assets/images/pexels-swastikarora-12818157.jpg';
import blogImg3 from '../assets/images/pexels-parijb-3070333.jpg';

const blogs = [
  { image: blogImg1, title: 'Making a Difference Through Community Health', category: 'Healthcare', date: 'January 15, 2026' },
  { image: blogImg2, title: 'Empowering Women Through Education', category: 'Education', date: 'January 10, 2026' },
  { image: blogImg3, title: 'Youth Leadership: Building Tomorrow', category: 'Youth', date: 'January 5, 2026' },
];

function Blog() {
  return (
    <Layout>
      <PageHeader title="Our Blog" breadcrumb={['Blog']} />

      <div className="page-services">
        <div className="container">
          <div className="row service-item-list">
            {blogs.map((blog, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div className="service-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="service-item-image">
                    <figure><img src={blog.image} alt="" /></figure>
                  </div>
                  <div className="service-item-body">
                    <div className="service-item-body-content">
                      <div className="service-item-content">
                        <ul><li>{blog.category}</li></ul>
                        <h2><Link to="/blog">{blog.title}</Link></h2>
                        <p>{blog.date}</p>
                      </div>
                    </div>
                    <div className="service-item-btn">
                      <Link to="/blog" className="readmore-btn">Read More</Link>
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

export default Blog;
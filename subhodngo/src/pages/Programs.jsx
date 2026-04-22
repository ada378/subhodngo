import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Reusable/PageHeader';
import programImg1 from '../assets/images/pexels-parijb-3070333.jpg';
import programImg2 from '../assets/images/pexels-ian-taylor-2156586581-36384099.jpg';
import programImg3 from '../assets/images/pexels-ian-taylor-2156586581-36746074.jpg';

const programs = [
  { image: programImg1, category: 'Community Health', title: 'Health & Wellness Outreach' },
  { image: programImg2, category: 'Legal Awareness', title: 'Human Rights Advocacy' },
  { image: programImg3, category: 'Crisis Support', title: 'Disaster Relief & Recovery' },
  { image: programImg1, category: 'Education', title: 'Free Education Program' },
  { image: programImg2, category: 'Women Empowerment', title: 'Women Leadership' },
  { image: programImg3, category: 'Youth', title: 'Youth Development' },
];

function Programs() {
  return (
    <Layout>
      <PageHeader title="Our Programs" breadcrumb={['Programs']} />

      <div className="page-services">
        <div className="container">
          <div className="row service-item-list">
            {programs.map((program, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div className="program-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="program-item-image">
                    <Link to="/programs" data-cursor-text="View">
                      <figure><img src={program.image} alt="" /></figure>
                    </Link>
                  </div>
                  <div className="program-item-content">
                    <ul><li>{program.category}</li></ul>
                    <h2><Link to="/programs">{program.title}</Link></h2>
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

export default Programs;
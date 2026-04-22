import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import PageHeader from '../components/Reusable/PageHeader';
import teamImg1 from '../assets/images/author-1.jpg';
import teamImg2 from '../assets/images/author-2.jpg';
import teamImg3 from '../assets/images/author-3.jpg';
import teamImg4 from '../assets/images/author-4.jpg';

const teamMembers = [
  { image: teamImg1, name: 'John Doe', role: 'Executive Director' },
  { image: teamImg2, name: 'Jane Smith', role: 'Program Manager' },
  { image: teamImg3, name: 'Mike Johnson', role: 'Volunteer Coordinator' },
  { image: teamImg4, name: 'Sarah Williams', role: 'Healthcare Lead' },
];

function Team() {
  return (
    <Layout>
      <PageHeader title="Our Team" breadcrumb={['Our Team']} />

      <div className="page-services">
        <div className="container">
          <div className="row service-item-list">
            {teamMembers.map((member, index) => (
              <div className="col-xl-3 col-md-6" key={index}>
                <div className="team-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="team-item-image">
                    <figure><img src={member.image} alt="" /></figure>
                  </div>
                  <div className="team-item-content">
                    <h2><Link to="/team">{member.name}</Link></h2>
                    <p>{member.role}</p>
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

export default Team;
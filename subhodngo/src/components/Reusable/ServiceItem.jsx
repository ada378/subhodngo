import { Link } from 'react-router-dom';

function ServiceItem({ image, icon, title, description, link, delay = 0, active = false }) {
  return (
    <div className={`service-item ${active ? 'active' : ''} wow fadeInUp`} data-wow-delay={`${delay}s`}>
      <div className="service-item-image">
        <figure>
          <img src={image} alt="" />
        </figure>
      </div>
      <div className="service-item-body">
        <div className="service-item-body-content">
          <div className="icon-box">
            <img src={icon} alt="" />
          </div>
          <div className="service-item-content">
            <h2>
              <Link to={link}>{title}</Link>
            </h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="service-item-btn">
          <Link to={link} className="readmore-btn">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
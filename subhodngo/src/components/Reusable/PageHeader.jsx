import { Link } from 'react-router-dom';

function PageHeader({ title, breadcrumb = [] }) {
  return (
    <div className="page-header dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-box">
              <h1 className="text-anime-style-3" data-cursor="-opaque">{title}</h1>
              <nav className="wow fadeInUp">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">home</Link>
                  </li>
                  {breadcrumb.map((item, index) => (
                    <li 
                      className={`breadcrumb-item ${index === breadcrumb.length - 1 ? 'active' : ''}`}
                      aria-current={index === breadcrumb.length - 1 ? 'page' : undefined}
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
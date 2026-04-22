import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

function NotFound() {
  return (
    <Layout>
      <div className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-content">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for doesn't exist or has been moved.</p>
                <Link to="/" className="btn-default">Go Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
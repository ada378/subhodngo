import { Link } from 'react-router-dom';
import LogoImg from '../../assets/images/Logo (1).png';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'Programs', path: '/programs' },
  { name: 'Our Team', path: '/team' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact Us', path: '/contact' },
];

function Header() {
  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={LogoImg} alt="Logo" style={{ width: '180px' }} />
            </Link>

            <div className="collapse navbar-collapse main-menu">
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  {menuItems.map((item) => (
                    <li className="nav-item" key={item.path}>
                      <Link className="nav-link" to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="header-btn">
                <Link to="/contact" className="btn-default btn-highlighted">
                  Donate Now
                </Link>
              </div>
            </div>
            <div className="navbar-toggle"></div>
          </div>
        </nav>
        <div className="responsive-menu"></div>
      </div>
    </header>
  );
}

export default Header;
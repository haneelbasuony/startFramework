import { NavLink, Link } from 'react-router-dom';
import style from './Navbar.module.css';
function Navbar() {
  return (
    <div>
      <nav
        style={{ backgroundColor: '#2C3E50' }}
        className="navbar navbar-expand-lg  p-4 navbar-light"
      >
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            <h1 style={{ color: 'white' }}>START FRAMEWORK</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `text-white nav-link mx-2 ${isActive ? style.active : ''}`
                  }
                  to="/about"
                >
                  <i className="fas fa-address-card pe-2" />
                  <span className="fs-5 fw-bold">ABOUT</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `text-white nav-link mx-2 ${isActive ? style.active : ''}`
                  }
                  to="/portifolio"
                >
                  <i className="fas fa-briefcase pe-2" />
                  <span className="fs-5 fw-bold">PORTOFOLIO</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `text-white nav-link mx-2 ${isActive ? style.active : ''}`
                  }
                  to="/contact"
                >
                  <i className="fas fa-address-book pe-2" />
                  <span className="fs-5 fw-bold">CONTACT</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

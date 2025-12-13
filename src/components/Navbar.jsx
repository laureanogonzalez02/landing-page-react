import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-md py-3">
      <div className="container">
        <a href="#" className="navbar-brand fw-bold">
          <span className={props.headerClasses}>{props.headerTitle}</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-center gap-md-4">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#home">
                {props.homeLink}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" href="#features">
                {props.featuresLink}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" href="#faqs">
                {props.faqsLink}
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contactus"
                className="btn bg-black text-white rounded-3 px-4 py-2"
              >
                {props.contanctLink}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

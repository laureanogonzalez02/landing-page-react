import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap justify-content-center py-3 m-2">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className={props.headerClasses}>{props.headerTitle}</span>
        </a>
        <ul className="nav nav-pills align-items-center justify-content-center gap-4 font-inter">
          <li className="nav-item">
            <a href="#" className="nav-link text-dark" aria-current="page">
              {props.homeLink}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">
              {props.featuresLink}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark">
              {props.faqsLink}
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn bg-black text-white rounded-3 px-4 py-2">
              {props.contanctLink}
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;

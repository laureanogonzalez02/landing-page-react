import "./PartnersBar.css";

function PartnersBar(props) {
  return (
    <section className="partners-bar py-4">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 mx-2 justify-content-between align-items-center g-2">
          <div className="col partner-box d-flex justify-content-center align-items-center">
            <img
              src={props.logo1}
              alt="Partner Logo 1"
              className="partner-logo img-fluid"
            />
          </div>
          <div className="col partner-box bg-black d-flex justify-content-center align-items-center">
            <img
              src={props.logo2}
              alt="Partner Logo 2"
              className="partner-logo img-fluid"
            />
          </div>
          <div className="col partner-box d-flex justify-content-center align-items-center">
            <img
              src={props.logo3}
              alt="Partner Logo 3"
              className="partner-logo img-fluid"
            />
          </div>
          <div className="col partner-box bg-black d-flex justify-content-center align-items-center">
            <img
              src={props.logo4}
              alt="Partner Logo 4"
              className="partner-logo img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersBar;

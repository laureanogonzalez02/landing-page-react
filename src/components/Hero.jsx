import "./Hero.css";

function Hero(props) {
  return (
    <section className="hero-section">
      <div className="container py-5">
        <div className="hero-panel border rounded-4 shadow-sm px-4 py-5 mx-auto">
          <div className="row row-cols-1 row-cols-md-2 align-items-center g-3">
            <div id="hero-left">
              <p className="hero-eyebrow mb-2">{props.eyebrowText}</p>
              <h1 className="hero-title mb-3">{props.titleText}</h1>
              <p className="hero-description mb-4">{props.descriptionText}</p>
              <div className="hero-buttons justify-content-around d-flex">
                <button className="btn bg-black text-white button-learnMore">
                  {props.learnMoreText}
                </button>
                <button className="btn text-black button-aboutUs">
                  {props.aboutUsText}
                </button>
              </div>
            </div>
            <div id="hero-right" className="d-flex justify-content-center">
              <div className="hero-card text-white">
                <img
                  src={props.imageSrc}
                  alt={props.imageAlt}
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

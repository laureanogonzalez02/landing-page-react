import "./Card.css";

function Card() {
  return (
    <section className="card rounded-5">
      <div className="card-body">
        <div className="card-number mt-2">01.</div>
        <h3 className="card-title mb-3">Advanced Techniques</h3>
        <p className="card-text">
          State-of-the-art methods such as hydraulic fracturing, horizontal
          drilling, and enhanced oil recovery (EOR) to maximize extraction
          efficiency while minimizing environmental impact.
        </p>
      </div>
    </section>
  );
}

export default Card;

import "./Card.css";

function Card({ number, title, text }) {
  return (
    <section className="card rounded-5 border">
      <div className="card-body">
        <div className="card-number mt-2">{number}</div>
        <h3 className="card-title mb-3">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </section>
  );
}

export default Card;

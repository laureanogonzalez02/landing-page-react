import "./CardGroup.css";
import Card from "./Card.jsx";

function CardGroup({ items }) {
  return (
    <section className="card-group d-flex justify-content-center gap-4">
      <div className="container-fluid d-flex justify-content-center gap-2 flex-wrap my-4">
        <Card
          number={items[0].number}
          title={items[0].title}
          text={items[0].text}
        />
        <Card
          number={items[1].number}
          title={items[1].title}
          text={items[1].text}
        />
        <Card
          number={items[2].number}
          title={items[2].title}
          text={items[2].text}
        />
        <Card
          number={items[3].number}
          title={items[3].title}
          text={items[3].text}
        />
      </div>
    </section>
  );
}

export default CardGroup;

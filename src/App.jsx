import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import PartnersBar from "./components/PartnersBar.jsx";
import CardGroup from "./components/CardGroup.jsx";
import PageFooter from "./components/PageFooter.jsx";

function App() {
  const cards = [
    {
      number: "01.",
      title: "Advanced Techniques",
      text: "State-of-the-art methods to maximize extraction efficiency while minimizing environmental impact.",
    },
    {
      number: "02.",
      title: "Data-Driven Insights",
      text: "Leveraging real-time data analytics and predictive modeling to optimize production and reduce operational risks.",
    },
    {
      number: "03.",
      title: "Sustainable Practices",
      text: "Implementing eco-friendly technologies and sustainable practices to ensure responsible resource management.",
    },
    {
      number: "04.",
      title: "Innovation Leadership",
      text: "Continuously investing in research and development technologies to stay at the forefront of industry innovation.",
    },
  ];

  return (
    <>
      <Navbar
        headerTitle="CRUDE OIL EX"
        homeLink="Home"
        featuresLink="Features"
        faqsLink="FAQs"
        contanctLink="Contact Us"
        headerClasses="font-montserrat fs-2"
      />
      <Hero
        eyebrowText="Welcome to Crude Oil EX"
        titleText="Bringing Enhanced Oil Recovery to Yacimiento Vaca Muerta"
        descriptionText="Discover the latest advancements in crude oil extraction techniques at Yacimiento Vaca Muerta. Through cutting-edge engineering, data-driven decision-making, and continuous innovation, we are redefining how energy is produced in one of the world’s most important shale formations."
        learnMoreText="Learn More"
        aboutUsText="About us"
        imageSrc="https://cdn.britannica.com/10/205510-050-55877501/drilling-fracking-rig.jpg?utm_source=chatgpt.com"
        imageAlt="Fracking rig"
      />
      <PartnersBar
        logo1="./src/assets/logoipsum/logoipsum-344.png"
        logo2="./src/assets/logoipsum/logoipsum-412.png"
        logo3="./src/assets/logoipsum/logoipsum-404.png"
        logo4="./src/assets/logoipsum/logoipsum-415.png"
      />
      <CardGroup items={cards} />
      <PageFooter copyrightText="© 2025 Crude Oil EX. All rights reserved." />
    </>
  );
}

export default App;

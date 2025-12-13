import "./PageFooter.css";

function PageFooter({ copyrightText }) {
  return (
    <>
      <section className="pageFooter d-flex justify-content-center">
        <p className="text-white align-self-center m-0">{copyrightText}</p>
      </section>
    </>
  );
}

export default PageFooter;

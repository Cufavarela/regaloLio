import "./style.scss";

export const Home = () => {
  return (
    <div className="bg-cumple w-100 h-100">
      <div className="text-center d-flex p-5 mx-auto flex-column bg-darky">
        <h1>Feliz Cumple Lio!! 🎉</h1>
        <p className="lead">
          Nuestro regalo para vos, además de las medias, es un día con los pibes
          en{" "}
          <a
            className="fw-bold text-decoration-none"
            href="https://www.instagram.com/jetparkargentinaok/?hl=es"
          >
            JetPark Argentina
          </a>
          , no solo vas a disfrtar de nuestra compañia sino que también vas a
          vivir tu vuelo de bautismo en{" "}
          <a
            className="fw-bold text-decoration-none"
            href="https://www.instagram.com/skyflyboardarg/?hl=es"
          >
            flyboard
          </a>{" "}
          y unas carreritas en moto de agua 🎽🛶
        </p>
        <p className="lead">
          Sólo tenés que contactar a{" "}
          <a
            className="fw-bold text-decoration-none"
            href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5491154096858&e=ATPtDmVcO9rC4B9WyGqGi4NZxHz-fNLmJA_9JGceZmVgMUKe43fwzND1F8pz_jBpLDRA_QfRpxS96r6OXGZs4zFFgFleuk4p0ZL-pg&s=1"
          >
            Fabián
          </a>{" "}
          y mostrarle la GiftCard 👇, elegir una fecha, avisarnos a los pibes y
          ahí estaremos 👬
        </p>
        <p className="lead">
          <a
            href="https://drive.google.com/file/d/19gII4MNrE8xa_Z3cCUfvTQ9RG-rcAdiZ/view?usp=sharing"
            className="btn btn-lg btn-primary fw-bold border-white"
          >
            GiftCard
          </a>
        </p>
      </div>
    </div>
  );
};

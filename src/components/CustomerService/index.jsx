import { Link } from "react-router-dom";

import "./index.css";

import helpPay from "../../assets/ajudaPaga.webp";
import helpRegister from "../../assets/ajudaConta.webp";
import helpApp from "../../assets/ajudaApp.webp";
import helpDisp from "../../assets/ajudaDisp.webp";
import helpPlan from "../../assets/ajudaPlano.webp";
import helpPrivacy from "../../assets/privacidade.webp";

function CustomerService() {
  const color = {
    pink: {
      backgroundColor: "rgb(175, 40, 150)",
    },
    red: {
      backgroundColor: "rgb(140, 25, 50)",
    },
    orange: {
      backgroundColor: "rgb(176, 98, 57)",
    },
    green: {
      backgroundColor: "rgb(0, 100, 80)",
    },
    brown: {
      backgroundColor: "rgb(117, 117, 117)",
    },
    blue: {
      backgroundColor: "rgb(83, 122, 161)",
    },
  };
  return (
    <main className="service-section">
      <section className="service">
        <div>
          <p className="text-service-spotify">Atendimento do spotify</p>
          <h2 className="text-can-help">Como podemos ajudar?</h2>
        </div>

        <h3 className="text-login">
          <Link className="link" to="/login">
            Faça log in
          </Link>{" "}
          para ter ajuda mais rápido
        </h3>
        <div className="search-input">
          <svg
            className="icon-search"
            fill="#5E5E5E"
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-encore-id="icon"
          >
            <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
          </svg>
          <input type="search" placeholder="Buscar" />
        </div>

        <section className="help-options">
          <div className="cards-help-options" style={color.pink}>
            <img src={helpPay} alt="" />
            <p>Ajuda com pagamentos</p>
          </div>

          <div className="cards-help-options" style={color.red}>
            <img src={helpPlan} alt="" />
            <p>Ajuda com o plano</p>
          </div>

          <div className="cards-help-options" style={color.orange}>
            <img src={helpApp} alt="" />
            <p>Ajuda com o app</p>
          </div>

          <div className="cards-help-options" style={color.green}>
            <img src={helpDisp} alt="" />
            <p>Ajuda com dispositivos</p>
          </div>

          <div className="cards-help-options" style={color.brown}>
            <img src={helpPrivacy} alt="" />
            <p>Privacidade e Segurança</p>
          </div>

          <div className="cards-help-options" style={color.blue}>
            <img src={helpRegister} alt="" />
            <p>Ajuda com a conta</p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default CustomerService;

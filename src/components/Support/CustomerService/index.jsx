import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import "./index.css";

import paymentHelp from "../../../assets/customer-services/payment.webp";
import planHelp from "../../../assets/customer-services/plan.webp";
import appHelp from "../../../assets/customer-services/app.webp";
import deviceHelp from "../../../assets/customer-services/device.webp";
import privacyHelp from "../../../assets/customer-services/privacy.webp";
import accountHelp from "../../../assets/customer-services/account.webp";

import { useAuth } from "../../../contexts/AuthContext";

export function CustomerService() {
  const { isAuthenticated } = useAuth();

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
    <section className="max-w-2xl text-white mx-auto px-4 pt-8 pb-[5.5rem]">
      <p className="text-neutral-400 uppercase mb-4">Atendimento do spotify</p>

      <h2 className="text-5xl font-black mb-16 md:text-7xl">
        Como podemos ajudar?
      </h2>

      <h3 className="text-neutral-400 text-2xl font-bold mb-8 sm:mb-14">
        {isAuthenticated ? (
          <div className="text-white flex items-center gap-3">
            <UserCircleIcon className="w-12 aspect-square" />
            Olá, Gelipe Fomes
          </div>
        ) : (
          <p>
            <Link className="text-white underline" to="/login">
              Faça log in
            </Link>{" "}
            para ter ajuda mais rápido
          </p>
        )}
      </h3>

      <div className="relative mb-7">
        <input
          type="search"
          placeholder="Buscar"
          className="text-black w-full pl-12 pr-4 py-3 border-none rounded placeholder:text-black"
        />
        <MagnifyingGlassIcon className="text-black w-6 absolute left-3 top-3" />
      </div>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="help-card" style={color.pink}>
          <img src={paymentHelp} />
          <p>Ajuda com pagamentos</p>
        </div>

        <div className="help-card" style={color.red}>
          <img src={planHelp} />
          <p>Ajuda com o plano</p>
        </div>

        <div className="help-card" style={color.orange}>
          <img src={appHelp} />
          <p>Ajuda com o app</p>
        </div>

        <div className="help-card" style={color.green}>
          <img src={deviceHelp} />
          <p>Ajuda com dispositivos</p>
        </div>

        <div className="help-card" style={color.brown}>
          <img src={privacyHelp} />
          <p>Privacidade e Segurança</p>
        </div>

        <div className="help-card" style={color.blue}>
          <img src={accountHelp} />
          <p>Ajuda com a conta</p>
        </div>
      </section>
    </section>
  );
}

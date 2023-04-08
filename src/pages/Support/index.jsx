import "./index.css";

import { Header } from "../../components/Global/Header";
import { CustomerService } from "../../components/Support/CustomerService";
import { FAQ } from "../../components/Support/FAQ";
import { Community } from "../../components/Support/Community";
import { Footer } from "../../components/Global/Footer";

export function Support() {
  return (
    <>
      <div className="support-intro">
        <Header transparent />
        <CustomerService />
      </div>
      <FAQ />
      <Community />
      <Footer />
    </>
  );
}

import "./index.css";

import { Header } from "../../components/Global/Header";
import { CustomerService } from "../../components/Support/CustomerService";
// import QuickHelp from "../../components/Support/QuickHelp";
// import Community from "../../components/Support/Community";
import { Footer } from "../../components/Global/Footer";

export function Support() {
  return (
    <>
      <div className="support-intro">
        <Header transparent />
        <CustomerService />
      </div>
      {/* <QuickHelp />
      <Community /> */}
      <Footer />
    </>
  );
}

import { Header } from "../../components/Global/Header";
import CustomerService from "../../components/Support/CustomerService";
import QuickHelp from "../../components/Support/QuickHelp";
import Community from "../../components/Support/Community";
import { Footer } from "../../components/Global/Footer";

function Support() {
  return (
    <>
      <Header transparent />
      <CustomerService />
      <QuickHelp />
      <Community />
      <Footer />
    </>
  );
}

export default Support;

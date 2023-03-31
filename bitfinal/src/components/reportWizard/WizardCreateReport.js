import Footer from "../pages/Footer";
import Header from "../pages/Header";
import CandidateSelect from "./CandidateSelect";

const WizardCreateReport = () => {
  return (
    <>
      <Header />
            <CandidateSelect />
      <Footer style={{'position': 'relative'}} />
    </>
  );
};

export default WizardCreateReport;

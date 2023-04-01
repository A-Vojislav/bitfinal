import { useState } from "react";


import Footer from "../pages/Footer";
import Header from "../pages/Header";
import CandidateSelect from "./CandidateSelect";
import CompanySelect from "./CompanySelect";

const WizardCreateReport = () => {
  
  const [candidateDone, setCandidateDone] = useState(false);
  const [companiesDone, setCompaniesDone] = useState(false);
  const [firstPageData, setFirstPageData]= useState('')

  function handleNext(data){
    setCandidateDone(true)
    setFirstPageData(data)
  }

  function handleAfterCompanies(){
    setCompaniesDone(true)
    console.log('stigao');
  }

  return (
    <>
      <Header />


      <h1>Create Report wizard</h1> <br />
    {firstPageData && firstPageData.name}

            {!candidateDone&&<CandidateSelect handleNext={handleNext} />}
            {candidateDone&& <CompanySelect  handleAfterCompanies={handleAfterCompanies} />}
      <Footer />
    </>
  );
};

export default WizardCreateReport;

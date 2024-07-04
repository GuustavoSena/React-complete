import { useState } from "react";

import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";

function App() {
  const [annualData, setAnnualData] = useState([]);
  const isValidDuration = annualData.year >= 1;

  return (
    <>
      <Header />
      <InvestmentForm setAnnualData={setAnnualData}/>
      {annualData.length != 0 && <InvestmentTable annualData={annualData}/>}
      {annualData.length == 0 && <p className="center">Please insert a valid duration</p>}
    </>
  );
}

export default App;

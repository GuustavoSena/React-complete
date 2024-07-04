import { useState } from "react";

import { calculateInvestmentResults } from "../../util/investment";
import './InvestmentForm.css'


export default function InvestmentForm({setAnnualData}){
    const [initialInvestment, setInitialInvestment] = useState('');
    const [annualInvestment, setAnnualInvestment] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');
    
    function onClickCalculate(event) {
        event.preventDefault();
    
        const results = calculateInvestmentResults({
          initialInvestment: parseFloat(initialInvestment),
          annualInvestment: parseFloat(annualInvestment),
          expectedReturn: parseFloat(expectedReturn),
          duration: parseInt(duration, 10)
        });
    
        setAnnualData(results);
      }

    return (
        <form id="user-input">
        <div className="input-group">
          <div>
            <label htmlFor="initial-investment">Initial Investment</label>
            <input
              type="number"
              id="initial-investment"
              name="initial-investment"
              onChange={(e) => setInitialInvestment(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input
              type="number"
              id="annual-investment"
              name="annual-investment"
              onChange={(e) => setAnnualInvestment(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label htmlFor="expected-return">Expected Return (%)</label>
            <input
              type="number"
              id="expected-return"
              name="expected-return"
              step="0.1"
              onChange={(e) => setExpectedReturn(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="duration">Duration (Years)</label>
            <input type="number" id="duration" name="duration" required  onChange={(e) => setDuration(e.target.value)}/>
          </div>
        </div>
        <div className="center">
          <button onClick={onClickCalculate} type="submit">
            Calculate
          </button>
        </div>
      </form>
    )
}
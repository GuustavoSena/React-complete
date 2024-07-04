import { useState } from "react";

import { formatter } from "../../util/investment";
import './InvestmentTable.css'

export default function InvestmentTable({annualData}) {

  return (
    <div id="result">
      <table className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((yearInfo) => (
            <tr key={yearInfo.year}>
              <td>{yearInfo.year}</td>
              <td>{formatter.format(yearInfo.investmentValue)}</td>
              <td>{formatter.format(yearInfo.interest)}</td>
              <td>{formatter.format(yearInfo.totalInterest)}</td>
              <td>{formatter.format(yearInfo.investedCapital)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";
import calculateFinancialScore from "./calculator"

function App() {
    const [formData, setFormData] = useState({
        income: "",
        savings: "",
        homeOwnership: "",
        loans: "",
        _401k: "",
        investments: "",
    });
    const [financialScore, setFinancialScore] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { income, savings, homeOwnership, loans, _401k, investments } = formData;
        const score = calculateFinancialScore(parseFloat(income), parseFloat(savings), parseInt(homeOwnership), parseFloat(loans), parseFloat(_401k), parseFloat(investments));
        setFinancialScore(score);
    };

    return (
        <div className="App">
            <h1>Financial Score Calculator</h1>
            <p>
                Gain instant insights into your financial health by inputting your income, savings, investments, and more, allowing you to make informed decisions and achieve your financial goals with confidence.
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    Income: $
                    <input type="number" name="income" value={formData.income} onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Savings: $
                    <input type="number" name="savings" value={formData.savings} onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Home Ownership:{" "}
                    <select name="homeOwnership" value={formData.homeOwnership} onChange={handleInputChange} required>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </label>
                <br />
                <label>
                    Loans: $
                    <input type="number" name="loans" value={formData.loans} onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    401K: $
                    <input type="number" name="_401k" value={formData._401k} onChange={handleInputChange} required />
                </label>
                <br />
                <label>
                    Investments: $
                    <input type="number" name="investments" value={formData.investments} onChange={handleInputChange} required />
                </label>
                <br />
                <button type="submit">Calculate Score</button>
            </form>
            {financialScore !== null && <p>Your financial score is: {financialScore}/100</p>}
        </div>
    );
}

export default App;


    import React, { useState } from 'react';
    import styles from './MortgageCalculator.module.css';
    
    const MortgageCalculator = () => {
      const [mortgageValue, setMortgageValue] = useState('');
      const [mortgageYears, setMortgageYears] = useState('');
      const [interestRate, setInterestRate] = useState('');
      const [mortgageType, setMortgageType] = useState('repayment');
      const [results, setResults] = useState(null);
    
      const handleCalculate = () => {
        const principal = parseFloat(mortgageValue);
        const years = parseFloat(mortgageYears);
        const rate = parseFloat(interestRate) / 100;
        const monthlyRate = rate / 12;
        const n = years * 12;
    
        let monthlyPayment = 0;
    
        if (mortgageType === 'repayment') {
          monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
        } else {
          monthlyPayment = (principal * rate) / 12;
        }
    
        const totalPayment = monthlyPayment * n;
        const totalInterest = totalPayment - principal;
    
        setResults({
          monthlyPayment: monthlyPayment.toFixed(2),
          totalPayment: totalPayment.toFixed(2),
          totalInterest: totalInterest.toFixed(2)
        });
      };
    
      const handleClear = () => {
        setMortgageValue('');
        setMortgageYears('');
        setInterestRate('');
        setMortgageType('repayment');
        setResults(null);
      };
    
      return (
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Mortgage Calculator</h1>
            <button className={styles.clearButton} onClick={handleClear}>Clear All</button>
            <div className={styles.formGroup}>
              <label>Mortgage Amount</label>
              <input type="number" value={mortgageValue} onChange={(e) => setMortgageValue(e.target.value)} />
            </div>
    
            <div className={styles.formGroup}>
              <label>Mortgage Term (Years)</label>
              <input type="number" value={mortgageYears} onChange={(e) => setMortgageYears(e.target.value)} />
            </div>
    
            <div className={styles.formGroup}>
              <label>Interest Rate (%)</label>
              <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
    
            <div className={styles.formGroup}>
              <label>Mortgage Type</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    value="repayment"
                    checked={mortgageType === 'repayment'}
                    onChange={(e) => setMortgageType(e.target.value)}
                  /> Repayment
                </label>
    
                <label>
                  <input
                    type="radio"
                    value="interestOnly"
                    checked={mortgageType === 'interestOnly'}
                    onChange={(e) => setMortgageType(e.target.value)}
                  />Interest Only
                </label>
              </div>
            </div>
            <button className={styles.calculateButton} onClick={handleCalculate}>Calculate Repayments</button>
          </div>
    
          <div className={styles.resultsContainer}>
            <h2 className={styles.resultsTitle}>Your results</h2>
            {results ? (
              <div className={styles.results}>
                <p>Your monthly repayments</p>
                <h3 className={styles.monthlyRepayment}>€{results.monthlyPayment}</h3>
                <p>Total you'll repay over the term</p>
                <h3 className={styles.totalRepayment}>€{results.totalPayment}</h3>
              </div>
            ) : (
              <p className={styles.placeholder}>Your results will be displayed here.</p>
            )}
          </div>
        </div>
      );
    };
    
    export default MortgageCalculator;
    
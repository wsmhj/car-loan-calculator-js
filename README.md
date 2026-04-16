# car-loan-calculator-js

Calculate monthly car payments, amortization schedules, and loan comparisons.

**[Live Demo → Car Payment Calculator](https://carpaymentcalculator.app)**

## Features

- Monthly payment calculation (standard amortization formula)
- - Full amortization schedule generation
  - - Reverse calculation (budget → max vehicle price)
    - - Complete loan details with sales tax, down payment, and trade-in
      - - Zero dependencies
       
        - ## Install
       
        - ```bash
          npm install car-loan-calculator-js
          ```

          ## Usage

          ```javascript
          const { calculateLoanDetails, calculateAmortizationSchedule } = require('car-loan-calculator-js');

          // Calculate a $35,000 car with $5,000 down, 6.5% APR, 60 months, 7% tax
          const loan = calculateLoanDetails(35000, 5000, 0, 6.5, 60, 7);
          console.log(loan.monthlyPayment); // 620.87
          console.log(loan.totalInterest);  // 5102.20

          // Get full amortization schedule
          const schedule = calculateAmortizationSchedule(30000, 6.5, 60);
          ```

          ## API

          - `calculateMonthlyPayment(principal, annualRate, termMonths)`
          - - `calculateTotalInterest(principal, monthlyPayment, termMonths)`
            - - `calculateAmortizationSchedule(principal, annualRate, termMonths)`
              - - `calculateMaxVehiclePrice(monthlyBudget, annualRate, termMonths, downPayment)`
                - - `calculateLoanDetails(vehiclePrice, downPayment, tradeIn, annualRate, termMonths, salesTaxRate)`
                 
                  - ## Used By
                 
                  - - [Car Payment Calculator](https://carpaymentcalculator.app) — Free online car payment calculator with credit-based rates, tax lookup, and amortization charts.
                   
                    - ## License
                   
                    - MIT

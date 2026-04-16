/**
 * Car Loan Calculator
  * Calculate monthly payments, total interest, and amortization schedules
   * Live demo: https://carpaymentcalculator.app
    */

    function calculateMonthlyPayment(principal, annualRate, termMonths) {
      if (annualRate === 0) return principal / termMonths;
        const monthlyRate = annualRate / 100 / 12;
          return principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)
              / (Math.pow(1 + monthlyRate, termMonths) - 1);
              }

              function calculateTotalInterest(principal, monthlyPayment, termMonths) {
                return monthlyPayment * termMonths - principal;
                }

                function calculateAmortizationSchedule(principal, annualRate, termMonths) {
                  const monthlyRate = annualRate / 100 / 12;
                    const monthlyPayment = calculateMonthlyPayment(principal, annualRate, termMonths);
                      const schedule = [];
                        let balance = principal;
                          for (let month = 1; month <= termMonths; month++) {
                              const interestPayment = balance * monthlyRate;
                                  const principalPayment = monthlyPayment - interestPayment;
                                      balance -= principalPayment;
                                          schedule.push({
                                                month,
                                                      payment: Math.round(monthlyPayment * 100) / 100,
                                                            principal: Math.round(principalPayment * 100) / 100,
                                                                  interest: Math.round(interestPayment * 100) / 100,
                                                                        balance: Math.max(0, Math.round(balance * 100) / 100)
                                                                            });
                                                                              }
                                                                                return schedule;
                                                                                }

                                                                                function calculateMaxVehiclePrice(monthlyBudget, annualRate, termMonths, downPayment = 0) {
                                                                                  if (annualRate === 0) return monthlyBudget * termMonths + downPayment;
                                                                                    const monthlyRate = annualRate / 100 / 12;
                                                                                      const maxLoan = monthlyBudget * (Math.pow(1 + monthlyRate, termMonths) - 1)
                                                                                          / (monthlyRate * Math.pow(1 + monthlyRate, termMonths));
                                                                                            return Math.round((maxLoan + downPayment) * 100) / 100;
                                                                                            }

                                                                                            function calculateLoanDetails(vehiclePrice, downPayment, tradeIn, annualRate, termMonths, salesTaxRate = 0) {
                                                                                              const taxableAmount = vehiclePrice - tradeIn;
                                                                                                const salesTax = taxableAmount * (salesTaxRate / 100);
                                                                                                  const loanAmount = vehiclePrice - downPayment - tradeIn + salesTax;
                                                                                                    const monthlyPayment = calculateMonthlyPayment(loanAmount, annualRate, termMonths);
                                                                                                      const totalInterest = calculateTotalInterest(loanAmount, monthlyPayment, termMonths);
                                                                                                        const totalCost = monthlyPayment * termMonths + downPayment + tradeIn;
                                                                                                          return {
                                                                                                              vehiclePrice,
                                                                                                                  downPayment,
                                                                                                                      tradeIn,
                                                                                                                          salesTax: Math.round(salesTax * 100) / 100,
                                                                                                                              loanAmount: Math.round(loanAmount * 100) / 100,
                                                                                                                                  monthlyPayment: Math.round(monthlyPayment * 100) / 100,
                                                                                                                                      totalInterest: Math.round(totalInterest * 100) / 100,
                                                                                                                                          totalCost: Math.round(totalCost * 100) / 100,
                                                                                                                                              termMonths,
                                                                                                                                                  annualRate
                                                                                                                                                    };
                                                                                                                                                    }
                                                                                                                                                    
                                                                                                                                                    module.exports = {
                                                                                                                                                      calculateMonthlyPayment,
                                                                                                                                                        calculateTotalInterest,
                                                                                                                                                          calculateAmortizationSchedule,
                                                                                                                                                            calculateMaxVehiclePrice,
                                                                                                                                                              calculateLoanDetails
                                                                                                                                                              };

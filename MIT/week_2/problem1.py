"""
Write a program to calculate the credit card balance after one year if a person only 
pays the minimum monthly payment required by the credit card company each month.

The following variables contain values as described below:

    balance - the outstanding balance on the credit card

    annualInterestRate - annual interest rate as a decimal

    monthlyPaymentRate - minimum monthly payment rate as a decimal

For each month, calculate statements on the monthly payment and remaining balance. 
At the end of 12 months, print out the remaining balance. Be sure to print out no more than 
two decimal digits of accuracy - so print 
"""

def postBalance(balance, annualInterestRate, monthlyPaymentRate):
  remaining_balance = balance
  month = 1
  monthlyInterestRate = annualInterestRate / 12.0
  while month <= 12:
    minPayment = monthlyPaymentRate * remaining_balance
    monthlyUnpaid = remaining_balance - minPayment
    remaining_balance = (monthlyUnpaid) + (monthlyInterestRate * monthlyUnpaid)
    month += 1
  print('Remaining balance:',round(remaining_balance,2))
  return round(remaining_balance,2)



postBalance(42, 0.2, 0.04)
import '../index.css'
import { useState } from 'react'

// component to show the interest calculated for owed amounts
export default function InterestCalc () {
    // Assigning the interest
    const interestRate = 0.2

    // Setting up the useState
    const [amount, setAmount] = useState('')
    const [months, setMonths] = useState('')
    
    // Handle the submit click
    const handleClick = (event) => {
        event.preventDefault()
        calculate(amount, months, interestRate)
    }
    // handle the amount input
    const handleAmount = (event) => {
        setAmount(event.target.value)
    }

    // Handle the months input
    const handleMonths = (event) => {
        setMonths(event.target.value)
    }

    function calculate (amount, months, interestRate) {
        // calculate total interest
        let totalInterest = Number(amount * ((interestRate / 12) * months));
        console.log(totalInterest)
        // calculate total amount to be paid
        let totalAmount = Number(amount) + totalInterest;

        // calculate monthly payment
        let monthlyPayment = totalAmount / months;

        // return the results with an alert
        return alert(`Total Amount to be paid: ${totalAmount}\nMonthly Repayment: ${monthlyPayment}`)
    }

    return (
        // Creating the forms
        <div className='interest-container'>
            <form className='interest-form'>
                <div className='amount-container'>
                    <label 
                    className='amount-label'>
                    Amount Owed: 
                    </label>
                    <input
                    onChange={handleAmount}
                    value={amount}
                    className='amount-input' 
                    type='text'
                    placeholder='Amount Owed' />
                </div>
                
                <div className='months-container'>
                    <label 
                    className='months-label'>
                    Months to pay back: 
                    </label>
                    <input
                    onChange={handleMonths}
                    value={months}
                    className='months-input' 
                    type='text'
                    placeholder='Months to pay back' />
                </div>
            </form>
            <div className="sign-out-container">
                <button onClick={handleClick} className="interest-button">Calculate Interest</button>
            </div>
        </div>
    )
}
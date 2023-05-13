// Importing some images and some CSS
// Importing css and useState
import "../index.css"
import {  useState } from 'react'

// Creating the landing page with the option to login, or if logged in, then display the about/landing page
export default function Landing () {
    
    // bringing in the useState hook
    const [loginState, setLoginState] = useState("")
    
    // Function to handle the click of the sign in button
    const handleClick = () => {
        setLoginState(true)
    }

    // If logged in, show the about info
    if (loginState) {
        return (
            <div className="about">
                <h1 className="about-heading">Paradise Found: Sustainable Style with a Tropical Twist</h1>
                <div className="about-container-one">
                    <p className="about-paragraph">Welcome to Coconut Clothing, where the tropics meet timeless style! Born out of a passion for eco-conscious fashion and the laid-back vibes of island living, Coconut Clothing is a refreshing breeze in the world of apparel.</p>
                    <div className="about-image-container">
                        <img className="about-image" src="/assets/about-image.jpg" alt="women witting on the beach"/>
                    </div>
                </div>
                <div className="about-container-two">
                    <div className="about-image-container">
                        <img className="about-image" src="/assets/about-image2.jpg" alt="women witting on the beach"/>
                    </div>
                    <p className="about-paragraph">Our collection, inspired by the natural beauty and vivacity of the tropics, features a unique blend of sustainable materials and exceptional craftsmanship. Every piece is thoughtfully designed to transport you to a paradise where comfort, style, and environmental responsibility coexist in perfect harmony.</p>
                </div>
                <div className="about-container-three">
                    <p className="about-paragraph">Whether you're basking in the sun or exploring city streets, Coconut Clothing will be your stylish companion, leaving a lasting impression and a smaller ecological footprint. So, get ready to embrace the Coconut Clothing way of life - a sustainable wardrobe that feels like an endless vacation.</p>
                    <div className="about-image-container">
                        <img className="about-image" src="/assets/about-image3.jpg" alt="women witting on the beach"/>
                    </div>
                </div>
            </div>
        )
        // Login if not logged in
    } else {
        return (
                <div className="header-container">
                    <h1 className="logged-out-heading">Welcome to Coconut Clothing!</h1> 
                    <h3 className="logged-out-subheading">Please Sign In</h3>
                        <div className="button-container">
                            <button onClick={handleClick} className="sign-in-button">Sign In</button>
                        </div>
                </div>
        )
    }
}
// Importing some images and some CSS
import "../index.css"

export default function Landing () {
    return (
        <div className="about">
            {/* About section giving info of the company with soem images */}
            <h1 className="about-heading">Paradise Found: Sustainable Style with a Tropical Twist</h1>
                <div class="about-container-one">
                    <p class="about-paragraph">Welcome to Coconut Clothing, where the tropics meet timeless style! Born out of a passion for eco-conscious fashion and the laid-back vibes of island living, Coconut Clothing is a refreshing breeze in the world of apparel.</p>
                    <div class="about-image-container">
                        <img class="about-image" src="/assets/about-image.jpg" alt="women witting on the beach"/>
                    </div>
                </div>
                <div class="about-container-two">
                    <div class="about-image-container">
                        <img class="about-image" src="/assets/about-image2.jpg" alt="women witting on the beach"/>
                    </div>
                    <p class="about-paragraph">Our collection, inspired by the natural beauty and vivacity of the tropics, features a unique blend of sustainable materials and exceptional craftsmanship. Every piece is thoughtfully designed to transport you to a paradise where comfort, style, and environmental responsibility coexist in perfect harmony.</p>
                </div>
                <div class="about-container-three">
                    <p class="about-paragraph">Whether you're basking in the sun or exploring city streets, Coconut Clothing will be your stylish companion, leaving a lasting impression and a smaller ecological footprint. So, get ready to embrace the Coconut Clothing way of life - a sustainable wardrobe that feels like an endless vacation.</p>
                    <div class="about-image-container">
                        <img class="about-image" src="/assets/about-image3.jpg" alt="women witting on the beach"/>
                    </div>
                </div>
        </div>
    )
}
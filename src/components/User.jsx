import '../index.css'

// Creating a user componenet that lets auser log out and an alert pops up
export default function User () {
//    handling the click
    const handleClick = () => {
        alert("User has logged out!")
    }
    
    return (
        <div className="sign-out-container">
            <button onClick={handleClick} className="sign-in-button">Sign Out</button>
        </div>
    )
}
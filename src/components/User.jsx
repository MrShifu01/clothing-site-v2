import '../index.css'

export default function User () {
   
    const handleClick = () => {
        alert("User has logged out!")
    }
    
    return (
        <div class="sign-out-container">
            <button onClick={handleClick} class="sign-in-button">Sign Out</button>
        </div>
    )
}
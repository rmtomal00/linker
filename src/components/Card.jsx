import Link_short from "../assets/link_short.png"
import '../css/components/Card.css'
const Card = ({image = Link_short, 
    text = "Team 71 URL Shortener makes long links look cleaner and easier to share! Add your own Custom Domains to personalize your brand! We are soon open the QR code also.",
    heading = 'Short URLs'
}) =>{
    return(
        <div className="maincardcontainer">
            <img src={image} alt=""/>
            <div className="text">
                <h2><b>{heading}</b></h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Card;
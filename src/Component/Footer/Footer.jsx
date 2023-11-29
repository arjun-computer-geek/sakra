import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <i>follow us on </i><Link to="https://twitter.com/" ><i className="fa fa-twitter"></i></Link>
                </div>


                <div className="row">
                    Dairy Desk Copyright © 2023 - All rights reserved
                </div>
            </div>
        </footer>
    )
}

export { Footer };
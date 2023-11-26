import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = ()=> {
    return(
        <footer>
<div class="footer">
<div class="row">
<i>follow us on </i><Link to="https://twitter.com/" ><i class="fa fa-twitter"></i></Link>
</div>


<div class="row">
Dairy Desk Copyright © 2023 - All rights reserved
</div>
</div>
</footer>
    )
}

export {Footer};
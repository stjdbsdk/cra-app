import React from "react";
import GnbLi from "./GnbLi";

const Ul = () => {
    return(
        <ul>
                <li><a href="#none">Product</a></li>
                <li><a href="#none">Industried</a></li>
                <li><a href="#none">Resources</a></li>
                <li><a href="#none">Customers</a></li>
                <li><a href="#none">Partners</a></li>
                <li><a href="#none">Developers</a></li>
                <li><a href="#none">Events</a></li>
                <li><a href="#none">Company</a></li>
            </ul>
    );
}

const Gnb = () => {
    return(
        <div className="gnb">
                    <Ul />
                </div>
    );
}

export default Gnb;
import React from "react";
import Gnb from "./Gnb";
import LastNews from "./LastNews";
import CloudApps from "./CloudApps";

const Wrap = () => {
    return(
        <div id="wrap">
                    <Gnb />
                    <LastNews />
                    <CloudApps />
                    </div>
    );
}

export default Wrap;
import React from "react";
import Gnb from "./Gnb";
import LastNews from "./LastNews";
import CloudApps from "./CloudApps";

class Wrap extends React.Component {
    render() {
        return(
            <>
                <div id="wrap">
                    <Gnb />
                    <LastNews />
                    <CloudApps />
                    </div>
            </>
        );
    }
}

export default Wrap;
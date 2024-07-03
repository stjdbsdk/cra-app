import React from "react";
import Gnb from "./Gnb";
import LastNews from "./LastNews";
import CloudApps from "./CloudApps";

const Wrap = () => {
    return(
        React.createElement(
            'div',
            {
                id: 'wrap',
            },
            [
                React.createElement(
                    Gnb,
                    null,
                    null
                ),
                React.createElement(
                    LastNews,
                    null,
                    null
                ),
                React.createElement(
                    CloudApps,
                    null,
                    null
                )
            ]
        )
    );
}

export default Wrap;
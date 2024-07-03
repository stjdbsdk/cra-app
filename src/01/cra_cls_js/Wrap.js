import React from "react";
import Gnb from "./Gnb";
import LastNews from "./LastNews";
import CloudApps from "./CloudApps";

class Wrap extends React.Component {
    render() {
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
}

export default Wrap;
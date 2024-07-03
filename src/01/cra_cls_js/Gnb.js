import React from "react";
import GnbLi from "./GnbLi";

class Ul extends React.Component {
    render() {
        return(
            React.createElement(
                'ul',
                null,
                [
                    React.createElement(
                        GnbLi,
                        {
                            href: '#none',
                            menu: 'Product',
                        },
                        null
                    ),
                    React.createElement(
                        GnbLi,
                        {
                            href: '#none',
                            menu: 'Industried',
                        },
                        null
                    ),
                    React.createElement(
                        GnbLi,
                        {
                            href: '#none',
                            menu: 'Resources',
                        },
                        null
                    ),
                    React.createElement(
                        GnbLi,
                        {
                            href: '#none',
                            menu: 'Customers',
                        },
                        null
                    ),
                    React.createElement(
                        GnbLi,
                        {
                            href: '#none',
                            menu: 'Partners',
                        },
                        null
                    ),
                    React.createElement(
                        GnbLi,
                        {
                            href: '#none',
                            menu: 'Developers',
                        },
                        null
                    ),
                    React.createElement(
                        GnbLi,
                        {
                            href: '#none',
                            menu: 'Events',
                        },
                        null
                    ),
                    React.createElement(
                        GnbLi,
                        {
                            href: '#none',
                            menu: 'Company',
                        },
                        null
                    )
                ]
            )
        );
    }
}

class Gnb extends React.Component {
    render() {
        return(
            React.createElement(
                'div',
                {
                    className: 'gnb',
                },
                React.createElement(
                    Ul,
                    null,
                    null
                )
            )
        );
    }
}

export default Gnb;
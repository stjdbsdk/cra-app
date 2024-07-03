import React from "react";

class A extends React.Component {
    render(props) {
        return(
            React.createElement(
                'a',
                {
                    href: this.props.href,
                },
                this.props.menu
            )
        );
    }
}

class GnbLi extends React.Component {
    render(props) {
        return(
            React.createElement(
                'li',
                null,
                React.createElement(
                    A,
                    {
                        href: this.props.href,
                        menu: this.props.menu,
                    },
                    null
                )
            )
        );
    }
}

export default GnbLi;
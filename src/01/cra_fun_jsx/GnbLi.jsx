import React from "react";

const A = (props) => {  //함수형이면 this를 뺴야 함
    return(
        React.createElement(
            'a',
            {
                href: props.href,
            },
            props.menu
        )
    );
}

const GnbLi = (props) => {
    return(
        React.createElement(
            'li',
            null,
            React.createElement(
                A,
                {
                    href: props.href,
                    menu: props.menu,
                },
                null
            )
        )
    );
}

export default GnbLi;
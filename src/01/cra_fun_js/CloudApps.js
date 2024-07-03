import React from "react";

const Li = ({href, txt}) => { //값이 적으면 이걸 쓰자
    return(
        React.createElement(
            'li',
            null,
            React.createElement(
                'a',
                {
                    href, //ex) <a href='#none'> 속성명: property
                },
                txt
            )
        )
    );
}

const Ul = (props) => { //값이 많을 땐 props를 쓰자
    return(
        React.createElement(
            'ul',
            null,
            [
                React.createElement(
                    Li,
                    {
                        href: props.infos[0].href,
                        txt: props.infos[0].txt,
                    },
                    null
                ),
                React.createElement(
                    Li,
                    {
                        href: props.infos[1].href,
                        txt: props.infos[1].txt,
                    },
                    null
                ),
                React.createElement(
                    Li,
                    {
                        href: props.infos[2].href,
                        txt: props.infos[2].txt,
                    },
                    null
                ),
                React.createElement(
                    Li,
                    {
                        href: props.infos[3].href,
                        txt: props.infos[3].txt,
                    },
                    null
                ),
                React.createElement(
                    Li,
                    {
                        href: props.infos[4].href,
                        txt: props.infos[4].txt,
                    },
                    null
                ),
                React.createElement(
                    Li,
                    {
                        href: props.infos[5].href,
                        txt: props.infos[5].txt,
                    },
                    null
                )
            ]
        )
    );
}

const P = (props) => {
    return(
        React.createElement(
            'p',
            null,
            props.txt
        )
    );
}

const H1 = (props) => {
    return(
        React.createElement(
            'h1',
            null,
            props.txt
        )
    );
}

const CloudApps = () => {
    return(
        React.createElement(
                'div',
                {
                    className: 'cloud_apps'
                },
                [
                    React.createElement(
                        H1,
                        {
                            txt: 'Cloud Infrastructure',
                        },
                        null
                    ),
                    React.createElement(
                        P,
                        {
                            txt: 'Operate your IT predictably, securely, and at a lower cost with cloud infrastructure services designed to run all your cloud native, web-scale, and mission-critical workloads.',
                        },
                        null
                    ),
                    React.createElement(
                        'div',
                        null,
                        [
                            React.createElement(
                                Ul,
                                {
                                    infos: [
                                        {
                                            href: '#none',
                                            txt: 'Developer Services'
                                        },
                                        {
                                            href: '#none',
                                            txt: 'Integration',
                                        },
                                        {
                                            href: '#none',
                                            txt: 'Analytics and BI',
                                        },
                                        {
                                            href: '#none',
                                            txt: 'Machine Learning',
                                        },
                                        {
                                            href: '#none',
                                            txt: 'Big Data',
                                        },
                                        {
                                            href: '#none',
                                            txt: 'Compute',
                                        }
                                        
                                    ]
                                }
                            ),

                            // 두 번째 ul
                            React.createElement(
                                Ul,
                                {
                                    infos: [
                                        {
                                            href: '#none',
                                            txt: 'Storage'
                                        },
                                        {
                                            href: '#none',
                                            txt: 'Containers and',
                                        },
                                        {
                                            href: '#none',
                                            txt: 'Networking',
                                        },
                                        {
                                            href: '#none',
                                            txt: 'Oracle Databases',
                                        },
                                        {
                                            href: '#none',
                                            txt: 'Open Source',
                                        },
                                        {
                                            href: '#none',
                                            txt: 'Native VMware',
                                        }
                                        
                                    ]
                                }
                            )
                        ]
                    )

                ]
            )
    );
}

export default CloudApps;
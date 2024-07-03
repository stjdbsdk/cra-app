import React from "react";

const Li = (props) => {
    return(
        React.createElement(
            'li',
            null,
            [
                React.createElement(
                    'div',
                    {
                        className: 'title',
                    },
                    props.infos.txt01
                ),
                React.createElement(
                    'div',
                    {
                        className: 'text',
                    },
                    props.infos.txt02
                ),
                React.createElement(
                    'div',
                    {
                        className: 'thum',
                    },
                    React.createElement(
                        'img',
                        {
                            src: props.infos.thum,
                        },
                        null
                    )
                ),
                React.createElement(
                    'div',
                    {
                        className: 'go_btn',
                    },
                    React.createElement(
                        'a',
                        {
                            href: '#none',
                        },
                        props.infos.txt03
                    )
                )
            ]
        )
    );
}

const Ul = () => {
    return(
        React.createElement(
            'ul',
            {},
            [
                React.createElement(
                    Li,
                    {
                        infos: {
                            txt01: 'What can the latest Java innovations do for your business?',
                            txt02: 'Join Oracle Java leaders Georges Saab and Donald Smith on a May 17 webinar to explore innovations in the world\'s leading application development platform.',
                            thum: '01/imgs/img01.png',
                            txt03: 'Register now',
                        }
                    },
                    null
                ),
                React.createElement(
                    Li,
                    {
                        infos: {
                            txt01: 'Oracle Autonomous Data Warehouse breaks through boundaries',
                            txt02: 'New innovations simplify data access and sharing across organizations and clouds at significantly reduced costs.',
                            thum: '01/imgs/img02.png',
                            txt03: 'Learn more',
                        }
                    },
                    null
                ),
                React.createElement(
                    Li,
                    {
                        infos: {
                            txt01: 'Try OCI Free Tier',
                            txt02: 'Oracle Cloud Free Tier lets anyone build, test, and deploy applications on Oracle Cloud—for free. Sign up once, get access to two free offers.',
                            thum: '01/imgs/img03.png',
                            txt03: 'Start your trial today',
                        }
                    },
                    null
                )
            ]
        )
    );
}

const LastNews = () => {
    return(
        React.createElement(
            'div',
            {
                className: 'last_news',
            },
            React.createElement(
                Ul,
                null,
                null
            )
        )
    );
}

export default LastNews;
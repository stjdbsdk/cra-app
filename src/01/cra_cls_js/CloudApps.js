import React from "react";

class Li extends React.Component {
    render(props) {
        return(
            React.createElement(
                'li',
                null,
                React.createElement(
                    'a',
                    {
                        href: this.props.href,
                    },
                    this.props.txt
                )
            )
        );
    }
}

class Ul extends React.Component {
    render(props) {
        return(
            React.createElement(
                'ul',
                null,
                [
                    React.createElement(
                        Li,
                        {
                            href: this.props.infos[0].href,
                            txt: this.props.infos[0].txt,
                        },
                        null
                    ),
                    React.createElement(
                        Li,
                        {
                            href: this.props.infos[1].href,
                            txt: this.props.infos[1].txt,
                        },
                        null
                    ),
                    React.createElement(
                        Li,
                        {
                            href: this.props.infos[2].href,
                            txt: this.props.infos[2].txt,
                        },
                        null
                    ),
                    React.createElement(
                        Li,
                        {
                            href: this.props.infos[3].href,
                            txt: this.props.infos[3].txt,
                        },
                        null
                    ),
                    React.createElement(
                        Li,
                        {
                            href: this.props.infos[4].href,
                            txt: this.props.infos[4].txt,
                        },
                        null
                    ),
                    React.createElement(
                        Li,
                        {
                            href: this.props.infos[5].href,
                            txt: this.props.infos[5].txt,
                        },
                        null
                    )
                ]
            )
        );
    }
}

class P extends React.Component {
    render(props) {
        return(
            React.createElement(
                'p',
                null,
                this.props.txt
            )
        );
    }
}

class H1 extends React.Component {
    render(props) {
        return(
            React.createElement(
                'h1',
                null,
                this.props.txt
            )
        );
    }
}

class CloudApps extends React.Component {
    render() {
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
}

export default CloudApps;
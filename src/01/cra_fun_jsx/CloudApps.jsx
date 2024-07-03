import React from "react";

const Li = ({href, txt}) => { //값이 적으면 이걸 쓰자
    return(
        <li>
            <a href={props.href}>{props.txt}</a>
        </li>
    );
}

const Ul = (props) => { //값이 많을 땐 props를 쓰자
    return(
        <ul>
                    <Li href={props.infors[0].href} txt={props.infors[0].txt} />
                    <Li href={props.infors[1].href} txt={props.infors[1].txt} />
                    <Li href={props.infors[2].href} txt={props.infors[2].txt} />
                    <Li href={props.infors[3].href} txt={props.infors[3].txt} />
                    <Li href={props.infors[4].href} txt={props.infors[4].txt} />
                    <Li href={props.infors[5].href} txt={props.infors[5].txt} />
                </ul>
    );
}

const P = (props) => {
    return(
        <p>
                {props.txt}
            </p>
    );
}

const H1 = (props) => {
    return(
        <h1>
                {props.txt}
            </h1>
    );
}

const CloudApps = () => {
    return(
        <div class="cloud_apps">
                <H1 txt='Cloud Infrastructure' />
                <p txt='Operate your IT predictably, securely, and at a lower cost with cloud infrastructure services designed to run all your cloud native, web-scale, and mission-critical workloads.' />
                <div>
                     <Ul infors={[
                        {
                            href: '#none', txt:'Developer Services',
                        },
                        {
                            href: '#none', txt:'Integration',
                        },
                        {
                            href: '#none', txt:'Analytics and BI',
                        },
                        {
                            href: '#none', txt:'Machine Learning and AI',
                        },
                        {
                            href: '#none', txt:'Big Data',
                        },
                        {
                            href: '#none', txt:'Compute',
                         },
                        ]} />
                        <Ul infors={[
                            {
                                href: '#none', txt:'Storage',
                            },
                            {
                                href: '#none', txt:'Containers and Functions',
                            },
                            {
                                href: '#none', txt:'Networking',
                            },
                            {
                                href: '#none', txt:'Oracle Databases',
                            },
                            {
                                href: '#none', txt:'Open Source Databases',
                            },
                            {
                                href: '#none', txt:'Native VMware',
                            },
                        ]} />
                    </div>
                </div>
    );
}

export default CloudApps;
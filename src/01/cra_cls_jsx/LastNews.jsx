import React from "react";

class Li extends React.Component {
    render() {
        return(
            <>
            <li>
                    <div class="title">
                        {this.props.infos.txt01}
                    </div>
                    <div class="text">
                    {this.props.infos.txt02}
                    </div>
                    <div class="thum">
                        <img src={`01/imgs/${this.props.infos.img01}`} img/>
                    </div>
                    <div class="go_btn">
                        <a href="#none">{this.props.infos.txt03}</a>
                    </div>
                </li>
            </>
        );
    }
}

class Ul extends React.Component {
    render() {
        return(
            <>
            <ul>
                <Li infos={
                    {
                        txt01: 'What can the latest Java innovations do for your business?',
                        txt02: 'Join Oracle Java leaders Georges Saab and Donald Smith on a May 17 webinar to explore innovations in the world\'s leading application development platform.',
                        img01: 'img01.png',
                        txt03: 'Register now',
                    }
                    } />
                <Li infos={
                    {
                        txt01: 'Oracle Autonomous Data Warehouse breaks through boundaries',
                        txt02: ' New innovations simplify data access and sharing across organizations and clouds at significantly reduced costs.',
                        img01: 'img02.png',
                        txt03: 'Learn more',
                    }
                    } />
                <Li infos={
                    {
                        txt01: 'Try OCI Free Tier',
                        txt02: 'Oracle Cloud Free Tier lets anyone build, test, and deploy applications on Oracle Cloud—for free. Sign up once, get access to two free offers.',
                        img01: 'img03.png',
                        txt03: 'Start your trial today',
                    }
                    } />
            </ul>
            </>
        );
    }
}

class LastNews extends React.Component {
    render() {
        return(
            <>
                <div className="last_news">
                <Ul />
                </div>
            </>
        );
    }
}

export default LastNews;
import React from "react";

const Li = (props) => {
    return(
        <li>
                    <div class="title">
                        {props.infos.txt01}
                    </div>
                    <div class="text">
                    {props.infos.txt02}
                    </div>
                    <div class="thum">
                        <img src={`01/imgs/${props.infos.img01}`} img/>
                    </div>
                    <div class="go_btn">
                        <a href="#none">{props.infos.txt03}</a>
                    </div>
                </li>
    );
}

const Ul = () => {
    return(
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
    );
}

const LastNews = () => {
    return(
        <div className="last_news">
        <Ul />
        </div>
    );
}

export default LastNews;
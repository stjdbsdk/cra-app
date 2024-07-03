import React from "react";
import LiInfo from "./LiInfo";

class Li extends React.Component{
    render() {
        return(
            <li>
                {this.props.txt01}
            </li>
        );
    }
}

class Ul extends React.Component{
    render() {
        return(
            <ul> 
                <Li>
                    txt01: '7'
                </Li>,
                <LiInfo />
                
            </ul>
        );
    }
}

class Wrap extends React.Component {
    render() {
        return(
            <div id="wrap">
                <Ul />
               <LiInfo /> 
            </div>
        );
    }
}

export default Wrap;
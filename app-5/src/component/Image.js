import React, { Component } from "react";

class Image extends Component{
    render(){
        return(
            <div>
                <img src={this.props.url}/>
                <p>What is your favorite game and why is it Dota2??</p>
            </div>
        )
    }
}
export default Image
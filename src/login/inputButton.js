import React,{Component} from "react";

export default class inputButton extends Component{
    render(){
        return(
            <input type={this.props.type} onClick={this.props.login} name={this.props.name} className={this.props.name+"_input"} value={this.props.value}/>
        )
    }
}

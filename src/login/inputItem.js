import React,{Component} from 'react'

export default class inputItem extends Component{
    render(){
        return(
            <input type={this.props.type} className={this.props.name+"_input"} placeholder={this.props.placeholder}/>
        )
    }
}

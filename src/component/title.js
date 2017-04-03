import React, {Component} from 'react';

class Title extends Component{
    render(){
        return(
            <h2 className="title" style={{backgroundColor:this.props.backcolor,color:this.props.color}}>
                <i><img src={this.props.src} alt=""/></i>
                <span>{this.props.name}</span>
            </h2>
        )
    }
}
export default Title

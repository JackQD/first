import React,{Component} from 'react';

export default class selectItem extends Component{
    render(){
        return(
                <select name={this.props.name} id={this.props.name+"_sel"}>
                    {
                        this.props.item.map((obj,index)=>{
                            return <option value={index} key={index}>{obj}</option>
                        })
                    }
                </select>
        )
    }
}

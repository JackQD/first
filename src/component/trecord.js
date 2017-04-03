import React,{Component} from 'react';

export default class trecord extends Component{
    constructor(props){
        super(props);
        this.state={
            index:""
        }
    }
    render(){
        return(
            <div className="pro">
                <div className="pro_fir">
                    <h3>{this.props.obj==undefined?null:this.props.obj.des}</h3>
                </div>
                <div className="pro_sec">
                    <span>{this.props.obj==undefined?null:this.props.obj.operate}</span>
                    <i>$</i>
                </div>
                <i className="pro_on" onClick={()=>this.props.remove(this.props.data==undefined?
                null:this.props.data,this.props.index==undefined?
                null:this.props.index)}>
                    
                </i>
            </div>
        )
    }
}

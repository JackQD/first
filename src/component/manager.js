import React,{Component} from 'react';
import Giveup from './img/xiuxue.png';

export default class manager extends Component{
    constructor(props){
        super(props);
        this.state={
            back:'',
            shadow:"transparent"
        }
    }
    render(){
        return(
            <div className="manager_item" onMouseOver={()=>this.changeSet(this.props.index)} style={this.props.students[this.props.index].status==2?{backgroundColor:"#bbb"}:{backgroundColor:this.state.back,boxShadow:"0 0 6px 0 "+this.state.shadow}}
                                            onMouseOut={()=>this.changeSet(this.props.index)}
                                            onClick={()=>{this.props.fn(this.props.index)}}>
                {this.props.name}
                <i className="giveUp" onClick={(e)=>e.stopPropagation()} style={this.props.students[this.props.index].status==2?{display:"block"}:{display:"none"}}><img src={Giveup} alt=""/></i>
                <div className="item_mask" onClick={(e)=>e.stopPropagation()} style={this.props.students[this.props.index].status==2?{display:"block"}:{display:"none"}}></div>
            </div>
        )
    }
    changeSet(val){
        if(this.props.students[val].status==2){
            this.setState({
                back:this.state.back
            })
        }else{
            if(this.state.back==="#EED63B"){
                this.setState({
                    back:'',
                    shadow:'transparent'
                })
            }else{
                this.setState({
                    back:"#EED63B",
                    shadow:"#EED63B"
                })
            }
        }
    }
}

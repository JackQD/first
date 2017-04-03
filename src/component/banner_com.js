import React, {Component} from 'react';
import {hashHistory} from 'react-router';
class Banner extends Component{
    constructor(props){
        super(props);
        this.click=this.click.bind(this);
    }
    render(){
        return(
            <div className="banner" style={this.props.path==="/home/index"?{backgroundColor:this.props.back}:{backgroundColor:this.props.back,marginTop:"30px"}}>
                <div className="banner_con">
                    <i className="ticket"><img src={this.props.src} alt=""/></i>
                    <h2>{this.props.path==="/home/index"? "本教学周期薪酬":"历史平均薪资"}</h2>
                    <p>
                        <span>￥</span><span>{10000}</span>
                    </p>
                </div>
                {
                    this.props.path==="/home/index"?
                        <i className="xiu" style={this.props.data.status=="2"?{display:"block"}:{display:"none"}}></i>:<i style={{display:"none"}}></i>
                }
                {
                    this.props.path==="/home/index"?
                        <span className="record" onClick={this.click}>查看详情>></span>:<span></span>
                }
            </div>
        )
    }
    click(){
        hashHistory.push("/home/record");
    }
}
export default Banner

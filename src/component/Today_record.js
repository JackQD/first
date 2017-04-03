import React,{Component} from 'react';
import Scroll from './scroll';
import Trecord from './trecord';

export default class awardRecord extends Component{
    render(){
        return(
            this.props.set===1?<section className="things">
                <div className="con_box">
                    <Scroll/>
                    <div className="content">
                        <h4>{`${new Date().getYear()+1900}年${new Date().getMonth()+1}月${new Date().getDate()}日`}</h4>
                        <div className="pro_box">
                            {
                                this.props.data.length===0?<span style={{display:"inline-block",margin:"10px 0 0 10px"}}>没有更多记录</span>:this.props.data.map((obj,index)=>{
                                    return obj.length==0?<span style={{display:"inline-block",margin:"10px 0 0 10px"}}>没有更多记录</span>:<Trecord key={index} index={index} obj={obj} data={this.props.data} remove={this.props.fn}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>:<section className="things">
                <div className="con_box">
                    <Scroll/>
                    <div className="content">
                        <h4>{this.props.obj}</h4>
                        <div className="pro_box">
                            {
                                this.props.data.length==0?<span style={{display:"inline-block",margin:"10px 0 0 10px"}}>没有更多记录</span>:this.props.data.map((obj,index)=>{
                                    return obj.length===0?<span style={{display:"inline-block",margin:"10px 0 0 10px"}}>没有跟多记录</span>:<Trecord key={index} index={index} data={this.props.data} obj={obj}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

import React,{Component} from 'react';

export default class detail extends Component{
    render(){
        return(
            <div className="private">
                <div className="private_mes">
                    <h2>{this.props.student.sname}</h2>
                    <p><span>学号：</span>15000355</p>
                    <p><span>市场部：</span>{this.props.student.market}</p>
                    <p><span>入学时间：</span>2016年5月</p>
                    <p><span>学制：</span>两年</p>
                </div>
                <div className="private_award">
                    <div className="pm_head">
                        <i></i>
                        <div>
                            <h2>本教学周期薪酬</h2>
                        </div>
                    </div>
                    <div className="salary">
                        <i>￥</i>
                        <h2>{this.props.student.score}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

import React,{Component} from 'react';

class Aside extends Component{
    render(){
        return (
            this.props.subPath=="/home"||this.props.subPath=="/home/index"||this.props.subPath=="/home/back"||this.props.subPath=="/home/record"?<section id="class_message">
                    <div className="detail">
                        <div className="tx"></div>
                        <div className="class_mes">
                            <h4>WEB1508A</h4>
                            <p>人数：19人</p>
                            <p>总额：33000</p>
                            <p>2017年2月16日</p>
                        </div>
                    </div>
                </section>:<section id="class_message">
                <div className="detail">
                    <div className="tx"></div>
                    <div className="class_mes">
                        <h4>WEB教研室</h4>
                        <p>班级总数：7</p>
                        <p>2017年2月16日</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Aside
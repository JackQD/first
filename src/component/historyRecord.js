import React,{Component} from 'react';

export default class hitoryRecord extends Component{
    render(){
        return(
            <section className="things">
                <div className="con_box">
                    <Scroll/>
                    <div className="content">
                        <h4>2017年3月21日</h4>
                        <div className="pro_box">
                            <Trecord/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

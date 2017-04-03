import React,{Component} from 'react';

export default class courseSet extends Component{
    render(){
        return(
            <div className="course_set">
                <div className="course cycle">
                    <div className="symbol">
                        <i></i>
                        <h3>学期</h3>
                    </div>
                    <div className="weeks">
                        <span>第一教学周期</span>
                    </div>
                    <div className="xia">
                        <i></i>
                    </div>
                </div>
                <div className="course course_con">
                    <div className="symbol">
                        <i></i>
                        <h3>课程</h3>
                    </div>
                    <div className="weeks">
                        <span>第三门课程《HTML/CSS》</span>
                    </div>
                </div>
            </div>
        )
    }
}

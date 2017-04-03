import React,{Component} from 'react';
import './component.css';
import Title from './title';
import StudentMan from './img/xsgli.png';
import Manager from './manager';

export default class contentSet extends Component{
    render(){
        return(
            <div id="project_box">
                <div id="project">
                    <div className="project_con">
                        <Title backcolor="#EED63B" name="学生管理" color="#333" src={StudentMan}/>
                        <div className="student_manager_box">
                            <div className="student_box">
                                {
                                    this.props.students.map((obj,index)=>{
                                        return <Manager data={this.props.students} key={index} name={obj.sname} index={index}
                                                            students={this.props.students}
                                                            fn={this.props.backTog}/>
                                    },this)
                                }
                                <div className="item_list" onClick={()=>this.props.backTog(this)}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

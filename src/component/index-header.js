import React,{Component} from "react";
import SetIcon from './img/set_icon.png';
import BackIcon from './img/back_03.png';
import {Link, hashHistory, browserHistory} from 'react-router';


class NavBar extends Component{
    constructor(props) {
        super(props);
        this.whitchCourse = this.whitchCourse.bind(this);
        this.click=this.click.bind(this);
    }
    whitchCourse() {
        let aa;
        this.props.courseList.map((obj, index)=> {
            if (obj.cname == this.props.data.course) {
                aa =<span>第{index+1}教学周期</span>
            }
        }, this);
        return aa
    }
    render(){
        let time = new Date().getYear() + 1900;
        return (
        this.props.path==="/home"||this.props.path==="/home/index"||this.props.path==="/home/back"||this.props.path==="/home/record"?<div id="wrapper">
            <div id="wrap">
                <div id="nav_wrap">
                    <a href="#" id="logo"></a>
                    <div id="course">
                        <ul className="course_area">
                            <li>
                                <span>{time}</span>
                                {
                                    this.whitchCourse()
                                }
                            </li>
                            <li className="line"><span></span></li>
                            <li>
                                {
                                    this.props.courseList.map((obj, index)=> {
                                        return obj.cname == this.props.data.course?<span key={index}>{obj.cname}</span>:""
                                    }, this)
                                }
                            </li>
                        </ul>
                    </div>
                    <div id="leader">
                        <ul className="leader_area">
                            <li>
                                <span>任课老师：</span>
                                <span>{this.props.data.teacher}</span>
                            </li>
                            <li className="line">
                                <span></span>
                            </li>
                            <li>
                                <span>班主任：</span>
                                <span>{this.props.data.header}</span>
                            </li>
                            <li className="tools" onClick={this.click}><img src={this.props.path==="/home/index"?SetIcon : this.props.path==="/home/back"? BackIcon : SetIcon } alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>:<div id="wrapper">
            <div id="wrap">
                <div id="nav_wrap">
                    <a href="#" id="logo"></a>
                    <div id="course">
                        <ul className="course_area">
                            <li>
                                <span>数字媒体学院：WEB1508A</span>
                            </li>
                            <li className="line"><span></span></li>
                            <li>
                                <span>第一教学周期</span>
                                <i className="angle_down"></i>
                            </li>
                        </ul>
                    </div>
                    <div id="leader">
                        <ul className="leader_area">
                            <li className="tools"><img src={SetIcon} alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    click(){
        if(this.props.path=="/home"||this.props.path=="/home/index"){
            hashHistory.push("/home/back");
        }else if(this.props.path=="/home/back"){
            hashHistory.push("/home/index");
        }else if(this.props.path=="/home/record"){
            hashHistory.push("/home/index");
        }
    }
}
export default NavBar;
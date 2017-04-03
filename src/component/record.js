import React,{Component} from 'react';
import RecordIcon from './img/detail_22.png';
import Salary from "./img/banner_06.png";
import Teacher from "./img/teacher_23.png";
import Detail from './detail_banner';
import Title from './title';
import AwardRecord from './Today_record';
import Banner from './banner_com';
import CourseSet from "./courseSet";
import Leader from './leader';


export default class record extends Component{
    constructor(props){
        super(props);
        this.remove=this.remove.bind(this);
        this.state={
            record:{
                "data": [{
                    "id": 380,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-21 09:44:42",
                    "year": 2017,
                    "month": 3,
                    "day": 21,
                    "week": 2,
                    "des": "学生会",
                    "operate": 300
                }, {
                    "id": 379,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-26 09:44:40",
                    "year": 2017,
                    "month": 3,
                    "day": 26,
                    "week": 2,
                    "des": "班委",
                    "operate": 500
                }, {
                    "id": 378,
                    "sid": 51,
                    "sname": null,
                    "time": "2016-02-21 09:44:37",
                    "year": 2016,
                    "month": 2,
                    "day": 21,
                    "week": 2,
                    "des": "三好生",
                    "operate": 500
                }, {
                    "id": 377,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-01-11 09:44:34",
                    "year": 2017,
                    "month": 1,
                    "day": 11,
                    "week": 2,
                    "des": "学生会",
                    "operate": 300
                }, {
                    "id": 376,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-06 08:38:47",
                    "year": 2017,
                    "month": 3,
                    "day": 6,
                    "week": 2,
                    "des": "请假5天",
                    "operate": -10000
                }, {
                    "id": 375,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-07 08:38:44",
                    "year": 2017,
                    "month": 3,
                    "day": 7,
                    "week": 2,
                    "des": "不完成作业",
                    "operate": -1200
                }, {
                    "id": 374,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-24 08:38:40",
                    "year": 2017,
                    "month": 3,
                    "day": 24,
                    "week": 2,
                    "des": "演讲比赛",
                    "operate": 500
                }, {
                    "id": 373,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-21 08:38:39",
                    "year": 2017,
                    "month": 3,
                    "day": 21,
                    "week": 2,
                    "des": "生活",
                    "operate": 100
                }, {
                    "id": 372,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-21 08:38:37",
                    "year": 2017,
                    "month": 3,
                    "day": 21,
                    "week": 2,
                    "des": "三好生",
                    "operate": 500
                }, {
                    "id": 371,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-21 08:38:35",
                    "year": 2017,
                    "month": 3,
                    "day": 21,
                    "week": 2,
                    "des": "点多",
                    "operate": 500
                }, {
                    "id": 356,
                    "sid": 51,
                    "sname": null,
                    "time": "2017-03-15 08:55:45",
                    "year": 2017,
                    "month": 3,
                    "day": 15,
                    "week": 3,
                    "des": "三好学生",
                    "operate": 5
                }]
            },
            oparateRecord:false
        }
    }
    componentWillMount(){
        const data=this.state.record.data;
        let todayArr=[];
        let historyObj={};
        let order=[];

        let todayTime=new Date();
        todayTime=`${todayTime.getYear()+1900}${(todayTime.getMonth()+1).toString().length==1?"0"+(todayTime.getMonth()+1):(todayTime.getMonth()+1)}${(todayTime.getDate()).toString().length==1?"0"+(todayTime.getDate()):(todayTime.getDate())}`;
        data.map((obj,index)=>{
            let token;
            token=obj.time.slice(0,10).replace(/-/g,"");
            obj.token=token;
            order.push(token);
        });
        order=[...new Set(order)];
        order.sort((a,b)=>b-a);
        if(order[0]==todayTime){
            order.splice(0,1);
        }
        order.forEach((token,index)=>{
            historyObj[token]=[]
        });
        data.forEach((obj,index)=>{
            if(obj.token==todayTime){
                todayArr.push(obj);
            }else{
                historyObj[obj.token].push(obj)
            }
        });
        this.setState({
            oparateRecord:{
                todayArr,
                historyObj,
                order
            }
        })
    }
    render(){
        let add=2+2*this.props.add;
        let order=[...this.state.oparateRecord.order];
        order=order.splice(0,add);
        return(
            <div id="project_box">
                <div id="project">
                    <div className="project_con">
                        <Detail student={this.props.student} fn={this.props.fn}/>
                        <Title name="今日奖罚记录" src={RecordIcon} backcolor={"#EED63B"} color={"#333"}/>
                        <AwardRecord set={1} data={this.state.oparateRecord.todayArr} fn={this.remove}/>
                        <Banner back={"#fff"} src={Salary}/>
                        <CourseSet/>
                        <Title name="班级教师" src={Teacher} backcolor={"#EED63B"} color={"#333"}/>
                        <Leader/>
                        <Title name="历史奖罚记录" src={RecordIcon} backcolor={"#EED63B"} color={"#333"}/>
                        {
                            order.map((obj,index)=>{
                                return <AwardRecord set={2} obj={obj} key={index} data={this.state.oparateRecord.historyObj[obj]} fn={this.remove}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    remove(val,index){
        val.splice(index,1);
        this.setState({
            index:index
        })
    }
}

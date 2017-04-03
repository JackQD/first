import React,{Component} from 'react';
import List from './img/sort.png';
import Pun from './img/punish_20.png';
import Salary from './img/banner_06.png';
import Banner from './banner_com';
import Title from './title';
import Award from './award_com';
import Punish from './punish_com';
export default class content extends Component{
    render(){
        return (
            <div id="project_box">
                <div id="project">
                    <div className="project_con">
                        <Banner data={this.props.data} src={Salary} back={"#EFD63C"} path={this.props.path}/>
                        <Title backcolor="#EED63B" name="奖励加薪项目" color="#333" src={List}/>
                        <div className="floor award_area">
                            <Award data={this.props.project} color={this.props.color} fn={this.props.back} tog={this.props.fn}/>
                        </div>
                        <Title backcolor="#544B14" name="惩罚减薪项目" color="#fff" src={Pun}/>

                        <div className="floor punish_area">
                            <Punish data={this.props.project1} data1={this.props.project} tog={this.props.fn}/>
                        </div>
                    </div>
                    <div className="mask"
                         style={this.props.status=="1"?{display:"none"}:{display:"block"}}>
                    </div>
                </div>
            </div>
        )
    }
}

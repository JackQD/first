import React,{Component, PropTypes} from "react";
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import './login.css';
import SelectItem from './selectItem';
import InputItem from './inputItem';
import InputButton from './inputButton';
import {teacherLoginData} from './action';
import {hashHistory} from 'react-router';

class login extends Component{
    constructor(props){
        super(props);
        this.clickButton=this.clickButton.bind(this);
        this.login = this.login.bind(this);
        this.keyCode=this.keyCode.bind(this);
        this.state = {identify_code: ''};
    }
    clickButton(){
        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        function getFourNumber() {
            let num = "";
            for (let i = 0; i < 4; i++) {
                switch (getRandomArbitrary(0, 3)) {
                    case 0:
                        num += String.fromCharCode(getRandomArbitrary(65, 91))
                        break;
                    case 1:
                        num += String.fromCharCode(getRandomArbitrary(97, 123))
                        break;
                    default:
                        num += String.fromCharCode(getRandomArbitrary(48, 58))
                }
            }
            return num;
        }
        const iden=getFourNumber();
        const idenNum=iden.split("");
        this.setState({identify_code:idenNum});
    }
    componentWillMount(){
        this.clickButton();
    }
    render(){
        return(
            <div id="back">
                <form action="" name="form_login" id="login" onKeyDown={()=>this.keyCode(event)}>
                    <SelectItem name="academy" ref="academy" item={["数字媒体WEB","数字媒体UI"]}/>
                    <SelectItem name="manager" ref="manager" item={["超级管理员","教师","学生"]}/>
                    <InputItem name="user" ref="username" type={"text"} placeholder="用户名"/>
                    <InputItem name="password" ref="password" type={"password"} placeholder="密码"/>
                    <div className="check_area">
                        <InputItem name="check" placeholder="验证码" type={"text"}/>
                        <div className="check_code" onClick={this.clickButton}>
                            <span>{this.state.identify_code[0]}</span>
                            <span>{this.state.identify_code[1]}</span>
                            <span>{this.state.identify_code[2]}</span>
                            <span>{this.state.identify_code[3]}</span>
                        </div>
                    </div>
                    <InputButton ref="btn" login={this.login} name={"submit"} value={"登录"} type={"button"}/>
                </form>
            </div>
        )
    }
    login(){
        let user=ReactDOM.findDOMNode(this.refs.username).value;
        let password=ReactDOM.findDOMNode(this.refs.password).value;
        let authory=ReactDOM.findDOMNode(this.refs.manager).value;
        if(authory==0){
            fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${user}&password=${password}&roleType=1&officeType=1`)
                .then(json=>json.json())
                .then(json=>{
                    if(json.status==201){
                        alert(json.message);
                    }else if(json.status==200){
                        this.props.onSuper(json);
                        hashHistory.push("/super");
                    }
                },err=>{
                    alert("服务器异常")
                });
        }else if(authory==1){
            fetch(`http://192.168.60.110:8080/cms/login/login.do?roleName=${user}&password=${password}&roleType=1&officeType=1`)
                .then(json=>json.json())
                .then(json=>{
                    if(json.status==201){
                        alert(json.message);
                    }else if(json.status==200){
                        this.props.onSuper(json);
                        hashHistory.push("/home");
                    }
                },err=>{
                    alert("服务器异常")
                });
        }
    }
    keyCode(event){
        if(event.keyCode==13){
            this.login()
        }
    }
}
function manager(state) {
    return state
}
const mapDispatchToProps = {
    onSuper:teacherLoginData
};
export default connect(manager,mapDispatchToProps)(login);
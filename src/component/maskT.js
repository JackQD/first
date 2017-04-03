import React,{Component} from 'react';

export default class popT extends Component{
    constructor(props){
        super(props);
        this.remove=this.remove.bind(this);
        this.sure=this.sure.bind(this);
    }
    render(){
        console.log(this.props.data);
        return(
            <div className="conPop popT">
                <div className="headline">
                    <h2>班级基本信息</h2>
                </div>
                <form action="" className="baseMess">
                    <label htmlFor="1" className="label_name">
                        <span className="mess_title">姓名</span>
                        <input type="text" className="name_text" ref="nameText" name="name" placeholder={this.props.data[this.props.names]!==undefined?this.props.data[this.props.names].sname:""}/>
                    </label>
                    <label htmlFor="2" className="label_class">
                        <span className="mess_title">班级</span>
                        <select name="Cname" id="class_sel">
                            <option value=""></option>
                        </select>
                    </label>
                    <label htmlFor="3" className="label_stuId">
                        <span className="mess_title">学号</span>
                        <input type="text" className="stuId_text" name="Sname" placeholder=""/>
                    </label>
                    <label htmlFor="4" className="label_sex">
                        <span className="mess_title">性别</span>
                        <select name="sexName" id="sex_sel">
                            <option value=""></option>
                        </select>
                    </label>
                    <label htmlFor="4" className="label_identity">
                        <span className="mess_title">身份证号</span>
                        <input type="text" className="identity_text" name="Iname" placeholder=""/>
                    </label>
                </form>
                <div className="pro_btn">
                    <button className="close" onClick={this.remove}>取消</button>
                    <button className="determine" onClick={this.sure}>确定</button>
                </div>
            </div>
        );
    }
    remove(){
        this.props.fn(-1);
    }
    sure(){
        this.props.fn(-1);
        this.props.data.push({
            sname:this.refs.nameText.placeholder==undefined?this.refs.nameText.placeholder:""
        })
    }
}

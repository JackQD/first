import React,{Component} from 'react';

class SubAside extends Component{
    constructor(props){
        super(props);
        this.state={
            obj:0
        }
    }
    render(){
        return(
            this.props.subPath=="/home"||this.props.subPath=="/home/index"||this.props.subPath=="/home/back"||this.props.subPath=="/home/record"?<ul id="member_me">
                {
                    this.props.subPath=="/home"||this.props.subPath=="/home/index"?
                        this.props.data.map((obj1,index)=>{
                        return <li data={obj1} key={index} style={this.state.obj===index? {backgroundColor:"#EFD63C",color:"#333"} : {} } onClick={()=>this.changes(index)}>{obj1.sname}</li>
                    },this) : this.props.subPath==="/home/back"? <li style={{backgroundColor:"#EFD63C",color:"#333"}}>班级设置</li> : this.props.data.map((obj1,index)=>{
                        return <li data={obj1} key={index} style={this.state.obj===index? {backgroundColor:"#EFD63C",color:"#333"} : {} } onClick={()=>this.changes(index)}>{obj1.sname}</li>
                    },this)
                }
            </ul>:<div id="member_me">
                {
                    this.props.grades.map((obj,index)=>{
                        return <div className="supItem_grade" key={index} style={{backgroundColor:"",color:"#fff"}} onClick={()=>this.props.fn(index)}>
                            <h4 className="grade" >{obj.gname}</h4>
                            <i className="angle_right"></i>
                            <div className="member" style={{display:"none"}}>
                                {
                                    obj.list.map((val,index)=>{
                                        return <div className="supItem" key={index}>
                                            {val.sname}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
    changes(index){
        this.props.fn(index);
        this.setState({
            obj:index
        })
    }
}

export default SubAside

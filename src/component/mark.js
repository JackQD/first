import React,{Component} from "react";

class Pop extends Component{
    constructor(props){
        super(props);
        this.remove=this.remove.bind(this);
        this.sure=this.sure.bind(this);
        this.state={
            score:this.props.data.score
        }
    }
    render(){
        return(
            <div className="conPop popO">
                <div className="headline">
                    <h2>{this.props.names>=this.props.project.length?"惩罚减薪项目":"奖励加薪项目"}</h2>
                </div>
                <div className="pro_con">
                    <h2>{this.props.name.name}</h2>
                    <div className="score">
                        <span>{this.props.names>=this.props.project.length? "":"+"}{this.props.name.score}</span>
                        <span>$</span>
                    </div>
                </div>
                <div className="pro_btn">
                    <button className="close" onClick={this.remove}>取消</button>
                    <button className="determine" onClick={this.sure}>确定</button>
                </div>
            </div>
        )
    }
    remove(){
        this.props.tog(-1);
    }
    sure(){
        this.props.tog(-1);
        var score = (this.props.data.score)+=(this.props.name.score);
        this.setState({
            score:score
        })
    }
}
export default Pop

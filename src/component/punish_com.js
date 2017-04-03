import React,{Component} from 'react';

class Punish extends Component{
    render(){
        return (
            <div className="punish">
                <div>
                    {
                        this.props.data.map(function(value,index){
                            return <div className="punish_list" key={index} onClick={()=>this.props.tog(index+this.props.data1.length)}>
                                <div className="arc">
                                    <div className="progress">
                                        <i>{this.props.data[index].score}</i>
                                        <i>$</i>
                                    </div>
                                </div>
                                <div className="reason">
                                    <h2>{this.props.data[index].name}</h2>
                                </div>
                            </div>
                        },this)
                    }
                </div>
            </div>
        )
    }
}
export default Punish

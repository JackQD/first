import React,{Component} from 'react';

class Award extends Component{
    constructor(props){
        super(props);
        this.state={
            objColor:'',
            flag1:true
        };
    }
    render(){
        return (
            <div className="award">
                {
                    this.props.data.map(function(value,index){
                        return <div className="item" key={index} onMouseOver={()=>this.changeColor(index)}
                                    style= {this.state.objColor===index?
                                    ({backgroundColor:this.props.color[index>=this.props.color.length?index-this.props.color.length:index]
                                    ,boxShadow:"0 0 5px 0"+this.props.color[index>=this.props.color.length?index-this.props.color.length:index]
                                    ,borderBottom:"1px solid "+this.props.color[index>=this.props.color.length?index-this.props.color.length:index]})
                                    :({backgroundColor: "#fff",borderBottom:"1px solid "+this.props.color[index>=this.props.color.length?index-this.props.color.length:index]})}
                                    onMouseOut={()=>this.changeColor(index)}
                                    onClick={()=>this.props.tog(index)}
                            >
                            <div className="item_con">
                                <h2 style={{color:this.props.color[index>=this.props.color.length?index-this.props.color.length:index]}}>{this.props.data[index].name}</h2>
                            </div>
                            <div className="welfare" style={{color:this.props.color[index>=this.props.color.length?index-this.props.color.length:index]}}>
                                <i className="number">+{this.props.data[index].score}</i>
                                <i className="dollar">$</i>
                            </div>
                        </div>
                    },this)
                }
            </div>
        )
    }
    changeColor(val){
        this.props.fn(val);
        if(this.state.flag1){
            this.setState({
                objColor:val,
                flag1:false
            });
        }else{
            this.setState({
                objColor:'#fff',
                flag1:true
            });
        }
    }
}

export default Award
import React,{Component} from 'react';
import Aside from './aside';
import SubAside from './subaside';

export default class leftSelect extends Component{
    render(){
        return (
            this.props.path=="/home"||this.props.path=="/home/index"||this.props.path=="/home/back"||this.props.path=="/home/record"?<div id="members">
                <Aside subPath={this.props.path}/>
                <SubAside data={this.props.data} fn={this.props.fn} subPath={this.props.path}/>
            </div>:<div id="members">
                <Aside/>
                <SubAside grades={this.props.grades} fn={this.props.fn}/>
            </div>
        )
    }
}

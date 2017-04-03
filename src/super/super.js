import React, {Component} from 'react';
import './super.css';
import NavBar from '../component/index-header';
import {connect} from 'react-redux';
import {superRoot} from './action';
import LeftSelect from '../component/left_select';
import SuperContent from './superContent';

class superM extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <NavBar />
                <div id="student_area">
                    <SuperContent />
                    <LeftSelect grades={this.props.superData.grades} fn={this.props.onLink}/>
                </div>
            </div>
        )
    }
}
function maneger(state) {
    console.log(state);
    return {
        superData:state.calculate1
    }
}
const mapDispatchToProps={
    onLink:superRoot
};
export default connect(maneger,mapDispatchToProps)(superM);

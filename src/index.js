import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import TotalCulculator from './reducers';
import './index.css';
import Home from './component/component';
import Content from './component/content';
import ContentSet from './component/contentSet';
import Record from './component/record';
import Login from './login/login';
import SuperM from './super/super';
import { Router ,Route ,hashHistory ,IndexRoute ,Redirect ,IndexRedirect} from 'react-router';

let store = createStore(TotalCulculator);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Router history={hashHistory}>
                <Redirect from="/" to="/login"/>
                <Route path="/login" component={Login}>

                </Route>
                <Route path="/super" component={SuperM}>

                </Route>
                <Route path="/home" component={Home}>
                    <IndexRoute component={Content}/>
                    <Route path="index" component={Content}/>
                    <Route path="back" component={ContentSet}/>
                    <Route path="record" component={Record}/>
                </Route>
            </Router>
        </Router>
    </Provider>,
    document.getElementById('root')
);

























//  ES5和ES6组件的写法
//  ES5:
//var Dom=React.createClass({
//    render: function(){
//        return <h1>{this.props.id}</h1>
//    }
//});
//  ES6:
//class Box extends Component{
//    render(){
//        return <h1>{this.props.id}</h1>
//    }
//}


//class LikeButton extends Component{
//    constructor(props){
//        super(props);
//        this.changeState=this.changeState.bind(this);
//        this.state = {
//            aa: 111111111
//        }
//    }
//
//    //componentWillMount(){
//    //    alert("组件即将载入")
//    //}
//    //componentDidMount(){
//    //    alert("组件已载入")
//    //}
//    //componentWillUnmount(){
//    //    alert("组件即将载入结束")
//    //}
//    componentWillUpdate(props){
//        alert("组件即将更新")
//    }
//    componentDidUpdate(props){
//        alert("组件结束更新")
//    }
//    componentWillReceiveProps(props){
//        alert("组件发生改变")
//    }
//    shouldComponentUpdate(props){
//        alert("组件是否开始渲染");
//        return true;
//    }
//    render(){
//        console.log(this.state.aa);
//        return(
//            <div>
//                <button onClick={this.changeState}>123</button>
//            </div>
//        )
//    }
//    changeState(){
//        this.setState({
//            aa:23435656
//        })
//    }
//}
//ReactDOM.render(
//
//  <LikeButton></LikeButton>,
//  document.getElementById('root')
//);

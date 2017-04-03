import React,{Component} from 'react';

export default class leader extends Component{
    render(){
        return(
            <div className="controller">
                <ul>
                    <li className="list1">
                        <div className="task">
                            <h4>任课老师</h4>
                            <p>Teacher</p>
                        </div>
                        <div className="statement">
                            <span>孙邵瑜</span>
                            <i className="devide"></i>
                            <span>WEB</span>
                            <i className="devide"></i>
                            <span>WEB</span>
                        </div>
                    </li>
                    <li className="list2">
                        <div className="task">
                            <h3>班主任</h3>
                            <p>Teacher</p>
                        </div>
                        <div className="statement">
                            <span>胡乃权</span>
                            <i className="devide"></i>
                            <span>WEB</span>
                            <i className="devide"></i>
                            <span>WEB</span>
                        </div>
                    </li>
                    <li className="list3">
                        <div className="task">
                            <h3>任课老师</h3>
                            <p>Teacher</p>
                        </div>
                        <div className="statement">
                            <span>孙邵瑜</span>
                            <i className="devide"></i>
                            <span>WEB</span>
                            <i className="devide"></i>
                            <span>WEB</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
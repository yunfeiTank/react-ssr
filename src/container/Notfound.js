/**
 * @description : 错误界面
 * @author: yunfei
 * @time : 2019/12/19
 *  
 */
import React from 'react';
import { Route } from 'react-router-dom';

/* 状态封装 */
function Status({ code, children }) {
    return (
        <Route
            render={({ staticContext }) => {
                if (staticContext) {
                    staticContext.statusCode = code
                }
                return children
            }}
        ></Route >
    )
}
function Notfound(props) {
    //赋值statiContext,服务端监听
    return(
        <Status code={404}>
            <img src='./404.jpg'></img>
        </Status>
    )
}
export default Notfound
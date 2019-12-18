/**
 * @description: store;
 * @author：yunfei;
 * @time : 2019/12/12
 * 
 * @log {
 *  2019/12/19: 为store注入全局方法 axios(对应 服务端与客户端)
 * }
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import indexReducer from './index';
import userReducer from './user';

/* ---server端请求方法--- */
const serverAxios = axios.create({
    baseURL: 'http://localhost:9090/'
})
/* ---client端请求方法--- */
const clientAxios = axios.create({
    baseURL: '/'
})


// 整合
const reducer = combineReducers({
    index: indexReducer,
    user: userReducer
})
// 实例
const getClientStore = () => {
    //客户端 获取服务端注入到window下的数据
    const initState = window._context ? window._context : {};
    return createStore(reducer, initState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}
const getServerStore = () => {
    //服务端
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}
export { getClientStore, getServerStore };
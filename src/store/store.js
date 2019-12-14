/**
 * description: store
 * author：yunfei
 * 
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './index';
import userReducer from './user';
// 整合
const reducer = combineReducers({
    index: indexReducer,
    user: userReducer
})
// 实例
// const store = createStore(reducer, applyMiddleware(thunk));
const getClientStore = () => {
    //客户端 获取服务端注入到window下的数据
    const initState = window._context ? window._context : {};
    return createStore(reducer, initState, applyMiddleware(thunk));
}
const getServerStore = () => {
    //服务端
    return createStore(reducer, applyMiddleware(thunk));
}
export { getClientStore, getServerStore };
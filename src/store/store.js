/**
 * description: store
 * author：yunfei
 * 
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './index';
// 整合
const reducer = combineReducers({
    index: indexReducer
})
// 实例
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
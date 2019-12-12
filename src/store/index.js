/**
 * description: reducer
 * author；yunfei
 */
import axios from 'axios';
//actionType
const GET_LIST = 'INDEX/GET/LIST';
//ActionCreators
const changeList = list => ({
    type: GET_LIST,
    list
});
//dispatch
export const getIndexList = server => {
    return (dispatch, getState, axiosIntance) => {
        //数据
        return axios.get('http://localhost:9090/api/course/list').then(res => {
            const list = res.data;
            dispatch(changeList(list));
        })
    }
}
// 默认值
const defaultState = {
    list: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_LIST:
            const newState={
                ...state,
                list:action.list
            }
            return newState
        default:
            return state
    }
}


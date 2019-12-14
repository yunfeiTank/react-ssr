import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getUserData } from '../store/user';
const User = (props) => {
    // console.log(props.data)
    useEffect(()=>{
        props.getUserData()
    },[])
    return (<div>
        <h3>
            你好！{props.data.name},你要{props.data.age}
        </h3>
    </div>)
}
// loadDate 组件的服务端加载方法
User.loadData = (store) => {
    //服务端渲染，dispatch
    return store.dispatch(getUserData())
}
export default connect(
    state => ({ data: state.user }),
    { getUserData }

)(User);
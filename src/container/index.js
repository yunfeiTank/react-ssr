import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getIndexList } from '../store/index';
const Index = (props) => {
    useEffect(() => {
        //获取数据
        if (props.list.length == 0) {
            props.getIndexList()
        }
    }, [])
    return (
        <div>
            <p>
                我是首页
            </p>
            <ul>
                {
                    props.list.map(item => {
                        return <li key={item.txt}>{item.txt}</li>
                    })
                }
            </ul>
        </div>
    )
}
// loadDate 组件的服务端加载方法
Index.loadData = (store) => {
    //服务端渲染，dispatch
    return store.dispatch(getIndexList())
}
export default connect(
    state => ({ list: state.index.list }),
    { getIndexList }
)(Index);
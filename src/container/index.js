import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getIndexList } from '../store/index';
const Index = (props) => {
    useEffect(() => {
        //获取数据
        props.getIndexList()
    }, [])
    return (
        <div>
            我是首页
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


export default connect(
    state => ({ list: state.index.list }),
    { getIndexList }
)(Index);
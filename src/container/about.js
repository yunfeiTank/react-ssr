/**
 * @param {*} props 
 * @method : styles._getCss()服务端 特有方法
 */
import React, { useState, useEffect } from 'react'
import withStyle from '../withStyle';
import styles from './about.css';
// console.log(styles._getCss())
const About = (props) => {
    /* ---使用告诫组件 withstyle替换--- */
    // if (props.staticContext) {
    //     // 更改 staticContext会使 server端的context 更新
    //     props.staticContext.css.push(style._getCss())
    // }

    return (<div>
        <p className={styles.title}>
            我是关于
            </p>
    </div>)
}
export default withStyle(About,styles);
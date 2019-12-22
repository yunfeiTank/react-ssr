/**
 * @description: 高阶组件，用于封装server端的style
 * @author：yunfei
 * @time :2019/12/21
 */
import React from 'react';
function withStyle(Comp, style) {
    return (props) => {
        if (props.staticContext) {
            props.staticContext.css.push(style._getCss())
        }
        return <Comp {...props}></Comp>
    }
}
export default withStyle;
import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
const Redire = (props) => {
    // console.log(props.data)
    useEffect(() => {

    }, [])
    return (<div>
        <h3>
            重定向
            <Redirect to='/'></Redirect>
        </h3>
    </div>)
}

export default Redire
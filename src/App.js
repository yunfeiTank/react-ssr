import React, { useState } from "react";
import {Route} from 'react-router-dom';
import Index from './container/index';
import About from './container/about';
import User from './container/user';
import './App.css'

export default  [
    {
        path:'/',
        component:Index,
        // exact:true,
        key:'index'
    },{
        path:'/about',
        component:About,
        exact:true,
        key:'about'
    },{
        path:'/user',
        component:User,
        exact:true,
        key:'user'
    }
]
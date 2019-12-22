import React, { useState } from "react";
import { Route } from 'react-router-dom';
import Index from './container/index';
import About from './container/about';
import User from './container/user';
import Redire from './container/redire';
import Notfound from './container/Notfound';

export default [
    {
        path: '/',
        component: Index,
        exact: true,
        key: 'index'
    }, {
        path: '/about',
        component: About,
        exact: true,
        key: 'about'
    }, {
        path: '/user',
        component: User,
        exact: true,
        key: 'user'
    }, {
        path: '/redire',
        component: Redire,
        exact: true,
        key: 'Redire'
    }, {
        component: Notfound,
        key: 'Notfound'
    }
]
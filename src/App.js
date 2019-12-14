import React, { useState } from "react";
import {Route} from 'react-router-dom';
import Index from './container/index';
import About from './container/about';
import User from './container/user';


export default  [
    {
        path:'/',
        component:Index,
        exact:true,
        // loadData:Index.loadData,
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


// export default(
//     <div>
//         <Route path='/' exact component={Index}></Route>
//         <Route path='/about' exact component={About}></Route>
//     </div>
// )
// const App = (props) => {
//     const [ count, setCount ] = useState(1);
//     return (
//         <div>
//             <h1>hi {props.title}</h1>
//             <p>{count}</p>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//         </div>
//     )
// }
// export default <App title='哈哈' />
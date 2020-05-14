import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './core/Home';
import Singnin from './user/Signin';
import Signup from './user/Signup';
import Cart from './user/Cart'
import PrivateRoutes from './auth/helper/PrivateRoutes'
// import Base from './core/Base'


const Routes = () =>{

return(
    <Router>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/signin' exact component={Singnin}></Route>
            <Route path='/signup' exact component={Signup}></Route>
            <PrivateRoutes path='/cart' exact component={Cart}/>
        </Switch>

    </Router>
)


}


export default Routes
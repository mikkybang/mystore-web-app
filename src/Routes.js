import React from "react";
import { Route, Switch } from "react-router-dom"
//Components import
import NotFound from './components/NotFound/NotFound';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register"
class Routes extends React.Component {
    render(){
        return(

            <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={NotFound} />
            </Switch>
        )
    }



}
export default Routes
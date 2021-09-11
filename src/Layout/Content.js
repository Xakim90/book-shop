import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../routes/routes";


const Content = (props) => {
    return (
        <div>
            <Switch>
                {ROUTES.map((route, index) => {
                    return <Route {...route} exact={route.exact} path={route.url} key={index} component={route.component} />
                })}
            </Switch>
        </div>
    )
}
export default Content;
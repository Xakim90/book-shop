import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../routes/routes";


const Content = (props) => {
    return (
        <>
            <Switch>
                {ROUTES.map((route, index) => {
                    return <Route {...route} path={route.url} key={index} component={route.component} />
                })}
            </Switch>
        </>
    )
}
export default Content;
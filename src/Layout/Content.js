import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { ROUTES2 } from "../routes/routes2";


const Content = (props) => {
    return (
        <>
            <Switch>
                {(ROUTES, ROUTES2).map((route, index) => {
                    return <Route {...route} path={route.url} key={index} component={route.component} />
                })}
            </Switch>
        </>
    )
}
export default Content;
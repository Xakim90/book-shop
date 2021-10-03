import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { ROUTES2 } from "../routes/routes2";


const Content = (props) => {
    const newRoutes = ROUTES.concat(ROUTES2);
    return (
        <div>
            <Switch>
                {newRoutes.map((route, index) => {
                    return <Route {...route} path={route.url} key={route + index} component={route.component} />
                })}
            </Switch>
        </div>
    )
}
export default Content;
import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../routes/routes";


const Content = (props) => {
    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                   
                    <img src="https://cdn.shopify.com/s/files/1/0880/2454/files/0_bda999bf-aeb8-4cec-8026-616365c35b8b_1500x.jpg?v=1622668580" alt="" />
                </div>
            </div>
            <Switch>
                {ROUTES.map((route, index) => {
                    return <Route {...route} path={route.url} key={index} component={route.component} />
                })}
            </Switch>
        </>
    )
}
export default Content;
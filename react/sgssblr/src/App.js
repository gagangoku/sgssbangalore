import React from 'react';
import {Switch} from "react-router-dom";
import {routes as homeRoutes} from './controller/HomeController';


export const routes = (
    <div>
        <Switch>
            {homeRoutes}
        </Switch>
    </div>
);
export default routes;


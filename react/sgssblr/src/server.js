import Express from 'express';
import React from 'react';
import compression from 'compression';
import bodyParser from 'body-parser';
import * as URI from "uri-js";
import {renderToString} from 'react-dom/server';
import {createStore} from 'redux';
import {Helmet} from "react-helmet";
import {reducerFn} from "./reducers";
import {StaticRouter} from "react-router-dom";
import {routes} from './App';
import {Provider} from 'react-redux';
import {HOME_PAGE_URL, SPLASH_PAGE_URL, TEMP_PAGE_URL} from "./controller/HomeController";


const app = Express();
const port = 8095;

// Gzip
app.use(compression());

// Serve static files
app.use("/assets", Express.static('assets'));
app.use("/images", Express.static('images'));
app.use("/static", Express.static('static', {
    setHeaders: function (res, path) {
        res.set('Service-Worker-Allowed', '/');
    }
}));
app.use(bodyParser.json());

// This is fired every time the server side receives a request
app.use(handleRender);

app.listen(port, () => process.send && process.send("online"));
console.log('Server started');


// NOTE: This is required to be a function () => {} syntax doesn't work here
function handleRender(req, res) {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const path = URI.parse(fullUrl).path;
    console.log('fullUrl: ', fullUrl);
    console.log('req.url: ', req.url);
    console.log('path: ', path);

    const context = {data: {}, promises: {}, req};
    const store = createStore(reducerFn);

    // Render / instead of req.url since I want to render other urls in JS via bundle.js
    const urlToRender = URLS_TO_RENDER.includes(path) ? req.url : SPLASH_PAGE_URL;
    console.log('urlToRender: ', urlToRender);

    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={urlToRender} context={context}>
                {routes}
            </StaticRouter>
        </Provider>
    );
    const helmet = Helmet.renderStatic();

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    const renderedHtml = renderFullPage(context.data, helmet, html, preloadedState);
    res.send(renderedHtml);
}

const URLS_TO_RENDER = [
    HOME_PAGE_URL,
    TEMP_PAGE_URL,
];

const renderFullPage = (data, helmet, html, preloadedState) => {
    return `
        <!doctype html>
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                ${helmet.style.toString()}
                ${helmet.script.toString()}
            
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=12.0, minimum-scale=.25, user-scalable=yes"/>
                <link rel="icon" href="/images/Khanda.svg.png" type="image/png" />
                <meta name="google" value="notranslate" content="notranslate" />

                <link href="/images/wf/dinengschriftstd.css" rel="stylesheet" type="text/css" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                
                <!-- Live kirtan player, downloaded from https://hosted.muses.org/mrp.js -->
                <script type="text/javascript" src="/images/wf/mrp.js"></script>
            </head>
    
            <body style="margin: 0">
                <div id="root">${html}</div>
                
                <script>
                    // WARNING: See the following for security issues around embedding JSON in HTML:
                    // http://redux.js.org/recipes/ServerRendering.html#security-considerations
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')};
                    window.__DATA__ = ${JSON.stringify(data)};
                    window.__HYDRATE_OR_RENDER__ = 'render';
                </script>
                <script src="/assets/client.js"></script>
                
                <script src="${process.env.BROWSER_REFRESH_URL}"></script>
            </body>
        </html>
    `;
};


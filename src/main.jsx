import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/sass/main.scss';

import {store} from './redux/store';
import {Provider} from 'react-redux';
// import {settingFetched} from "./redux/feature/apiConfigSlice.js";
import {useGetConfigurationQuery} from "./utils/apiFetching.js";
// import {fetchMovies} from "./redux/feature/homeSlice.js";

/*
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);
*/


// store.dispatch(fetchSettings());
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<RouterProvider router={router} />*/}
            <App/>
        </Provider>
    </React.StrictMode>,
)
//b71514b542e189c11616f93809d89a91
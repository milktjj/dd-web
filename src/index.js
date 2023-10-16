import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './page/error-page';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Course Info Not Found</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/courses",
        element: <App />,
        // loader: 
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <App />
reportWebVitals();

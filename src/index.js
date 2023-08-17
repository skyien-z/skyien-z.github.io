import App from './App';
import AboutPage from './AboutPage/about-page';
import RecipesPage from './RecipesPage/recipes-page'
import ContactPage from './ContactPage/contact-page';
import ErrorPage from "./ErrorPage/error-page";
import HomePage from "./HomePage/home-page"
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "about",
        element: <AboutPage/>
      },
      {
        path: "recipes",
        element: <RecipesPage/>
      },
      {
        path: "contact",
        element: <ContactPage/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

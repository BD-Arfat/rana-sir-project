import {
    createBrowserRouter,
} from "react-router";

import Main from "./Layouts/Main";
import Home from "./Pages/Home/Home/Home";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
]);
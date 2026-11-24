import {
    createBrowserRouter,
} from "react-router";

import Main from "./Layouts/Main";
import Home from "./Pages/Home/Home/Home";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import About from "./Pages/Abouts/About/About";
import Team from "./Pages/TeamPage/Team/Team";
import Services from "./Pages/Services/Services/Services";

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
                path: '/about',
                element: <About />
            },
            {
                path: '/team',
                element: <Team />
            },
            {
                path: '/services',
                element: <Services/>
            },
            
        ]
        
    },
    {
                path: '*',
                element: <NotFound />
            }
]);
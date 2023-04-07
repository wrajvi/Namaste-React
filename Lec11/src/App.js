import React, { Children ,lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";


import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"; 
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from  "./components/Profile";
import Shimmer from "./components/Shimmer";


const Instamart=lazy(()=> import("./components/Instamart"));


const AppLayout = () => 
{ return(
<>  
    <Header/>
    <Outlet/>
    <Footer/>
</>        
    );
};

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children: [
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
                children:[
                {
                    path:"profile",
                    element:<Profile/>
                },
                ],
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resID",
                element:<RestaurantMenu/>,
            },
            // {
            //     path:"/instamart",
            //     element:<Instamart/>,

            // },
            //On first time the lazy loading takes time to load the js file of instamart and
            //Shows Error Beacuse React tries to render it and the file is not there instantly it will take some
            //time.

            //To avoid Error we use Suspense --> it will tell react that the component is 
            //lazy loading and it wouldn't give error.
            // {
            //        path:"/instamart",
            //        element:(<Suspense>
            //               <Instamart/>
            //               </Suspense>),
            // }
            {
                       path:"/instamart",
                       element:(<Suspense fallback={<Shimmer/>}>
                              <Instamart/>
                              </Suspense>),
            }

        ],
    },
    // {
    //     path:"/about",
    //     element:<About/>
    // }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
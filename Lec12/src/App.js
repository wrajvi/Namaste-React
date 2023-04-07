import React, {useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "../utils/UserContext";

const Instamart = lazy(() => import("./components/Instamart"));


const AppLayout = () => {

    const [user,setUser]=useState({
        name: "Namaste React",
        email: "wrajeev13@gmail.com",});

    return (
        <>
        {/* The Context Provider is Used to update the default value of Usercontext
            We are wrapping all the header outlet and footer inside it becuse we want to reflect the changes
            in all of them.
            
            If you don't want change in any of them put it outside the UserContext.Provider
         */}
            {/* <UserContext.Provider
            value={{
                user:user
                }
            }
            > 
            <Header />
            <Outlet />
            <Footer />
            </UserContext.Provider> */}



            {/* <Header />
            <UserContext.Provider
            value={{
                user:user
                }
            }
            >
            <Outlet />
            </UserContext.Provider>
            <Footer /> */}


            
            <UserContext.Provider
            value={{
                user:user,
                setUser:setUser,
                }
            }
            > 
            <Header />
            <Outlet />
            <Footer />
            </UserContext.Provider>

        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element:<Body/>,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resID",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: (<Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>),
            }

        ],
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);







// /*
// Props Drilling : Passing the props from parent to child to its child....


// Applayout
//   <Body user={user}/>
//      <RestauranCard user={user}/>
//         <h4>{user.name}</h4>



// */



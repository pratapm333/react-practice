import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About"; 
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/userContext";
 
 const LayoutComponent  = () =>  { 

   const [userName, setUserName] = useState()

   useEffect(()=>{
    
    const data = {
      name: "Pratap",
    } 
    setUserName(data.name)
   }, []) 
   
   return(
      <UserContext.Provider value={{loggedInUser:userName, setUserName }}>
      <div className="main-container">
         <Header />  
         <Outlet />
         <Footer />
      </div>
      </UserContext.Provider>
 );
 }

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <LayoutComponent />,
      children: [ 
         {
            path: '/',
            element: <Body />
         },
       {
         path: '/about',
         element: <About />
      },
      {
         path: '/contact',
         element: <Contact/>
      },
      {
         path: '/restaurant/:resId',
         element: <RestaurantMenu /> 
      },

      ],
      errorElement: <Error />
   },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
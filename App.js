import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

 
 const LayoutComponent  = () =>  { return(
      <div className="main-container">
         <Header />
         <Body />
         <Footer />
      </div>
 );
 }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LayoutComponent />);
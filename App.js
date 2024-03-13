import React from "react";
import ReactDOM from "react-dom/client";

const ParentCompoent = () => (
   <div id="container">
   <h1>Function Component example for Parent</h1>    
   </div>
);

const child = <span>Child</span>
const regExp = 5000;

const ChildCompoent = () => (
   <div id="container">
   <h1>Function Component example for {child}</h1>  
   <ParentCompoent /> 
   <ParentCompoent></ParentCompoent> 
   {ParentCompoent()}
   {ParentCompoent()} 
   <h2>{regExp}</h2>
   <h3>{console.log("React funtional component")}</h3>
   </div> 
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ChildCompoent />);
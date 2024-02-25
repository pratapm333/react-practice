const heading = React.createElement
("div",{id: "parent"},  
[React.createElement("div",{id: "child"}, 
   [React.createElement("h1", {id: "heading"},"Hello world using React"), 
   React.createElement("h2", {id: "heading2"},"Hello world using React")] ),
React.createElement("div",{id: "child2"}, 
   [React.createElement("h1", {id: "heading3"},"Hello world using React"), 
   React.createElement("h3", {id: "heading4"},"Hello world using React")]),
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement('h1',{
},'Namaste React');

// React.createElement=> object => HTML(DOM)

const root=ReactDOM.createRoot(document.getElementById("root"));
// JSX-->it is like HTML NOT Exactly the html
// const head= <h1>FRom JSX</h1>;
//For multiple lines use ()
const head = (
    <h1> 
    Hello ji
    </h1>
);

// JSX=>React.createElement=> object => HTML(DOM)
// JSX is converted to React by Babel.


// React Element
// These are Simply the variable those have assigned JSX
const reactele = (
    <h2>
    React Element
    </h2>
);

// React Component
// These are the  Normal Javascript functions
// React component, start its name with an uppercase letter.
// Below are the Different SYNTAX for Component
const Component1 = () => {
    return <h1> Component 1 its HERE</h1>;
};

const Component2 = () =>{
   
    return ( //for multiple line use ()
           <div>
             {/* <button onClick={()=>{st("hi")}}>buttin</button> */}
             <h1>Component2 first</h1>
             <h2>Component 2 Second</h2>
           </div>
    );
};

const Component3 = () => (
    <div>
    {Component1()}
    <Component2 />  
    <Component1></Component1>
    {/* for Component */}
    {/* Including another component in component known as Component Composition */}

    {/*What is component composition in React? In React, we can make components more generic by accepting props, which are to React components what parameters are to functions. Component composition is the name for passing components as props to other components, thus creating new components with other components  */}


    
    {head}  {/* for Element */}
    
    <h1>Component3 first</h1>
    <h2>Component3 Second</h2>
   </div>
);

//SYNTAX for element
// root.render(reactele);

// SYNTAX for component
// root.render(<Component1/>)



root.render(Component3()) //As React Component are function we can execute it.

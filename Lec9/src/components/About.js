import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ClassProfile from "./ProfileClass";
import React from "react";
// const About=()=>{
//     return(
//         <div>
//             <h1>About us</h1>
//             <Profile name={"RAJEEV"} />
//             {/* <Outlet/> */}
//             <ClassProfile name={"RAJEEV"}/>
//         </div>
//     );
// }

// class About extends React.Component{
//     constructor(props){
//         console.log("Parent Constructor");
//         super(props);

//     }

//     componentDidMount(){
//         console.log("Parent DIDMOUNT");
//     }
//     render(){
//         console.log("Parent Render");
//         return(

//             <div>
//                 <h1>About us</h1>
//                 <Profile name={"RAJEEV"} />
//                 {/* <Outlet/> */}
//                 <ClassProfile name={"RAJEEV"}/>
//             </div>
//         );

//     }
// }


//console
/*
Parent Constructor
Parent Render
Child Constructor
Child Render
Child Didmount

*/



class About extends React.Component{
    constructor(props){
        console.log("Parent Constructor");
        super(props);

    }

    componentDidMount(){
    
        console.log("Parent DIDMOUNT");
    }
    render(){
        console.log("Parent Render");
        return(

            <div>
                <h1>About us</h1>
                <Profile name={"RAJEEV"} />
                {/* <Outlet/> */}
                <ClassProfile name={"First"}/>
               
               
                {/* <ClassProfile name={"Second"}/> */}
            </div>
        );

    }
}

//Here when we Pass two ClassProfile the console show different because 
//React lifecycle sees 2 ClassProfile are passed so it render them both before Updating the dom because 
//Rendering is done very fast as compare to DOM manipulation.


//console
/**
 * Parent Constructor
 * Parent Render
 * Fisrt Child Constructor
 * First Child Render
 * Second Child Constructor
 * Second Child Render
 * First Child Didmount
 * Second Child Didmount
 * Parent DidMount
 * 
 */
export default About;



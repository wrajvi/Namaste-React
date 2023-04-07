import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ClassProfile from "./ProfileClass";
import React from "react";
import UserContext from "../../utils/UserContext";
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
                 {/* IN class component we dont have hook then we cant use useContext hook here.
                 For Using UserContext we should use it as a Component as <UserContext.Consumer></UserContext.Consumer> */}
                {/* The <UseContext.Consumer/>
                    have a callback function from there we can use user.name and other data 
                 */}
               
              
                <h1>About us</h1>
                <UserContext.Consumer>
                {({user})=><h1>{user.name}</h1>}
                 </UserContext.Consumer>
                <Profile name={"RAJEEV"} />
                <ClassProfile name={"First"}/>
            </div>
        );

    }
}


export default About;



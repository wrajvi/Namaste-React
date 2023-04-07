import { useEffect } from "react";

const Profile =(props) =>{
    useEffect(
        ()=>{
           console.log("useEffect");
           return ()=>{
            console.log("useEffect REturns");
           }
           

        },[]
    );
    console.log("profile-render");
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>You Are IN Profile</h1>
        </div>
    );
}
export default Profile;
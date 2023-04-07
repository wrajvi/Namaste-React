import React from "react";

class Profile extends React.Component{
   
    constructor(props){
        console.log("childCOnstructor");
        super(props);
     
        this.state = {
            userinfo : {
                name:"DUMMY NAME",
                login:"DUMMY"
                 
            },  
        };
    

        }
        

    async componentDidMount() {
        const data = await fetch(" https://api.github.com/users/wrajvi");
        const json = await data.json();
        console.log(json);
        this.setState({
                userinfo: json,
            }
        );
   
        console.log(this.props.name+" Child DIDMOUNT");
    }


    componentDidUpdate(){
        console.log("DidUPDATE");
    }
    componentWillUnmount() {
        console.log("UNMOUNT");
    }

    
    render(){
        console.log(this.props.name+" Child RENDER");
       
        return (
        <>
            <h1>{this.state.userinfo.name}</h1>
            <h3>{this.state.userinfo.login}</h3>
            <img className="rounded-3xl shadow-sm"  alt="img" src={this.state.userinfo.avatar_url}/>
            <h1>Class Profile</h1>
            <h2>Again IN Class</h2> 
            
        
       </>

        );
    }
    
}



// class Profile extends React.Component{
//     constructor(props){
//         super(props);
//         this.timer = setInterval(()=>{
//             console.log("In INTERVAL");
//         },1000)

//         // IT will console even we left the About So we need to stop it while unmounting.
//         //so we have to clean it in Unmount.
//     }
//     componentWillUnmount(){
//     console.log("unmount");
//       clearInterval(this.timer);
//     }
//     render(){
//         console.log("render");
//         return(
//             <>
//                 <h1>Class Component</h1>
//             </>
//         );

//     }
// }
export default Profile;
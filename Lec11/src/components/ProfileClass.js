import React from "react";


// CREATING A CLASS
// class Profile extends React.Component{
//     render(){
//         return (
//         <div>
//             <h1>Class Profile</h1>
//             <h2>Again IN Class</h2>
//         </div>
//         );
//     }
// }

// class Profile extends React.Component{
//     constructor(props){
//         super(props);
//         console.log(this.props.name+" Child CONSTRUCTOR" ) //It will be printed only once as in ReactLifecycle it will be called in Mounting.
//         //Not in Rendering.



//         // console.log(props);
          
//            this.state={
//             count:10,
//             count2: 20,
//            }
    
//         }
//     async componentDidMount() {
//    
//     }
    
//     render(){
//         console.log(this.props.name+" Child RENDER");
//         // console.log(this);
//         return (
//         <>
//             <h1>{this.state.count}</h1>
//             <h1>Class Profile</h1>
//             <h2>Again {this.props.name} IN Class</h2> 
//              <p>{this.state.count2}</p>
//              {/* //We dont MUTATE the state  Directly.
//              //Never DO this.state=something */}

//              <button onClick={
//                 ()=>{
//                     this.setState({
//                         count2:400,
//                     });
//                 }
//              }>Count2</button>
//        </>

//         );
//     }
    
// }






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
        // console.log(json);
        this.setState({
                userinfo: json,
            }
        );
   
        console.log(this.props.name+" Child DIDMOUNT");
    }
    // componentDidMount(){
    //     console.log("NORMALDIDMOUNT");
    // }

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
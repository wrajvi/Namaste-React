import { useEffect, useState } from "react";

const useOnline = () =>{
      const [isonline,setIsonline]=useState(true);


    // useEffect( () =>{
    //     window.addEventListener("online", () =>{
    //            setIsonline(true);
    //     })
    //     window.addEventListener("offline", () =>{
    //            setIsonline(false);
    //     })

    // },[]);
    useEffect( () =>{
        const handleonline=()=>{
             setIsonline(true);
        };
        const handleoffline=()=>{
            setIsonline(false);
       };
        window.addEventListener("online",handleonline);
        window.addEventListener("offline",handleoffline);
        
        return () =>{
            window.removeEventListener("online",handleonline);
            window.removeEventListener("offline",handleoffline);
        };
    },[]);
    return isonline;
}
export default useOnline;

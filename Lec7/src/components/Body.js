import { restaurantList } from '../constants';
import RestaurantCard from './RestaurantCard';
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer"





function filterData(searchText,restaurant){
  const data=restaurant.filter((res)=>{
    return res?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
  })
  return data;
}

const Body = () => {
  
    const [searchText,setSearchText] = useState("KFC");
   
    // const [restaurant,setRestaurant]=useState([]);
    const [allrestaurant,setAllrestaurant]=useState([]);
    const [filteredrestaurant,setFilteredrestaurant]=useState([]);

    // for fetching the API we are directly not using Here
    //fetch();
    //Because it will call API everytime when the component get rener

    //We use A hook --> useEffect
    //useEffect --> useEffect(function,dependecy array)

    //It will call first on intial render and everytime on chnges in searchText
    // useEffect(()=>{
    //   console.log("render")
    // },[searchText]
    // );

    //Only once initial render
    // useEffect(()=>{
    //   console.log("render")
    // },[]
    // );

    //On every render
    // useEffect(()=>{
    //   console.log("render")
    // },
    // );

    useEffect(()=>{
      getrestaurant();
    },[]);

    async function getrestaurant(){
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.915389606436783&lng=80.94339955598116&page_type=DESKTOP_WEB_LISTING");
      const json= await data.json();
      // console.log(json);
      setAllrestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredrestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }

    // if(allrestaurant.length==0)
    // return (<h1>Oops Not Found</h1>);
    // if(filteredrestaurant.length==0)
    //    return <h1>Look for something ELSE!!</h1>

    return allrestaurant.length===0? <Shimmer/>:
    (
        <>
          <div className="search-container">
          <input type="text"
           placeholder="Search"
           className="search-input"
           value={searchText}

           onChange = {(e)=>{
            setSearchText(e.target.value);
           }}
           />
          <button  className="search-btn" 
           onClick={
            ()=>{
              const data=filterData(searchText,allrestaurant);
              // setRestaurant(data);
                 setFilteredrestaurant(data);
            }
           }
           >Search</button>
          </div>
          
          <div className="restaurantlist">
            {
              filteredrestaurant.length===0?setFilteredrestaurant(allrestaurant):(
              filteredrestaurant.map((restaurant) =>{
              return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
              }))
            } 
          </div>
        </>
          
     );
        }
export default Body;
import { restaurantList } from '../constants';
import RestaurantCard from './RestaurantCard';
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";






function filterData(searchText,restaurant){
  const data=restaurant.filter((res)=>{
    return res?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
  })
  return data;
}

const Body = () => {
  
    const [searchText,setSearchText] = useState("KFC");
   
    
    const [allrestaurant,setAllrestaurant]=useState([]);
    const [filteredrestaurant,setFilteredrestaurant]=useState([]);

   
    useEffect(()=>{
      getrestaurant();
    },[]);

    async function getrestaurant(){
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.915389606436783&lng=80.94339955598116&page_type=DESKTOP_WEB_LISTING");
      const json= await data.json();
      setAllrestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredrestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }


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
                 setFilteredrestaurant(data);
            }
           }
           >Search</button>
          </div>
          
          <div className="restaurantlist">
            {
              filteredrestaurant.length===0?setFilteredrestaurant(allrestaurant):(
              filteredrestaurant.map((restaurant) =>{
              return <Link to={"/restaurant/"+ restaurant.data.id } key={restaurant.data.id}><RestaurantCard {...restaurant.data} /></Link>
              }))
            } 
          </div>
        </>
          
     );
        }
export default Body;
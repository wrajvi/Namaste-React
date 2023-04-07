import { restaurantList } from '../constants';
import RestaurantCard from './RestaurantCard';
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from '../../utils/helper';
import useOnline from "../../utils/useOnline";





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

    // const offline=true;
    // if(offline){
    //   return <h1>Please Check Your Connection</h1>;
    // }

      const isOnline=useOnline();
      if(!isOnline)
      {
        return <h1>🛑Please Check Your Internet Connection</h1>;
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
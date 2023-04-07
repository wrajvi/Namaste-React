import { restaurantList } from '../constants';
import RestaurantCard from './RestaurantCard';
import {useState} from "react";





function filterData(searchText,restaurant){
  const data=restaurant.filter((res)=>{
    return res.data.name.includes(searchText);
  })
  return data;
}
//What is state

//What is hook
// Hooks are functions that let you “hook into” React state and lifecycle features from function components.
//What is useState
//It is a hook
//useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
//const [variablename, functiontoUpdate]=useState("INITIAL VALUE TO Variable").
const Body = () => {
    // let searchText="KFC";
    const [searchText,setSearchText] = useState("KFC");
    // const [searchclick,setSearchclick]=useState("false");
    const [restaurant,setRestaurant]=useState(restaurantList);
    const [allrestaurant,setAllrestaurant]=useState([]);
    const [filteredrestaurant,setFilteredrestaurant]=useState([]);

    console.log("render");
    console.log(searchText);
    //Each time the searchText changes the whole component will get render again
    //and update the searhcText
    return (
        <>
          <div className="search-container">
          <input type="text"
           placeholder="Search"
           className="search-input"
           value={searchText}
        //    onChange={(e)=> console.log(e.target.value)}
        //    onChange = {(e)=>{
        //     searchText=e.target.value;
        //    }}
           //Here it will not change the value because searchText is a local variable
           //If we want a variable which maintains its state also the we create a 
           //react local state variable OR hook(useState).
           //React will Track all the react variable.

           onChange = {(e)=>{
            // searchText=e.target.value;
            //for updating value it doesn't work 
            setSearchText(e.target.value);
           }}

//An onChange event handler returns a Synthetic Event object which contains useful meta data such as the target input’s id, name, and current value.
// We can access the target input’s value inside of the handleChange by accessing e.target.value. Therefore, to log the name of the input field, we can log e.target.name.


            />
          {/* //This doesn't let you to type inside but IT WILL WORK IN index.html because it is controlled BY react. */}
         
         
         
          {/* <h1>{searchclick}</h1> */}
         
         
          <button className="search-btn" 
            // onClick={()=>{ if(searchclick==="false")
            // setSearchclick("true");
            // else
            // setSearchclick("false");
            
           // }}

           onClick={
            ()=>{
              const data=filterData(searchText,restaurant);
              setRestaurant(data);
            }
           }
           >Search</button>
          </div>
          
          <div className="restaurantlist">
            {
              restaurant.map((restaurant) =>{
              return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
              })
            }
          </div>
        </>
          
     );
        }
export default Body;
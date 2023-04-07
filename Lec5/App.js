import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
<img  className="logo" alt="logo" src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"/>
);

const HeaderComponent=() => {
    return (
        <div className="header"> 
            <Title />
            <div className="header-home">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    );
}

//INLINE CSS
// const obj={
//     backgroundColor:"yellow",
// };
// const Inlinecss =() =>(
//     // <div style={obj}>
//     //     <h1>INLINE CSS</h1>
//     //     <h2>INLINE CSS2</h2>
//     // </div>
//     <div style={{
//         backgroundColor:"yellow"
//     }}>
//         <h1>INLINE CSS</h1>
//         <h2>INLINE CSS2</h2>
//     </div>
// );




const kfc={
    name: "KFC",
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ssn5pq9ry4sjkv7iy3va",
    cuisines:["Pizza","Bakery"],
    rating:"4.5",
};

// const RestaurantCard = () => {
// return (
//     <div className="card">
//     <img alt="img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ssn5pq9ry4sjkv7iy3va"/>
//     <h3>KFC</h3>
//     <h4>Pizza, Bakery</h4>
//     <h4>4.5stars</h4>
//     </div>
// );
// };

const restaurantList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "74453",
        name: "Domino's Pizza",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        
        cloudinaryImageId: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        slaString: "45 MINS",
        lastMileTravel: 0,
        slugs: {
          restaurant: "dominos-pizza-majura-nondh-test_surat",
          city: "surat",
        },
        cityState: "21",
        address:
          "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
        locality: "Bhatar Road",
        parentId: 2456,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "74453",
          deliveryTime: 45,
          minDeliveryTime: 45,
          maxDeliveryTime: 45,
          lastMileTravel: 0,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "410476",
        name: "The Brooklyn Creamery - Healthy Ice Cream",
        uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
        city: "21",
        area: "althan bhatar",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ldtibwymvzehvmdwl8la",
        cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        slaString: "30-40 MINS",
        lastMileTravel: 6.300000190734863,
        slugs: {
          restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
          city: "surat",
        },
        cityState: "21",
        address:
          "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
        locality: "Adajan FC",
        parentId: 236673,
        unserviceable: true,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "410476",
          deliveryTime: 31,
          minDeliveryTime: 30,
          maxDeliveryTime: 40,
          lastMileTravel: 6.300000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE_WITH_BANNER",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.4",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "81094",
        name: "Richie Rich Juices & Shakes",
        uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
        city: "21",
        area: "Athwa",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nyp7yrzwc1dc2xqfkydk",
        cuisines: ["Ice Cream"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        slaString: "30-40 MINS",
        lastMileTravel: 5.599999904632568,
        slugs: {
          restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
          city: "surat",
        },
        cityState: "21",
        address:
          "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
        locality: "Parle Point",
        parentId: 771,
        unserviceable: true,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "81094",
          deliveryTime: 30,
          minDeliveryTime: 30,
          maxDeliveryTime: 40,
          lastMileTravel: 5.599999904632568,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE_WITH_BANNER",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "311443",
        name: "Siddhi Icecream & Thick Shake",
        uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
        city: "21",
        area: "Nanpura",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/spd3y5gok3vvwqulgmda",
        cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        slaString: "25-35 MINS",
        lastMileTravel: 3,
        slugs: {
          restaurant: "siddhi-icecream-athwa-athwa",
          city: "surat",
        },
        cityState: "21",
        address:
          "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
        locality: "Athwa",
        parentId: 387846,
        unserviceable: true,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "311443",
          deliveryTime: 30,
          minDeliveryTime: 25,
          maxDeliveryTime: 35,
          lastMileTravel: 3,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE_WITH_BANNER",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.5",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "307070",
        name: "Pizza Pie",
        uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
        city: "21",
        area: "Nanpura",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bvr70adr30ejyr5ua79k",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 37,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        slaString: "35-45 MINS",
        lastMileTravel: 4,
        slugs: {
          restaurant: "pizza-pie-athwa-athwa",
          city: "surat",
        },
        cityState: "21",
        address:
          "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
        locality: "Nanpura",
        parentId: 158854,
        unserviceable: true,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4 kms",
        hasSurge: false,
        sla: {
          restaurantId: "307070",
          deliveryTime: 37,
          minDeliveryTime: 35,
          maxDeliveryTime: 45,
          lastMileTravel: 4,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE_WITH_BANNER",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.2",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "76858",
        name: "Feeling Hungry",
        uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/oxsb5mr1xsmhnxhunjsc",
        cuisines: ["Chinese", "North Indian", "Biryani"],
        tags: [],
        costForTwo: 2000,
        costForTwoString: "₹20 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        slaString: "30-40 MINS",
        lastMileTravel: 3.700000047683716,
        slugs: {
          restaurant: "feeling-hungry-adajan-gam-adajan",
          city: "surat",
        },
        cityState: "21",
        address:
          "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
        locality: "Royal Residency, Adajan Gam",
        parentId: 79237,
        unserviceable: true,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "3.7 kms",
        hasSurge: false,
        sla: {
          restaurantId: "76858",
          deliveryTime: 35,
          minDeliveryTime: 30,
          maxDeliveryTime: 40,
          lastMileTravel: 3.700000047683716,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE_WITH_BANNER",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.2",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    }
  ];
//Naive Approach
// const RestaurantCard = () => {
// return ( 
//     <React.Fragment>
//     <div className="card">
//     {/* {console.log(restaurantList[0].data)} */}
//     <img alt="img" src={restaurantList[0].data.cloudinaryImageId}/>
//     <h3>{restaurantList[0].data.name}</h3>
//     <h4>{restaurantList[0].data.cuisines.join(", ")}</h4>
//     <h4>{restaurantList[0].data.lastMileTravel}</h4> 
//     </div>

//     <div className="card">
//     <img alt="img" src={restaurantList[1].data.cloudinaryImageId}></img>
//     <h3>{restaurantList[1].data.name}</h3>
//     <h4>{restaurantList[1].data.cuisines.join(", ")}</h4>
//     <h4>{restaurantList[1].data.lastMileTravel}</h4> 
//     </div>

//     <div className="card">
//     <img alt="img" src={restaurantList[2].data.cloudinaryImageId}></img>
//     <h3>{restaurantList[2].data.name}</h3>
//     <h4>{restaurantList[2].data.cuisines.join(", ")}</h4>
//     <h4>{restaurantList[2].data.lastMileTravel}</h4> 
//     </div>

//     <div className="card">
//     <img alt="img" src={restaurantList[3].data.cloudinaryImageId}></img>
//     <h3>{restaurantList[3].data.name}</h3>
//     <h4>{restaurantList[3].data.cuisines.join(", ")}</h4>
//     <h4>{restaurantList[3].data.lastMileTravel}</h4> 
//     </div>

//     <div className="card">
//     <img alt="img" src={restaurantList[4].data.cloudinaryImageId}></img>
//     <h3>{restaurantList[4].data.name}</h3>
//     <h4>{restaurantList[4].data.cuisines.join(", ")}</h4>
//     <h4>{restaurantList[4].data.lastMileTravel}</h4> 
//     </div>
//     <div className="card">
//     <img alt="img" src={restaurantList[5].data.cloudinaryImageId}></img>
//     <h3>{restaurantList[5].data.name}</h3>
//     <h4>{restaurantList[5].data.cuisines.join(", ")}</h4>
//     <h4>{restaurantList[5].data.lastMileTravel}</h4> 
//     </div> 

//     </React.Fragment> 
//     );
// };

//Using Props-Properties
//Basically props are like passing a argument in function
// const RestaurantCard = (props) => {
//     // console.log(props);
//     return (
//         <div className="card">
//         <img alt="img" src={props.restaurant.data.cloudinaryImageId}/>
//         <h3>{props.restaurant.data.name}</h3>
//         <h4>{props.restaurant.data.cuisines.join(", ")}</h4>
//         <h4>{props.restaurant.data.lastMileTravel}</h4> 
//         </div>
//     );
// }
// const Body=()=>(
//     <div className="restaurantlist">
//         {/* {RestaurantCard (restaurantList[0])} */}
//         <RestaurantCard restaurant={restaurantList[0]} />
//         <RestaurantCard restaurant={restaurantList[1]} />
//         <RestaurantCard restaurant={restaurantList[2]} />
//         <RestaurantCard restaurant={restaurantList[3]} />
//         <RestaurantCard restaurant={restaurantList[4]} />
//         <RestaurantCard restaurant={restaurantList[5]} /> 
//         <h1>Body</h1>
//     </div>
//  );

//Using map
// const Body=()=>{
//     return (<div className="restaurantlist">
//        {
//          restaurantList.map((obj) => {
//          return <RestaurantCard restaurant={obj} /> }
//          )
        
//        }
//         <h1>Body</h1>
//     </div>);
// };

// Playing With Code
// const RestaurantCard=(props1,props2) =>{
//   console.log(props1);
//   console.log(props2);
//   //All things will come inside props1 only and props2 will be NULL object.
// return (
  
//   <div><h1>{props1.fame}</h1><img src={props1.i} /></div>
// );
// };

// const RestaurantCard=({restaurant}) =>{
// const {name,cloudinaryImageId}=restaurant;
// return (
  
//   <div>
//   <h1>{name}</h1>
//   <img src={cloudinaryImageId} />
//   </div>
// );
// };

// const Body = () => {
// return (
//       <RestaurantCard restaurant={restaurantList[0].data}/>
//  );
// };

const RestaurantCard=({name,cloudinaryImageId,cuisines,lastMileTravelString}
  ) =>{
  return (
    
    <div className="card">
    <img alt="img" src={cloudinaryImageId}/>
    <h2>{name}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <h4>{lastMileTravelString}</h4>
    </div>
  );
  };
  
  // const Body = () => {
  // return (
  //       <>
  //         <RestaurantCard {...restaurantList[0].data}/>
  //       </>
        
  //  );
  // };

  const Body = () => {
    return (
          <div className="restaurantlist">
            {
              restaurantList.map((restaurant) =>{
              return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
              })
            }
          </div>
          
     );
    };

// const AppLayout = () => 
// { return(
//             <HeaderComponent/>
//             <Body/>
//     );
// };

// React.Fragment
// The Above code will give error because it tell the jsx should have only one parent
// React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. To return multiple elements from a React component, you'll need to wrap the element in a root element.
//Basically it is also a component.

//Methods of React.Fragment
//<React.Fragment></React.Fragment>
//<></>

// const AppLayout = () => 
// { return(
//     <React.Fragment>
//     <HeaderComponent/>
//     <Body/>
//     </React.Fragment>        
//     );
// };







const Footer= () =>(
    <div>
        <h1>Footer</h1>
    </div>
);

const AppLayout = () => 
{ return(
<>
    <HeaderComponent/>
    <Body/>
    <Footer/>
</>        
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
// root.render(<Inlinecss></Inlinecss>);
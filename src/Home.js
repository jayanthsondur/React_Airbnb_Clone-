import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner /> 

      <div className="home__Section">
      <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
                price=" ₹ 1563/ night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
                price=" ₹ 1999/ night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
                price=" ₹ 1899/ night"
            />
      </div>

      <div className="home__Section">
        {/* <Card 
        src="https://a0.muscache.com/im/pictures/a1166e83-603a-49ae-be38-60d130a31133.jpg?im_w=480"
        title="HouseBoat In Dal Lake"
        description="This is a houseboat. we are providing 1 private rooom and in that we have.."/>
        <Card 
        src="https://a0.muscache.com/im/pictures/60b6fadc-c6d5-43b1-918f-67790f3fbc50.jpg?im_w=480"
        title="STUNNING View of River & Golf"
        description="Luxurious Riverside Golf Resort Lifestyle at our home on the HIGHEST FLOOR"/>
        <Card
        src="https://a0.muscache.com/im/pictures/9045f2d6-c285-482e-a79c-6ec9621aa0f2.jpg?im_w=480"
        title="Beach Bungalow Near Mangalore"
        description="A peaceful place, where you can enjoy." /> */}
         <Card
          src="https://a0.muscache.com/im/pictures/97b16670-2e50-49eb-9c96-e8ba6456e1da.jpg?im_w=480"
          title="Cozy  by the Breeze( Off Carter Road)"
          description="this beach house has been elegantly designed and is located on the beach."
          price=" ₹ 999/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/9a2a24fc-d3ec-4d23-aecf-940858a769a2.jpg?im_w=480"
          title="kishore's safe and neat place."
          description="If you're looking for a place to kick back and relax, your destination has arrived!"
          price=" ₹ 1100/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/e22cb5a9-e8ba-4238-a1bd-56796da7f4dd.jpg?im_w=480"
          title="UVs Homestay Haridwar"
          description="Live rural life in Apple orchard high up above Naggar town! 
          The life here is tough.."
          price=" ₹ 1170/ night"
        /> 
         
      </div>

      {/* <div className="home__Section">
        <Card 
        src="https://a0.muscache.com/im/pictures/4c73d84e-0745-4644-b6b4-fbd496814f85.jpg?im_w=720"
        title="Private room Delhi" 
        description="Deluxe Suite rooms with best vibes in room.."/>

        <Card
        src="https://a0.muscache.com/im/pictures/2d61b351-2e2c-4913-8593-b79ffb7cb81c.jpg?im_w=720"
        title="Entire house:Mumbai"
        description="Modren & Cozy studio| Private entrence" />
        
        <Card
        src="https://a0.muscache.com/im/pictures/0b00fd12-8719-4d6d-9643-e50ed4896ab2.jpg?im_w=720"
        title="Entire apartment:Banglore"
        description="Cloud villa 2BHK Studio, sitout ..." />
      </div> */}
          <div className='home__Section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="₹ 1130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="₹ 1350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="₹ 1470/night"
            />
            </div>
    </div>
  );
}

export default Home;

import React from "react";
import Banner from "./Banner";
import Card from "./Card.js";
import "./Home.css";

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
                <Card
                    src='https://images.unsplash.com/photo-1571931236722-e7f6fa956d6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhcm5pdmFsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                    title='Online Experiences'
                    description='Unique activities we can do together, led by a world of hosts.'
                />
                <Card
                    src='https://images.unsplash.com/photo-1630700619765-ae2f6eae16df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlbnR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    title='Unique Stays'
                    description='Spaces that are more than just a place to sleep.'
                />
                <Card
                    src='https://images.unsplash.com/photo-1587094313669-faf7668ed8a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    title='Entire Homes'
                    description='Comfortable private places with room for friends and family.'
                />
            </div>
            <div className='home__section'>
                <Card
                    src='https://images.unsplash.com/photo-1594099462046-1df31fd4a66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
                    title='3 Bedroom Flat in Bournemouth'
                    description='Superhost with a stunning view of the beachsside in Sunny Bournemouth'
                    price='$130/night'
                />
                <Card
                    src='https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
                    title='Penthouse in London'
                    description='Enjoy the amazing sights of London with this stunning penthouse'
                    price='$350/night'
                />
                <Card
                    src='https://images.unsplash.com/photo-1577349516265-7a186d31bd02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
                    title='1 Bedroom apartment'
                    description='Superhost with great amenities and a fabulous shopping experience.'
                    price='$90/night'
                />
            </div>
        </div>
    );
}

export default Home;

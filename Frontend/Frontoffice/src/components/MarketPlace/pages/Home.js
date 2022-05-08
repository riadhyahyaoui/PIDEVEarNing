import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Navbar2 from "../../Navbar/Navbar";

const Home = () => {
    return (
        <div>
    <Navbar2/>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products/>
            <Newsletter/>
        </div>
    );
};

export default Home;
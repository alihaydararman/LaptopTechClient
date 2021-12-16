import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import BannerFooter from "../BannerFooter/BannerFooter";
import Email from "../Contact/Email";
import Footer from "../Footer/Footer";
import FutureProducts from "../futureProducts/FutureProducts";
import Products from "../Products/Products";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Navigation> </Navigation>
      <Banner></Banner>
      <BannerFooter></BannerFooter>
      <Products></Products>
      <FutureProducts></FutureProducts>
      <Email></Email>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;

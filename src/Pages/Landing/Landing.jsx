import React from "react";
import CarouselEffect from "../../Components/Carousel/CarouselEffect";
import Category from "../../Components/Categorys/Category";
import Product from "../../Components/Products/Product";
import LayOut from "../../Components/Layouts/LayOut";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;

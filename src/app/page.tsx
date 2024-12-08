import DiscountItem from "@/Components/DiscountItem";

import GetUpdate from "@/Components/GetUpdate";
import LatestBlog from "@/Components/LatestBlogs";
import Logos from "@/Components/Logos";

import ProductList from "@/Components/ProductList";
import Products from "@/Components/Products";
import SupportSection from "@/Components/SupportSection";
import TopCategories from "@/Components/TopCategories";
import TrendingProducts from "@/Components/TrendingProducts";
import TrendingProducts2 from "@/Components/TrendingProducts2";



import Hero from "@/Components/Hero";
import UniqueFeatures from "@/Components/UniqueFeatures";

export default function Home() {
  return (
    <div className="overflow-hidden">
       
        <Hero/>
        <Products/>
        <ProductList/>
        <SupportSection/>
        <UniqueFeatures/>
        <TrendingProducts/>
        <TrendingProducts2/>
        <DiscountItem/>
        <TopCategories/>
       
        <GetUpdate/>
        <Logos/>
        <LatestBlog/>
        
    </div>
  );
}

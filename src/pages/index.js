import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import LogoClouds from "../components/logoClouds";
import Services from "../components/services";
import Works from "../components/works";
import About from "../components/about";
import BannerSection from "../components/banner";
import FoodSection from "../components/foodSection";
import MenuSection from "../components/menu";
import ContactPage from "../components/contact";

const IndexPage = () => (
  <Layout>
    <Seo />
    <BannerSection />
    <FoodSection />
    <MenuSection />
    {/* <Works /> */}
    <Services />
    {/* <ContactPage /> */}
    {/* <LogoClouds /> */}
    {/* <About /> */}
  </Layout>
);

export default IndexPage;

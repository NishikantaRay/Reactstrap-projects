import React from 'react';
import AppDownload from './components/AppDownload';
import Banner from './components/Banner';
import Category from './components/Category';
import Clientssection from './components/Clientssection';
import FeaturedAds from './components/FeaturedAds';
import NewsSection from './components/NewsSection';
import PopularAds from './components/PopularAds';
import PricingTable from './components/PricingTable';
import SubscribeSection from './components/SubscribeSection';
import Testimonial from './components/Testimonial';
import Topplaces from './components/Topplaces';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
function App() {
  return (
    <div className="App">
      
        
      <Navbar/>
      <Banner/>
      <Category/>
      <PopularAds/>
      <Testimonial/>
      <FeaturedAds/>
      <Clientssection/>
      <Topplaces/>
      <PricingTable/>
      <AppDownload/>
      <NewsSection/>
      <SubscribeSection/>
      <Footer/>
     
      
      
      
     
    </div>
  );
}

export default App;

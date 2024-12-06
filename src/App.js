import React from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Categories from './Components/Categories';
import Sale from './Components/Sale';
import Collection from './Components/Collection';
import Bestseller from './Components/Bestseller';
import MenuCard from './Components/menu-card';
import ProductList from './Components/ProductList';
import PageType from './Components/PageType';
import './App.css';
import SortBy from './Components/SortBy';
import AboutUs from './Components/about-us';
import Footer from './Components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <Sale />
      <Collection />
      <Bestseller/>
      <PageType  />
      <SortBy />
      <div className='pg-two'>
        <MenuCard  />
        <ProductList />
      </div>
     <Footer />
    </div>
  );
}

export default App;


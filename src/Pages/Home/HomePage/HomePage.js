import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import ReviewsPage from '../ReviewsPage/ReviewsPage';

const HomePage = () => {
    return (
      <>
       <Banner></Banner>
       <Products></Products>
       <Contact></Contact>
       <ReviewsPage></ReviewsPage>
       <Footer></Footer>
      </>
    );
};

export default HomePage;
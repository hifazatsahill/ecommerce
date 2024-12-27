import React from 'react'
import Home from './Home/page'
import About from '@/app/About/page'
import Detail from './Detail/page';
import Login from './Login';
import JoinUs from './JoinUs';
import Contact from './Contact/page';
import Cart from './Cart/page';
import Checkout from './Checkout/page';

const page = () => {
  return (
    <div>
      <Home />
     
      <About />

      <Detail />

      <Login />

      <JoinUs />

      <Contact />

      <Cart />

      <Checkout />

    </div>


  );
}

export default page
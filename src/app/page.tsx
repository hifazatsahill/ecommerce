import React from 'react'
import Home from './Home/page'
import About from '@/app/About/page'
import Detail from './Detail';
import Login from './Login';
import JoinUs from './JoinUs';
import Contact from './Contact';
import Cart from './Cart';
import Checkout from './Checkout';

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
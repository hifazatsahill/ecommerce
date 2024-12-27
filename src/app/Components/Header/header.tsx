import React from 'react'
import Image from 'next/image'
import Frame from "../../../../public/Frame.png"
import Link from 'next/link'
import { FaRegHeart } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";


const header = () => {
  return (
    <header className='max-w-screen-2xl mx-auto'>
      <div className='flex justify-between bg-slate-400'>
      <div className='flex'>
            <Image src={Frame} width={24} height={24} alt="Frame"/>
        </div>
        <ul className='flex justify-between space-x-4'>
            <li><Link href="/">Find Store |</Link></li>
            <li><Link href="/help">Help |</Link></li>
            <li><Link href="/join">Join Us |</Link></li>
            <li><Link href="/sign">Sign In</Link></li>
        </ul>
      </div>
            <div className='flex justify-between  bg-slate-300'>
              <div className='flex justify-between'>
                <img src="Frame (1).png"width={78}height={78} alt="Nike" />
              </div>
              <div className='flex justify-between py-6'>
              <ul className="flex justify-between space-x-4 text-xl font-bold">
                  <li><Link href="/new">New & Feature</Link></li>
                  <li><Link href="/men">Men</Link></li>
                  <li><Link href="/women">Women</Link></li>
                  <li><Link href="/kids">Kids</Link></li>
                  <li><Link href="/sale">Sale</Link></li>
                  <li><Link href="/snaker">SNAKER</Link></li>
                </ul>
              </div>
                <div className='flex justify-between space-x-4 px-4 py-6 rounded-full'>
                  <input className='search' type="text" placeholder="Search Here" />
                  < FaRegHeart className="heart_icon"/>
                  < FaCartFlatbed className="cart_icon "/>
                </div>
                
            </div>
    </header>
  );
}

export default header
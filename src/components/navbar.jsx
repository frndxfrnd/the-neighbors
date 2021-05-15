import '@compiled/react'
import 'twin.macro'
import { useHistory } from 'react-router-dom'
import logo from '@/assets/logo.png'

import React from 'react';

function Scroll() {
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
  };

function ScrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default (props) => {
  const history = useHistory()

  return (
    <nav tw='w-full flex flex-row justify-between p-2 bg-b rounded-b-lg px-10 py-3'>
      <div tw='w-12'>
        <img src={logo} alt='LOGO' />
      </div>

      {/* <div  /> */}
      <div tw='flex flex-row gap-x-4 items-center text-sm font-sans'>
        <button onClick={Scroll}>About us</button>
        <button onClick={ScrollTop}>Home</button>
        <button onClick={Scroll}>Contact us</button>
        <button onClick={() => history.push('/Login')} tw='px-5 py-2  rounded-full shadow-lg font-semibold text-yellow-50 bg-a transform hover:bg-yellow-600 transition duration-500'>Login</button>
      </div>
    </nav>
  )
}

// pt p-8
// mx my-7 mt

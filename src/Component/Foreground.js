import React from 'react';
import Cards from './Cards';

const Foreground = () => {
  return (
    <div className='fixed z-20 h-screen w-full top-0 left-0 bg-black opacity-75'> 
        <Cards/>
    </div>
  );
}

export default Foreground;

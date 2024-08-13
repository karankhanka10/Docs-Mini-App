import React from 'react';
import Cards from './Cards';

const Foreground = () => {
  return (
    <div className='fixed z-20 h-screen w-full top-0 left-0 bg-black opacity-75'> 
        <div className='flex flex-wrap gap-x-80 p-2'>
            <Cards/>
            <Cards/>
        </div>
        <div className='flex flex-wrap gap-48'>
            <div className='flex flex-wrap gap-x-4'>
            <Cards/>
            <Cards/>
            <Cards/>
            </div>
            <div>
                <Cards/>
            </div>
        </div>
    </div>
  );
}

export default Foreground;

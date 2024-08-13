import React from 'react';

const Background = () => {
  return (
    <div className='fixed z-[2] h-screen w-full'> 
        <div className='bg-sky-50 absolute left-1/2 top-10'>ожидание</div>
        <h1 className='absolute top-1/2 left-1/2 font-bold -translate-x-[50%] -translate-y-[50%] text-[13vw]'>DOCS</h1>
    </div>
  );
}

export default Background;

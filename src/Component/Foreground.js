import React, { useRef } from 'react';
import Cards from './Cards';


const Foreground = () => {
    const ref = useRef(null);
  return (
    <div ref = {ref} className='fixed z-20 h-screen w-full top-0 left-0 bg-black bg-opacity-75'> 
        <div className='flex flex-wrap gap-x-80 p-2'>
            <Cards drag showFooter={true} isTag={true} reference = {ref}/>
            <Cards showFooter={false} isColor={true} isTag={true} reference = {ref}/>
        </div>
        <div className='flex flex-wrap gap-48 p-2'>
            <div className='flex flex-wrap gap-x-4'>
                <Cards showFooter={true} isTag={true} />
                <Cards showFooter={false} isColor={false} isTag={false} reference = {ref}/>
                <Cards showFooter={false} isColor={false} isTag={false} reference = {ref}/>
            </div>
            <div>
                <Cards showFooter={true} isTag={true} reference = {ref}/>
            </div>
        </div>
    </div>
  );
}

export default Foreground;
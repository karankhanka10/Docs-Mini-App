import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Slider  from './Slider';
import { motion } from "framer-motion"

const Cards = (props) => {
 

  return (
    <motion.div drag dragConstraints={props.reference} whileDrag={{scale:1.2}} className='relative w-40 h-56 bg-zinc-900/90 rounded-[30px] top-16 left-7 p-4 overflow-hidden'>
      <DescriptionIcon className='absolute text-white text-3xl top-5 left-3' />
      <h1 className='text-white text-[13px] mt-10'>
        После установки пакетов вы можете импортировать значки, которые 
      </h1>
      <div className='absolute bottom-0 w-full left-0'>
        {props.showFooter ? (
          <div className={`flex justify-between items-center bg-zinc-900/90 pr-7 pb-6 pl-4 ${props.isColor ? 'text-white' : 'text-white'}`}>
            <h1 className='text-[14px] '>
              5mb
            </h1>
            <DownloadForOfflineIcon/>
          </div>
        ) : (
          <>
            <div className={`flex justify-between items-center bg-zinc-900/90 pr-7 pb-6 pl-4 ${props.isColor ? 'text-green-500' : 'text-blue-500'}`}>
            <h1 className={`text-[14px] ${props.isColor ? 'text-green-500' : 'text-blue-500'}`}>
              5mb
            </h1>
              <DownloadForOfflineIcon className='text-white'/>
            </div>
            <div className={`h-9 ${props.isTag ? 'bg-green-600' : 'bg-blue-600'}`}>
                {props.isTag?(
                    <h1 className='flex justify-center text-[13px] p-1'>каранханка</h1>
                ):(<Slider/>)}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Slider  from './Slider';

const Cards = () => {
  const showFooter = false;
  const isColor = true;
  const isTag = true;

  return (
    <div className='relative w-40 h-56 bg-zinc-900/90 rounded-[30px] top-16 left-7 p-4 overflow-hidden'>
      <DescriptionIcon className='absolute text-white text-3xl top-5 left-3' />
      <h1 className='text-white text-[13px] mt-10'>
        После установки пакетов вы можете импортировать значки, которые хотите
      </h1>
      <div className='absolute bottom-0 w-full left-0'>
        {showFooter ? (
          <div className={`flex justify-between items-center bg-zinc-900/90 pr-7 pb-6 pl-4 ${isColor ? 'text-white' : 'text-white'}`}>
            <h1 className='text-[14px] '>
              5mb
            </h1>
            <DownloadForOfflineIcon/>
          </div>
        ) : (
          <>
            <div className={`flex justify-between items-center bg-zinc-900/90 pr-7 pb-6 pl-4 ${isColor ? 'text-green-500' : 'text-blue-500'}`}>
            <h1 className={`text-[14px] ${isColor ? 'text-green-500' : 'text-blue-500'}`}>
              5mb
            </h1>
              <DownloadForOfflineIcon className='text-white'/>
            </div>
            <div className={`h-9 ${isTag ? 'bg-green-600' : 'bg-blue-600'}`}>
                {isTag?(
                    <h1 className='flex justify-center text-[13px] p-1'>каранханка</h1>
                ):(<Slider/>)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cards;
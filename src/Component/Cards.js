import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const Cards = () => {
  return (
    <div className='relative w-48 h-60 bg-zinc-900/90 rounded-[30px] top-16 left-7 p-4 overflow-hidden'>
      <DescriptionIcon className='absolute text-white text-3xl top-5 left-3'  />
      <h1 className='text-white text-[13px] mt-10'> 
        После установки пакетов вы можете импортировать значки, которые хотите 
      </h1>
      <div className='flex justify-between text-white '>
        <h1>5mb</h1>
        <DownloadForOfflineIcon/>
      </div>
      <div className='absolute h-9 w-full bg-sky-50 bottom-0 left-0'>

      </div>
    </div>
  );
}

export default Cards;

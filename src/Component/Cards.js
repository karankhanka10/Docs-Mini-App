import React from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const Cards = () => {
    const showFooter = false;
  return (
    <div className='relative w-48 h-60 bg-zinc-900/90 rounded-[30px] top-16 left-7 p-4 overflow-hidden'>
      <DescriptionIcon className='absolute text-white text-3xl top-5 left-3'  />
      <h1 className='text-white text-[13px] mt-10'> 
        После установки пакетов вы можете импортировать значки, которые хотите 
      </h1>
      <div className='absolute bottom-0 w-full'>
        {showFooter ? (
          <div className='h-9 w-full bg-sky-50'></div>
        ) : (
          <div className='flex justify-between items-center bg-zinc-900/90 pr-9 pb-6'>
            <h1 className='text-white text-[14px]'>5mb</h1>
            <DownloadForOfflineIcon className='text-white' />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;

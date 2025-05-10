import React from 'react';
import Detail from './detail';

export default function Video() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex justify-center items-start w-full aspect-[9/16] bg-red-100 relative'>
        <div>영상</div>
        <div className=' w-full absolute bottom-0'>
          <Detail />
        </div>
      </div>
    </div>
  );
}

import React, { Suspense } from 'react';
import Detail from './band_detail';
import BackButton from './band_backButton';
import { Band } from '@/app/_common/interfaces/band-info.interface';
import ReactPlayer from 'react-player';

export default function Video({ url }: { url: string }) {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex justify-center items-start w-full aspect-[16/9] bg-red-100 relative'>
        <Suspense fallback={null}>
          <ReactPlayer url={url} controls preload='none' />
        </Suspense>
      </div>
    </div>
  );
}

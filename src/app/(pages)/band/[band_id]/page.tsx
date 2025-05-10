import React from 'react';
import Video from '@/app/(pages)/band/[band_id]/_components/band_video';
import Detail from '@/app/(pages)/band/[band_id]/_components/band_detail';
import Info from '@/app/(pages)/band/[band_id]/_components/band_info';
import BackButton from './_components/band_backButton';
import { BandFinalInfo } from '@/app/_common/interfaces/band-info.interface';
import { getBandFinalInfo } from '@/app/_common/apis/band-final-info';

export default function bandDetail() {
  return (
    <div>
      <div className='w-full h-full flex justify-center items-start flex-col gap-1 bg-[url("/images/main-background.jpg")]'>
        <div className='absolute top-0 z-1'>
          <BackButton />
        </div>
        <div className='w-full flex-1 flex-col'>
          <Video />
          <Detail />
        </div>
        <div className=' w-full aspect-[3/2] p-2'>
          <div className='w-full aspect-[3/2] bg-gray-200'>팀 사진</div>
        </div>
        <Info />
      </div>
    </div>
  );
}

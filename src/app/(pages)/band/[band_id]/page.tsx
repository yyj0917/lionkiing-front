import React from 'react';
import Video from '@/app/(pages)/band/[band_id]/_components/band_video';
import Detail from '@/app/(pages)/band/[band_id]/_components/band_detail';
import Info from '@/app/(pages)/band/[band_id]/_components/band_info';

export default function bandDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <div className='w-full h-full flex justify-center items-start flex-col gap-1'>
        <div className='w-full flex-1 flex-col'>
          <Video />
          <Detail />
        </div>
        <div className='w-full aspect-[3/2] bg-gray-200'>팀 사진</div>
        <Info />
      </div>
    </div>
  );
}

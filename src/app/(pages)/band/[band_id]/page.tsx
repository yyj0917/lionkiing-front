'use client';
import React, { useEffect, useState } from 'react';
import Video from '@/app/(pages)/band/[band_id]/_components/band_video';
import Detail from '@/app/(pages)/band/[band_id]/_components/band_detail';
import Info from '@/app/(pages)/band/[band_id]/_components/band_info';
import BackButton from './_components/band_backButton';
import {
  Band,
  BandFinalInfo,
} from '@/app/_common/interfaces/band-info.interface';
import { getBandFinalInfo } from '@/app/_common/apis/band-final-info';
import { useParams } from 'next/navigation';
import { getVideoDetailInfo } from '@/app/_common/apis/band-detail-info';
import { Video as IVideo } from '@/app/_common/interfaces/video.interface';
import dynamic from 'next/dynamic';

export default function bandDetail({ band }: { band: string }) {
  const [video, setVideo] = useState<IVideo & Omit<Band, 'videos'>>();
  const param: { band_id: string } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getVideoDetailInfo(param.band_id);
      setVideo(response);
    })();
  }, [param.band_id]);

  const ReactPlayer = dynamic(() => import('react-player'), {
    ssr: false, // 서버에선 빈 자리에 fallback(없음)만 찍힘
  });

  return (
    <div>
      <div className='w-full min-h-screen flex justify-center items-start flex-col gap-1 bg-[url("/images/main-background.jpg")]'>
        <div className='absolute top-0 z-1'>
          <BackButton />
        </div>
        <div className='w-full flex-1 flex-col'>
          <Video url={video?.url ?? ''} />
          <Detail
            song_description={video?.song_description ?? ''}
            band={video?.band.name ?? ''}
            album_cover={video?.album_cover ?? ''}
          />
        </div>
        <div className=' w-full aspect-[3/2] p-2'>
          <div>
            <img
              className='w-full aspect-[3/2] rounded-[5%]'
              src={video?.band.image ?? ''}
              alt='프로필'
            />
          </div>
        </div>
        <Info
          band={video?.band.description ?? ''}
          song_description={video?.song_description ?? ''}
        />
      </div>
    </div>
  );
}

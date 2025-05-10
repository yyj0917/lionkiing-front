import React from 'react';
import Detail from './band_detail';
import BackButton from './band_backButton';

export default function Video() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex justify-center items-start w-full aspect-[16/9] bg-red-100 relative'>
        <video
          className='w-full aspect-[16/9] shadow-md'
          controls
          preload='none'
        >
          <source src='/path/to/video.mp4' type='video/mp4' />
          <track
            src='/path/to/captions.vtt'
            kind='subtitles'
            srcLang='en'
            label='English'
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

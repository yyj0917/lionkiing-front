import React from 'react';

export default function Info({
  band,
  song_description,
}: {
  band: string;
  song_description: string;
}) {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex justify-center w-full h-24 p-8 bg-black-300/50 text-white'>
        {band}
        {song_description}
      </div>
    </div>
  );
}

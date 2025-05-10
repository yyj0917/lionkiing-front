'use client';

import Image from 'next/image';
import ReactPlayer from 'react-player';
import { Suspense } from 'react';
export default function ShortFormPage() {
  const mock_url = 'https://youtu.be/JaIMSzE5yLA?si=58zKdsHT_Jf6YjET&t=137';

  return (
    <div className='relative w-full h-full items-center'>
      <Image
        src='/images/preliminary-background.jpg'
        alt='preliminary-background'
        fill
        className='object-fill rounded-4xl'
      />
      <section className='relative min-w-full min-h-full flex items-center rounded-4xl'>
        <Suspense fallback={<div>Loading...</div>}>
          <ReactPlayer
            url={mock_url}
            controls
            style={{
              paddingRight: '20px',
              width: '100%',
              height: '100%',
              transform: 'rotate(90deg)',
            }}
          />
        </Suspense>
      </section>
    </div>
  );
}

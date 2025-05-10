import React from 'react';

export default function Detail() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex justify-center items-start w-full bg-gray-500/30'>
        <div className='flex-1'>
          {/* 상단 섹션 */}
          <div className='flex justify-between items-center p-3'>
            {/* 앨범커버 + 곡명 + 팀명 */}
            <div className='flex items-center gap-4'>
              <div className='w-16'>
                <img src='/img/cover.jpg' alt='앨범커버' />
              </div>
              <div className='flex flex-col justify-center'>
                <div className='text-l text-white'>Hello, Wonderland</div>
                <div className='text-m text-white'>Lacuna</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

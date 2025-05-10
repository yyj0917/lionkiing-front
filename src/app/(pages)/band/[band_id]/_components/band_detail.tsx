import React from 'react';

export default function Detail() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex justify-center items-start w-full bg-blue-300/30'>
        <div className='flex-1'>
          {/* 상단 섹션 */}
          <div className='flex justify-between items-center p-3'>
            {/* 앨범커버 + 곡명 + 팀명 */}
            <div className='flex items-center gap-4'>
              <div className='w-16'>
                <img src='/img/cover.jpg' alt='앨범커버' />
              </div>
              <div className='flex flex-col justify-center'>
                <div className='text-l'>Hello, Wonderland</div>
                <div className='text-m'>Lacuna</div>
              </div>
            </div>

            {/* 재생 버튼 */}
            <button className='w-16 h-16 rounded-full bg-black/30'>재생</button>
          </div>

          {/* 하단 재생바 */}
          <div>재생바</div>
        </div>
      </div>
    </div>
  );
}

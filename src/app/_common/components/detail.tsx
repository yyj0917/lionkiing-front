import React from 'react';

export default function Detail() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex justify-center items-start w-full bg-blue-300/30'>
        <div>
          <div className='flex-1 flex justify-between p-2 items-center flex-row '>
            <div className='flex-1 flex justify-left gap-4 items-center flex-row p-2'>
              <div className='w-24'>
                <img src='/img/cover.jpg' alt='앨범커버' />
              </div>

              <div>
                <div className='text-l'>Hello,Wonderland</div> {/*곡 명*/}
                <div className='text-m'>Lacuna</div> {/*팀 명*/}
              </div>
            </div>

            <button className='w-16 h-16 rounded-full bg-black/30'>재생</button>
          </div>

          <div>재생바</div>
        </div>
      </div>
    </div>
  );
}

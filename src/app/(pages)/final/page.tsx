'use client';

import { useState } from 'react';
import ArtistGrid from './final_components/ArtistGrid';
import PageHeader from './final_components/PageHeader';

const mockArtists = Array.from({ length: 12 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `이름 {id}`,
  image: '/image/dog.png', // 기본 이미지 설정
  score: 333,
}));

export default function Final() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleVote = (id: string) => {
    setSelectedId(id); // 모달을 띄우기 위해 선택한 id 저장
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  return (
    <div className='p-8'>
      <PageHeader title='본선진출' />
      <ArtistGrid artists={mockArtists} onVote={handleVote} />

      {selectedId && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded shadow-md text-center w-[700px] h-[500px] relative'>
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold'
            >
              ×
            </button>

            <p className='text-lg font-bold mb-4'>마일리지 배팅창</p>
            <p> 마일리지 배팅 어떻게 하면 되나요...</p>
          </div>
        </div>
      )}
    </div>
  );
}

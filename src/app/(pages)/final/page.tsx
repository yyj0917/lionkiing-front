'use client';

import { useState } from 'react';
import ArtistGrid from './_components/ArtistGrid';
import PageHeader from './_components/PageHeader';
import VoteModal from './_components/VoteModal';

const mockArtists = Array.from({ length: 12 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `이름 ${i + 1}`,
  image: '/image/dog.png', // 기본 이미지 설정
  score: 333,
}));

export default function Final() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [artists, setArtists] = useState(mockArtists);

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
        <VoteModal
          artistId='selectedId'
          onClose={closeModal}
          onVoteSuccess={newScore => {
            setArtists(prev =>
              prev.map(artist =>
                artist.id === selectedId
                  ? { ...artist, score: newScore }
                  : artist,
              ),
            );
            closeModal();
          }}
        />
      )}
    </div>
  );
}

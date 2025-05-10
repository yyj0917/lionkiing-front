'use client';

import { useState } from 'react';
import ArtistGrid from './_components/ArtistGrid';
import PageHeader from './_components/PageHeader';
import VoteModal from './_components/VoteModal';

const mockArtists = Array.from({ length: 12 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `이름 ${i + 1}`,
  image: '/image/dog.png',
  score: 0,
}));

export default function Final() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [artists, setArtists] = useState(mockArtists);
  const [votedIds, setVotedIds] = useState<string[]>([]);

  const handleVote = (id: string) => {
    setSelectedId(id);
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  return (
    <div className='p-8'>
      <PageHeader title='본선진출' />
      <ArtistGrid artists={artists} onVote={handleVote} votedIds={votedIds} />

      {selectedId && (
        <VoteModal
          artistId={selectedId}
          onClose={closeModal}
          onVoteSuccess={newScore => {
            setArtists(prev =>
              prev.map(artist =>
                artist.id === selectedId
                  ? { ...artist, score: newScore }
                  : artist,
              ),
            );
            setVotedIds(prev => [...prev, selectedId]);
            closeModal();
          }}
        />
      )}
    </div>
  );
}

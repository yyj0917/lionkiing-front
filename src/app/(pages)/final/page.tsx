/* eslint-disable */

'use client';

import { useState } from 'react';
import ArtistGrid from './_components/ArtistGrid';
import PageHeader from './_components/PageHeader';
import VoteModal from './_components/VoteModal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TVDropZone from '../(home)/_components/tv-dropzone';

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
    console.log('s');
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  return (
    <div className='p-8'>
      <DndProvider backend={HTML5Backend}>
        <PageHeader title='본선진출' />
        <TVDropZone />
        <ArtistGrid artists={artists} onVote={handleVote} votedIds={votedIds} />

        {selectedId && (
          <VoteModal
            artistId={selectedId}
            onClose={closeModal}
            mileage={100}
            onVoteSuccess={availableVotes => {
              void setArtists(prev =>
                prev.map(artist =>
                  artist.id === selectedId
                    ? { ...artist, score: availableVotes }
                    : artist,
                ),
              );
              void setVotedIds(prev => [...prev, selectedId]);
              void closeModal();
            }}
          />
        )}
      </DndProvider>
    </div>
  );
}

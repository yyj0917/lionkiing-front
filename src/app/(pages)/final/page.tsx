/* eslint-disable */

'use client';

import { useEffect, useState } from 'react';
import ArtistGrid from './_components/ArtistGrid';
import PageHeader from './_components/PageHeader';
import VoteModal from './_components/VoteModal';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TVDropZone from '../(home)/_components/tv-dropzone';
import { getBandFinalInfo } from '@/app/_common/apis/band-final-info';
import { getAvailableVotes } from '@/app/_common/apis/available-votes';

const mockArtists = Array.from({ length: 12 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `이름 ${i + 1}`,
  image: '/image/dog.png',
  score: 0,
}));

export default function Final() {
  const [refetch, setRefetch] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [artists, setArtists] = useState(mockArtists);
  const [votedIds, setVotedIds] = useState<string[]>([]);
  const [mileage, setMileage] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const bandData = await getBandFinalInfo();

      const mapped = bandData.map(band => ({
        id: band.id,
        name: band.band.name,
        image: band.band.image,
        score: band.voteCount ?? 0,
      }));
      setArtists(mapped);

      const mileageData = await getAvailableVotes();
      setMileage(mileageData.availableVotes);
    };

    fetchData();
  }, [refetch]);

  const handleVote = (id: string) => {
    setSelectedId(id);
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
            mileage={mileage}
            onVoteSuccess={() => setRefetch(prev => !prev)}
          />
        )}
      </DndProvider>
    </div>
  );
}

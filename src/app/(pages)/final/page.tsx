'use client';

import { useEffect, useState } from 'react';
import ArtistGrid from './_components/ArtistGrid';
import PageHeader from './_components/PageHeader';
import VoteModal from './_components/VoteModal';
import { getBandFinalInfo } from '@/app/_common/apis/band-final-info';
import { BandFinalInfo } from '@/app/_common/interfaces/band-info.interface';

interface Artist {
  id: string;
  name: string;
  image: string;
  score: number;
}

export default function Final() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [votedIds, setVotedIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const bandData: BandFinalInfo[] = await getBandFinalInfo();

      const mapped = bandData.map(band => ({
        id: band.id,
        name: band.band.name,
        image: band.band.image,
        score: band.voteCount ?? 0,
      }));

      setArtists(mapped);
    };

    fetchArtists();
  }, []);

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

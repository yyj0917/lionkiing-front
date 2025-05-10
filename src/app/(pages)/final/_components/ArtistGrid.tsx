import ArtistCard from './ArtistCard';

interface Artist {
  id: string;
  name: string;
  image: string;
  score: number;
}

interface ArtistGridProps {
  artists: Artist[];
  onVote: (id: string) => void;
  votedIds: string[];
}

export default function ArtistGrid({
  artists,
  onVote,
  votedIds,
}: ArtistGridProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 justify-items-center pb-20'>
      {artists.map(artist => (
        <ArtistCard
          key={artist.id}
          id={artist.id}
          name={artist.name}
          image={artist.image}
          score={artist.score}
          onVote={() => onVote(artist.id)}
          voted={votedIds.includes(artist.id)}
        />
      ))}
    </div>
  );
}

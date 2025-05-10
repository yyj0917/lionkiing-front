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
}

export default function ArtistGrid({ artists, onVote }: ArtistGridProps) {
  return (
    <div className='grid grid-cols-3 gap-6 justify-items-center'>
      {artists.map(artist => (
        <ArtistCard
          key={artist.id}
          name={artist.name}
          image={artist.image}
          score={artist.score}
          onVote={() => onVote(artist.id)}
        />
      ))}
    </div>
  );
}

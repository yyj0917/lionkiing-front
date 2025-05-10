import { useState } from 'react';

interface ArtistCardProps {
  name: string;
  score: number;
  image: string;
  onVote: () => void;
}

export default function ArtistCard({
  name,
  score,
  image,
  onVote,
}: ArtistCardProps) {
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    onVote();
    setVoted(true);
  };
  return (
    <div>
      <img
        src='/image/dog.png'
        className='w-full h-40 object-cover mb-2 rounded'
      />
      <p className='font-bold text-center'>{name}</p>
      <p className='text-sm text-center'>점수:{score}</p>
      <button
        onClick={handleVote}
        className={`mt-1 text-white text-sm px-3 py-1 rounded-md ${
          voted
            ? 'bg-green-500 cursor-not-allowed'
            : 'bg-gray-500 hover:bg-gray-600'
        }`}
        disabled={voted}
      >
        {voted ? '투표완료' : '투표하기'}
      </button>
    </div>
  );
}

'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ArtistCardProps {
  id: string;
  name: string;
  score: number;
  image: string;
  onVote: () => void;
}

export default function ArtistCard({
  id,
  name,
  score,
  image,
  onVote,
}: ArtistCardProps) {
  const [voted, setVoted] = useState(false);
  const router = useRouter();
  const handleVote = () => {
    onVote();
    setVoted(true);
  };

  //밴드 페이지로 전환
  const handleImageClick = () => {
    router.push('/band/${id}');
  };
  return (
    <div className='text-center'>
      <img
        src={image}
        alt={`${name} 이미지`}
        onClick={handleImageClick}
        className='w-full h-40 object-cover mb-2 rounded cursor-pointer transition hover:opacity-80'
      />
      <p className='font-bold'>{name}</p>
      <p className='text-sm'>점수:{score}</p>
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

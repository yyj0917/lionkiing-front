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
  return (
    <div>
      <img
        src='/image/dog.png'
        className='w-full h-40 object-cover mb-2 rounded'
      />
      <p className='font-bold text-center'>{name}</p>
      <p className='text-sm text-center'>점수:{score}</p>
      <button
        onClick={onVote}
        className='mt-1 bg-gray-500 text-white text-sm px-3 py-1 rounded-md'
      >
        투표하기
      </button>
    </div>
  );
}

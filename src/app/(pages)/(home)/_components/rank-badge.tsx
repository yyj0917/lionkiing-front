export default function RankBadge({ rank }: { rank: number }) {
  return (
    <div className='absolute top-[-10px] left-[-10px] size-10 border-2 border-primary-yellow bg-white rounded-full flex justify-center items-center'>
      <p className='text-primary-yellow text-2xl font-bold'>{rank}</p>
    </div>
  );
}

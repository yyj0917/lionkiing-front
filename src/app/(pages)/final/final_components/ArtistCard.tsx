export default function ArtistCard() {
  return (
    <div>
      <img
        src='/image/dog.png'
        className='w-full h-40 object-cover mb-2 rounded'
      />
      <p className='font-bold text-center'>이름</p>
      <p className='text-sm text-center'>점수:</p>
      <button className='mt-1 bg-gray-500 text-white text-sm px-3 py-1 rounded-md'>
        투표하기
      </button>
    </div>
  );
}

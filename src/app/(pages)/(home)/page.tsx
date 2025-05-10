import TopBar from './_components/top-bar';
import RankBoard from './_components/rank-board';

export default function HomePage() {
  return (
    <div
      className='relative px-8 pt-4 pb-20 w-full h-full flex flex-col items-center rounded-4xl overflow-y-auto bg-gradient-to-b
            from-[#74c2d7]
            to-[#363d80] scrollbar-hide'
    >
      {/* <div
        style={{
          backgroundImage: 'url(/images/festival-main.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.5,
          zIndex: -1,
          borderRadius: '40px',
        }}
      /> */}
      <div
        className='w-full h-auto bg-gradient-to-b
            from-[#74c2d7]
            to-[#363d80]'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 1.0,
          zIndex: -1,
          borderRadius: '40px',
        }}
      />
      <TopBar />
      <main className='pt-8 pb-10 w-full h-auto flex flex-col items-center gap-10'>
        <RankBoard />
        <button className='py-4  w-full h-auto bg-white text-primary-yellow text-2xl font-bold rounded-xl cursor-pointer'>
          더 많은 영상 보러가기
        </button>
      </main>
    </div>
  );
}

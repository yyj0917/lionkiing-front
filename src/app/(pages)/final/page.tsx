import { mock } from 'node:test';
import ArtistCard from './final_components/ArtistCard';
import ArtistGrid from './final_components/ArtistGrid';
import PageHeader from './final_components/PageHeader';

const mockArtists = Array.from({ length: 12 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `이름 ${i + 1}`,
  image: '', // 이미지 경로 또는 비워둬도 됨
  score: 333,
}));

export default function Final() {
  const handleVote = (id: string) => {
    alert('${id}번 아티스트에게 투표했습니다!');
  };

  return (
    <div className='p-8'>
      <PageHeader title='본선진출' />
      <ArtistGrid artists={mockArtists} onVote={handleVote} />
    </div>
  );
}

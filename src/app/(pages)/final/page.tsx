import ArtistCard from './final_components/ArtistCard';
import PageHeader from './final_components/PageHeader';

export default function Final() {
  return (
    <div className='p-8'>
      <PageHeader title='본선진출' />
      <ArtistCard />
    </div>
  );
}

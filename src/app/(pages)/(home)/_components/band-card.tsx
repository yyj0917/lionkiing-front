import { motion } from 'framer-motion';
import Image from 'next/image';
import RankBadge from './rank-badge';
import { BandFinalInfo } from '@/app/_common/interfaces/band-info.interface';
import { useDrag } from 'react-dnd';

export default function BandCard({
  rank,
  finalBandDetail,
  isDragPreview,
}: {
  rank: number | null;
  finalBandDetail: BandFinalInfo;
  isDragPreview?: boolean;
}) {
  const handleBandClick = () => {};
  const [{ isDragging }, dragRef] = useDrag({
    type: 'VIDEO_THUMB',
    item: { id: finalBandDetail.id },
    collect: monitor => ({ isDragging: !!monitor.isDragging() }),
  });

  return (
    <motion.div
      className='z-10 relative w-40 aspect-[4/3] rounded-xl shadow-2xl cursor-pointer'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={handleBandClick}
    >
      <Image
        ref={dragRef as unknown as React.RefObject<HTMLImageElement>}
        src={finalBandDetail.band.image}
        alt={finalBandDetail.band.name}
        fill
        className={
          'object-cover rounded-xl cursor-grab' +
          (isDragging ? ' opacity-0' : '')
        }
      />
      {/* {rank && <RankBadge rank={rank} />} */}
    </motion.div>
  );
}

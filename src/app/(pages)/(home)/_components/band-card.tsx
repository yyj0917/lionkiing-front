import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import RankBadge from './rank-badge';

export default function BandCard({ rank }: { rank: number | null }) {
  const handleBandClick = () => {};

  return (
    <motion.div
      className='z-10 relative w-40 aspect-[3/4] rounded-xl shadow-2xl cursor-pointer'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={handleBandClick}
    >
      <Image
        src={'/images/example.jpg'}
        alt='band-card'
        fill
        className='object-cover rounded-xl'
      />
      {rank && <RankBadge rank={rank} />}
    </motion.div>
  );
}

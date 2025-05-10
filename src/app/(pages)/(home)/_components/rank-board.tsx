'use client';

import { motion } from 'framer-motion';
import BandCard from './band-card';

const bandList = [1, 2, 3, 4, 5];

export default function RankBoard() {
  return (
    <section className='w-full h-auto flex flex-col justify-center items-center gap-8'>
      {/* Rank 1th band section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='relative w-full h-auto flex justify-center items-center mx-auto'
      >
        <div
          style={{
            backgroundImage: 'url(/images/rank-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            zIndex: 1,
            borderRadius: '10px',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          }}
        ></div>
        <BandCard rank={1} />
      </motion.div>
      {/* Rank 2nd & 3rd band section */}
      {bandList.map((band, index) => (
        <motion.div
          key={band}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className='w-full h-auto flex justify-around items-center mx-auto'
        >
          <BandCard rank={index * 2} />
          <BandCard rank={index * 2 + 1} />
        </motion.div>
      ))}
    </section>
  );
}

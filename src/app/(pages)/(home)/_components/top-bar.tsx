'use client';
import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { BellIcon } from 'lucide-react';

const ringVariants: Variants = {
  idle: { scale: 1, boxShadow: '0 0 0 0 rgba(34,197,94,0)' },
  ring: {
    scale: [1, 1.05, 1],
    boxShadow: [
      '0 0 0 0 rgba(23, 51, 212, 0.7)',
      '0 0 0 10px rgba(34,197,94,0)',
      '0 0 0 0 rgba(34,197,94,0)',
    ],
  },
};

export default function TopBar() {
  const [ring, setRing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRing(true), 2000);
    const t2 = setTimeout(() => setRing(false), 3500);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <motion.div
      variants={ringVariants}
      animate={ring ? 'ring' : 'idle'}
      transition={{ duration: 1 }}
      className='w-full inline-flex justify-center items-center px-4 py-2 rounded-full'
    >
      {/* <BellIcon className='size-5 text-primary-yellow mr-4' />
      <span className='text-primary-yellow text-sm font-medium'>
        현재 청춘무대 제 1회가 진행되고 있습니다.
      </span> */}
      <p className='text-6xl font-bold text-primary-yellow text-center'>
        2025
        <br />
        청춘무대
      </p>
    </motion.div>
  );
}

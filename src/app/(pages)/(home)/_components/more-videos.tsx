import { motion } from 'framer-motion';
import Image from 'next/image';

const dummyData = [1, 2, 3, 4, 5];
export default function MoreVideos() {
  return (
    <section className='w-full h-auto flex flex-col justify-center items-start gap-3'>
      <h1 className='text-2xl font-bold text-primary-yellow'>더 많은 무대</h1>
      <div className='w-full h-auto flex justify-start items-center gap-2 overflow-x-auto scrollbar-hide gap-4'>
        {dummyData.map(item => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className='w-full h-auto flex flex-col items-start gap-2 cursor-pointer'
          >
            <div className='relative w-25 h-auto flex flex-col justify-center items-start gap-2 overflow-x-auto scrollbar-hide aspect-square'>
              <Image
                src={'/images/festival-main.jpg'}
                alt='more-videos'
                fill
                className='object-cover rounded-xl'
              />
            </div>
            <div className='flex flex-col justify-start items-center gap-1 text-white'>
              <h2 className='text-sm font-bold'>곡 제목</h2>
              <p className='text-xs'>밴드 이름</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

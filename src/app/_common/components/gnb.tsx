'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { House, Video, User, Youtube } from 'lucide-react';
import { cn } from '@/app/_core/utils/cn';

const GNB = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className='fixed bottom-0 left-0 right-0 '>
      <div className='min-w-[360px] max-w-[415px] lg:max-w-[375px] bg-whte mx-auto px-4 bg-primary-blue rounded-b-4xl'>
        <div className='flex justify-around items-center h-16'>
          <Link href='/' className='flex flex-col items-center'>
            <House
              className={cn(
                'size-8',
                isActive('/') ? 'text-primary-yellow' : 'text-white',
              )}
            />
          </Link>

          <Link href='/shortform' className='flex flex-col items-center'>
            <Youtube
              className={cn(
                'size-8',
                isActive('/shortform') ? 'text-primary-yellow' : 'text-white',
              )}
            />
          </Link>
          <Link href='/mypage' className='flex flex-col items-center'>
            <User
              className={cn(
                'size-8',
                isActive('/mypage') ? 'text-primary-yellow' : 'text-white',
              )}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default GNB;

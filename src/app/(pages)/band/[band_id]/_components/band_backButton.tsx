'use client';

import Link from 'next/link';

function BackButton() {
  return (
    <Link href='/final/'>
      <button className='w-8 h-8 border-2 border-white'>X</button>
    </Link>
  );
}

export default BackButton;

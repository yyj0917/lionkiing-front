'use client';

import { useState } from 'react';

interface VoteModalProps {
  artistId: string;
  onClose: () => void;
  onVoteSuccess: (newScore: number) => void;
}

export default function VoteModal({
  artistId,
  onClose,
  onVoteSuccess,
}: VoteModalProps) {
  const [point, setPoint] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPoint(value);
      setError('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    const numericPoint = Number(point);

    if (numericPoint < 1 || numericPoint > 50) {
      setError('1점 이상 50점 이하로 입력해주세요.');
      return;
    }

    try {
      // 실제 서버 연동은 이 부분에서 진행
      const updatedScore = 333 + numericPoint; // 예시 응답 처리
      onVoteSuccess(updatedScore); // ✅ 성공 시 처리
    } catch (err) {
      setError('투표에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded shadow-md text-center w-[400px] relative'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold'
        >
          ×
        </button>

        <h2 className='text-xl font-bold mb-2'>마일리지</h2>
        <p className='text-sm text-gray-500 mb-4 text-[12px]'>
          마일리지는 최소 1점, 최대 50점 부여 가능합니다!
        </p>

        <div className='flex items-center justify-center mt-4'>
          <input
            type='number'
            inputMode='numeric'
            min={1}
            max={50}
            step={1}
            required
            value={point}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className='w-24 text-center border border-gray-300 rounded px-3 py-2 text-lg'
            placeholder='0'
          />
          <span className='ml-2 text-lg font-bold'>점</span>
        </div>

        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

        <button
          onClick={handleSubmit}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-4'
        >
          투표하기
        </button>
      </div>
    </div>
  );
}

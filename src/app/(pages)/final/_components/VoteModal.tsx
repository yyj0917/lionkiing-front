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
    // 숫자 외 입력 방지
    if (/^\d*$/.test(value)) {
      setPoint(value);
      setError('');
    }
  };

  const handleSubmit = async () => {
    const numericPoint = Number(point);

    if (numericPoint < 1 || numericPoint > 50) {
      setError('1점 이상 50점 이하로 입력해주세요.');
      return;
    }

    try {
      // TODO: 실제 서버 요청
      // 예시: await fetch(`/api/vote`, { method: 'POST', body: JSON.stringify({ artistId, point: numericPoint }) });

      // 여기서는 가상 점수 계산 (예: 기존 점수 + 배팅 점수)
      const updatedScore = 333 + numericPoint; // 서버 응답 값 사용해야 함
      onVoteSuccess(updatedScore);
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

        <h2 className='text-xl font-bold mb-4'>마일리지</h2>
        <p className='text-sm text-gray-500 mb-2 text-[12px]'>
          마일리지는 최소 1점, 최대 50점 부여 가능합니다!
        </p>

        <input
          type='number'
          inputMode='numeric'
          pattern='[0-9]*'
          value={point}
          onChange={handleInputChange}
          className='border border-gray-300 rounded px-3 py-2 w-full text-center mb-3'
          placeholder='점수를 입력하세요'
          min={1}
          max={50}
        />

        {error && <p className='text-red-500 text-sm mb-2'>{error}</p>}

        <button
          onClick={handleSubmit}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full'
        >
          투표하기
        </button>
      </div>
    </div>
  );
}

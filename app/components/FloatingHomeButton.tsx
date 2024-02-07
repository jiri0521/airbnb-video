'use client';

import { useRouter } from 'next/navigation';
import { FaArrowCircleLeft } from "react-icons/fa";

const FloatingHomeButton = () => {
  const router = useRouter();

  return (
    <button
      className="fixed top-20 left-20 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg cursor-pointer transition-colors duration-200 z-50"
      
      onClick={() => router.push('/house')}
      aria-label="back"
    >
      <FaArrowCircleLeft size="1.5em" />
    <div className='text-sm'>戻る</div>
    </button>
  );
};

export default FloatingHomeButton;
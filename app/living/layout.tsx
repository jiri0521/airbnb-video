// living/layout.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import layout from 'public/images/living.webp';
import DeepSitDownCat from 'public/images/DeepSitDownCat.png';
import StandUpCat from 'public/images/StandUpFloorCat.png';
import FloatingHomeButton from '../components/FloatingHomeButton';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


interface ModalContent {
  title: string;
  description: string;
  videoUrl: string;
}


const LayoutPlan = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ title: '', description: '',videoUrl:''});

  const openModal = (content: ModalContent) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const watchVideo = (url: string) => {
      closeModal(); // モーダルを閉じてから
      router.push(url); // 指定したURLに遷移
  };
  
  return (
    <>
    <style jsx global>{`
      @keyframes slideInUp {
        from {
          transform: translateY(100%);
        }
        to {
          transform: translateY(0);
        }
      }
    `}</style>
    <div className="flex flex-col relative items-center">
      【居間】ねこをタッチしてみよう👆
      <Image src={layout} alt="bedroom Layout" width={700} height={700} /> 
      
      <FloatingHomeButton /> 
      <div className="absolute top-0 left-0 w-full h-full">
       
        {/* div要素に 'balloon' スタイルクラスとアニメーションを適用します */}
       
        {/* 寝室へのリンク */}
       
        <div className="cursor-pointer" onClick={() => openModal({ title: '深く座る', description: '作業療法士のウッチーが深く座り直す方法を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/656983eac7fbc06fa83d52ca' })}> 
               
               <Image src={DeepSitDownCat} alt="DeepSitDownCatCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '40%', left: '28%', width: '15%', height: '15%' }} />                
       
       </div>
        </div>
        
        <div className="cursor-pointer" onClick={() => openModal({ title: '床からの立ち上がり', description: '作業療法士のウッチーが最小限の力で立ち上がらせる方法を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/65530c41b735a967abc092de' })}>               
               
                <Image src={StandUpCat} alt="StandUpCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '55%', left: '58%', width: '15%', height: '15%' }} />            
        
        </div>
      <div className='text-gray-400'>
      © pixander 123RF Free Images
      </div>

     {isModalOpen && modalContent && (
      <div className="fixed inset-0 flex justify-center items-end p-4 z-50" onClick={closeModal}>
        <div
          className="bg-white p-6 rounded-t-lg shadow-lg w-full max-w-md m-4 animate-slideInUp"
          onClick={(e) => e.stopPropagation()}
          style={{ animation: 'slideInUp 0.5s ease-out forwards' }}
        >
          <h2 className="text-lg font-bold mb-2">{modalContent.title}</h2>
          <p>{modalContent.description}</p>
          {/* ボタンクリックでwatchVideo関数を呼び出します */}
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => watchVideo(modalContent.videoUrl)}
          >
            動画視聴
          </button>
            <button
              className="mt-4 bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
              onClick={closeModal}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
       
     </div>
  </>);
};

export default LayoutPlan;

// bedroom/layout.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import layout from 'public/images/bedroom.webp';
import BedWakeUpCat from 'public/images/ねこベッド起き上がり.png';
import BedStandUpCat from 'public/images/ねこベッド立ち上がり.png';
import BedSleepCat from 'public/images/ねこ寝返り.png';
import BedChairCat from 'public/images/ねこ車椅子.png';
import balloonBed from 'public/images/balloon-bed.svg'; // インポート確認済み
import balloonKitchen from 'public/images/balloon-kitchen.svg';
import balloonLiving from 'public/images/balloon-living.svg';
import FloatingHomeButton from '../components/FloatingHomeButton';
import { useState } from 'react';



interface ModalContent {
  title: string;
  description: string;
  videoUrl: string;
}


const LayoutPlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ title: '', description: '',videoUrl:''});

  const openModal = (content: ModalContent) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="flex flex-col relative items-center">
      【寝室】　猫をタッチしてみよう👆
      <Image src={layout} alt="bedroom Layout" width={700} height={700} /> 
      <FloatingHomeButton /> 
      <div className="absolute top-0 left-0 w-full h-full">
       
        {/* div要素に 'balloon' スタイルクラスとアニメーションを適用します */}
        <div className="cursor-pointer" onClick={() => openModal({ title: 'ベッドからの立ち上がり', description: '作業療法士のウッチーがベッドから立ち上がる時の注意点を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/652f85b6c8dd1a19ee4824f8' })}>               
               
                <Image src={BedStandUpCat} alt="BedStandUpCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '55%', left: '60%', width: '15%', height: '15%' }} />            
        
        </div>
        <div className="cursor-pointer" onClick={() => openModal({ title: 'ベッドからの起き上がり', description: '作業療法士のウッチーがベッドから起き上がる時の注意点を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/651a745b7ec24380c62fead2' })}>               
               
               <Image src={BedWakeUpCat} alt="BedWakeUpCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '35%', left: '40%', width: '15%', height: '15%' }} />            
       
       </div>
        {/* 寝室へのリンク */}
        <div className="cursor-pointer" onClick={() => openModal({ title: '寝返りの介助', description: '作業療法士のウッチーが寝返りの介助を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/64ee9654112c914d6b83b609' })}>               
               
               <Image src={BedSleepCat} alt="BedSleepUpCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '40%', left: '55%', width: '15%', height: '15%' }} />            
       
       </div>
       
       <div className="cursor-pointer" onClick={() => openModal({ title: 'ベッドから車椅子へ移乗', description: '作業療法士のウッチーがベッドから車椅子への移り方を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/64bca3ba117bf893ebfae66e' })}>               
               
               <Image src={BedChairCat} alt="BedChairCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '60%', left: '30%', width: '15%', height: '15%' }} />            
       
       </div>

      </div>
     
      <div className='text-gray-400'>
      © pixander 123RF Free Images
      </div>
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end p-4 z-50 " onClick={closeModal}>
          <div
              className="bg-white p-6 rounded-t-lg shadow-lg w-full max-w-md m-4 animate-slideInUp"
              onClick={(e) => e.stopPropagation()}
              style={{
                animation: 'slideInUp 0.5s ease-out forwards'
              }}
            >
            <h2 className="text-lg font-bold mb-2">{modalContent.title}</h2>
            <p>{modalContent.description}</p>
            <a
              href={modalContent.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              動画視聴
            </a>
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





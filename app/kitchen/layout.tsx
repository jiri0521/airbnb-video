// kitchen/layout.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import layout from 'public/images/kitchen3.webp';
import ToromiCat from 'public/images/猫とろみ.png';
import MealCat from 'public/images/ねこ食べさせ方.png';
import balloonBed from 'public/images/balloon-bed.svg'; // インポート確認済み
import balloonKitchen from 'public/images/balloon-kitchen.svg';
import balloonLiving from 'public/images/balloon-living.svg';
import FloatingHomeButton from '../components/FloatingHomeButton';
import { useState } from 'react';
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
      【キッチン】猫をタッチしてみよう👆
      <Image src={layout} alt="bedroom Layout" width={700} height={700} /> 
      <FloatingHomeButton /> 
      <div className="absolute top-0 left-0 w-full h-full">
       
        {/* div要素に 'balloon' スタイルクラスとアニメーションを適用します */}         
        <div className="cursor-pointer" onClick={() => openModal({ title: 'とろみの付け方', description: '言語聴覚士のくりちゃんがお茶にとろみをつける方法を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/659743d7ecfec5c8548a5770' })}>               
               
                <Image src={ToromiCat} alt="ToromiCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '28%', left: '48%', width: '15%', height: '15%' }} />            
        
        </div>
        {/* 寝室へのリンク */}
        <div className="cursor-pointer" onClick={() => openModal({ title: '食べさせ方', description: '言語聴覚士のくりちゃんが食事の介助方法（食べさせ方）を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/65669ddd6591799260e1d380' })}>               
               
               <Image src={MealCat} alt="MealCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '50%', left: '60%', width: '15%', height: '15%' }} />            
       
       </div>

        <Link href="/?category=栄養">
        <div className='w-full h-full animate-wiggle text-sm text-white bg-red-400 flex items-center justify-center' style={{ position: 'absolute', top: '55%', left: '18%', width: '15%', height: '15%' }}>乳製品のとろみの付け方</div>
        </Link>
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


// bedroom/layout.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import layout from 'public/images/bedroom.webp';
import BedWakeUpCat from 'public/images/BedWakeUpCat.png';
import BedStandUpCat from 'public/images/BedStandUpCat.png';
import BedSleepCat from 'public/images/BedSleepCat.png';
import BedChairCat from 'public/images/BedChairCat.png';
import BedRayBackCat from 'public/images/BedLayBackCat.png';
import BedCatStandUpWheelChair from 'public/images/BedCatStandUpWheelChair.png';
import balloonBed from 'public/images/balloon-bed.svg'; // インポート確認済み
import balloonKitchen from 'public/images/balloon-kitchen.svg';
import balloonLiving from 'public/images/balloon-living.svg';
import FloatingHomeButton from '../components/FloatingHomeButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


interface ModalContent {
  title: string;
  target: string;
  description: string;
  videoUrl: string;
  imageUrl: string;
}


const LayoutPlan = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ title: '', target:'', description: '',videoUrl:'',imageUrl:''});

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
      【寝室】猫をタッチしてみよう
      <Image src={layout} alt="bedroom Layout" width={700} height={700} /> 
      <FloatingHomeButton /> 
      <div className="absolute top-0 left-0 w-full h-full">
       
        {/* div要素に 'balloon' スタイルクラスとアニメーションを適用します */}
        <div className="cursor-pointer" onClick={() => openModal({ title: 'ベッドからの立ち上がり',target:'対象：足の不自由な方', description: '立ち上がる時の注意点を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/652f85b6c8dd1a19ee4824f8',imageUrl:'https://res.cloudinary.com/dboemqskb/image/upload/v1707719605/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-02-12_15.33.12_kje120.png' })}>               
               
                <Image src={BedStandUpCat} alt="BedStandUpCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '55%', left: '60%', width: '15%', height: '15%' }} />            
        
        </div>
        <div className="cursor-pointer" onClick={() => openModal({ title: 'ベッドからの起き上がり',target:'対象：足の不自由な方', description: 'ベッドから起き上がる時の注意点を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/651a745b7ec24380c62fead2',imageUrl:'https://res.cloudinary.com/dboemqskb/image/upload/v1707647689/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-02-11_19.32.13_m8ztqc.png' })}>               
               
               <Image src={BedWakeUpCat} alt="BedWakeUpCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '35%', left: '40%', width: '15%', height: '15%' }} />            
       
       </div>
        {/* 寝室へのリンク */}
        <div className="cursor-pointer" onClick={() => openModal({ title: '寝返りの介助',target:'対象：寝たきりの方、麻痺のある方', description: '寝返りの介助を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/64ee9654112c914d6b83b609',imageUrl:'https://res.cloudinary.com/dboemqskb/image/upload/v1707719353/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-02-12_15.28.56_jhs3mc.png' })}>               
               
               <Image src={BedSleepCat} alt="BedSleepCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '40%', left: '55%', width: '15%', height: '15%' }} />            
       
       </div>
       
       <div className="cursor-pointer" onClick={() => openModal({ title: '車椅子からベッドへ移乗',target:'対象：車椅子の方,足の不自由な方', description: 'ベッドから車椅子への移り方を解説・実演します', videoUrl: 'https://air-video.vercel.app/listings/64bca3ba117bf893ebfae66e',imageUrl:'https://res.cloudinary.com/dboemqskb/image/upload/v1707718455/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2023-07-23_12.46.38_fzrhia.png' })}>               
               
               <Image src={BedChairCat} alt="BedChairCat" width={100} height={100} className='animate-wiggle' style={{ position: 'absolute', top: '60%', left: '33%', width: '13%', height: '13%' }} />            
       
       </div>

       <div className="cursor-pointer" onClick={() => openModal({ title: 'ベッドに座っている人を寝かせる',target:'対象：麻痺のある方', description: 'ベッドに座っている人を寝かせるコツを実演・解説します', videoUrl: 'https://air-video.vercel.app/listings/65dbda9be4dd198d80e86a53',imageUrl:'https://res.cloudinary.com/dboemqskb/image/upload/v1708907890/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-02-26_9.37.43_noomth.png' })}>               
               
               <Image src={BedRayBackCat} alt="BedRayBackCat" width={80} height={80} className='animate-wiggle' style={{ position: 'absolute', top: '50%', left: '45%', width: '10%', height: '10%' }} />            
       
       </div>

       <div className="cursor-pointer" onClick={() => openModal({ title: 'ベッドから車椅子に移る',target:'対象：車椅子の方、足が不自由な方', description: 'ベッドに座っている人を車椅子に移す方法を解説します。コツを掴めば、最小限の力で行うことができます。体格差がある場合も安心して移動できますね。', videoUrl: 'https://air-video.vercel.app/listings/65e11bb015afd15011687dd7',imageUrl:'https://res.cloudinary.com/dboemqskb/image/upload/v1709255025/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2024-03-01_10.03.07_yhxejg.png' })}>               
               
               <Image src={BedCatStandUpWheelChair} alt="BedRayBackCat" width={80} height={80} className='animate-wiggle' style={{ position: 'absolute', top: '65%', left: '45%', width: '15%', height: '15%' }} />            
       
       </div>
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
      {/* 丸い画像を表示 */}
      <div className="flex items-center">
         <Image
           src={modalContent.imageUrl} // 画像のソースを動的に指定
           alt="Modal Image"
           width={80}   // 画像サイズは適宜調整してください
           height={80}  // 画像サイズは適宜調整してください
           className="rounded-full" // 画像を丸くする
         />
         <h2 className="text-lg font-bold mb-2 ml-4">{modalContent.title}</h2>
       </div>
       <p className='font-light text-gray-400'>{modalContent.target}</p>
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

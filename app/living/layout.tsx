// living/layout.tsx
import Link from 'next/link';
import Image from 'next/image';
import layout from 'public/images/living.webp';
import balloonBed from 'public/images/balloon-bed.svg'; // インポート確認済み
import balloonKitchen from 'public/images/balloon-kitchen.svg';
import balloonLiving from 'public/images/balloon-living.svg';
import FloatingHomeButton from '../components/FloatingHomeButton';

const LayoutPlan = () => {
  

  return (
    
    <div className="flex flex-col relative items-center">
      <Image src={layout} alt="bedroom Layout" width={700} height={700} /> 
      <FloatingHomeButton /> 
      <div className="absolute top-0 left-0 w-full h-full">
       
        {/* div要素に 'balloon' スタイルクラスとアニメーションを適用します */}
        <Link href="https://air-video.vercel.app/listings/656983eac7fbc06fa83d52ca">
        <div className='w-full h-full animate-wiggle text-sm text-orange-400 bg-white flex items-center justify-center' style={{ position: 'absolute', top: '55%', left: '28%', width: '15%', height: '15%' }}>深く座る</div>
        </Link>
        {/* 寝室へのリンク */}
        <Link href="https://air-video.vercel.app/listings/6531e81803f3d1b1705b8d45">
        <div className='w-full h-full animate-wiggle text-sm text-orange-400 bg-white flex items-center justify-center' style={{ position: 'absolute', top: '28%', left: '58%', width: '15%', height: '15%' }}>歩行介助</div>
        </Link>
        <Link href="https://air-video.vercel.app/listings/65530c41b735a967abc092de">
        <div className='w-full h-full animate-wiggle text-sm text-orange-400 bg-white flex items-center justify-center' style={{ position: 'absolute', top: '55%', left: '58%', width: '15%', height: '15%' }}>床からの立ち上がり</div>
        </Link>
      </div>
     
      <div className='text-gray-400'>
      © pixander 123RF Free Images
      </div>
     
    </div>
  );
};

export default LayoutPlan;

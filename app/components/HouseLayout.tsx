// components/LayoutPlan.tsx
import Link from 'next/link';
import Image from 'next/image';
import layout from 'public/images/layout.svg';
import balloonBed from 'public/images/balloon-bed.svg'; // インポート確認済み
import balloonKitchen from 'public/images/balloon-kitchen.svg';
import balloonLiving from 'public/images/balloon-living.svg';

const LayoutPlan = () => {
  

  return (
    <div className="flex flex-col relative items-center">
     
      <Image src={layout} alt="3LDK Layout" width={700} height={700} />
      <div className="absolute top-0 left-0 w-full h-full">
        {/* div要素に 'balloon' スタイルクラスとアニメーションを適用します */}
         <Link href="/kitchen">
        <Image src={balloonKitchen} className='w-full h-full animate-wiggle' alt="bollon-eiyou" style={{ position: 'absolute', top: '55%', left: '28%', width: '15%', height: '15%' }}/>
        </Link>
        {/* 寝室へのリンク */}
        <Link href="/bedroom">
        <Image src={balloonBed} className='w-full h-full animate-wiggle' alt="bollon-bed" style={{ position: 'absolute', top: '28%', left: '58%', width: '15%', height: '15%' }}/>
        </Link>
        <Link href="/living">
        <Image src={balloonLiving} className='w-full h-full animate-wiggle' alt="bollon-living" style={{ position: 'absolute', top: '55%', left: '58%', width: '15%', height: '15%' }}/>
        </Link>
      </div>
     
      <a className='text-gray-400'>
        イラストの著作者:macrovector / 出典:Freepik
      </a>
    </div>
  );
};

export default LayoutPlan;

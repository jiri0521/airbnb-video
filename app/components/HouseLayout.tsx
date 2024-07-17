// components/LayoutPlan.tsx
import Link from 'next/link';
import Image from 'next/image';
import layout from 'public/images/layout6.png';
import balloonBed from 'public/images/balloon-bed.svg'; // インポート確認済み
import balloonKitchen from 'public/images/balloon-kitchen.svg';
import balloonLiving from 'public/images/balloon-living.svg';


const LayoutPlan = () => {
  

  return (
    <div className="flex flex-col relative items-center">
      <div className="w-[400px] h-[400px] relative">
        <Image src={layout} alt="house Layout" width={400} height={400} />
        <div className="absolute top-0 left-0 w-full h-full">
          {/* div要素に 'balloon' スタイルクラスとアニメーションを適用します */}
          <Link href="/kitchen">
            <Image src={balloonKitchen} className='w-full h-full animate-wiggle' alt="bollon-eiyou" style={{ position: 'absolute', top: '25%', left: '70%', width: '15%', height: '15%' }}/>
          </Link>
          {/* 寝室へのリンク */}
          <Link href="/bedroom">
            <Image src={balloonBed} className='w-full h-full animate-wiggle' alt="bollon-bed" style={{ position: 'absolute', top: '60%', left: '20%', width: '15%', height: '15%' }}/>
          </Link>
          <Link href="/living">
            <Image src={balloonLiving} className='w-full h-full animate-wiggle' alt="bollon-living" style={{ position: 'absolute', top: '60%', left: '65%', width: '15%', height: '15%' }}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LayoutPlan;

// components/LayoutPlan.tsx
import Link from 'next/link';
import Image from 'next/image';
import layout from 'public/images/layout.svg';
import balloon from 'public/images/balloon.svg'; // インポート確認済み

const LayoutPlan = () => {
  

  return (
    <div className="flex flex-col relative items-center">
     
      <Image src={layout} alt="3LDK Layout" width={700} height={700} />
      <div className="absolute top-0 left-0 w-full h-full">
        {/* div要素に 'balloon' スタイルクラスとアニメーションを適用します */}
        <Link href="/?category=栄養">
        <Image src={balloon} className='w-full h-full animate-wiggle shadow-lg' alt="bollon-eiyou" style={{ position: 'absolute', top: '55%', left: '28%', width: '15%', height: '15%' }}/>
          <div className='text font-bold text-orange-500 animate-wiggle' style={{ position: 'absolute', top: '57%', left: '32%'}}>食事</div>
        </Link>
        {/* 寝室へのリンク */}
        <Link href="/?category=ベッド">
        <Image src={balloon} className='w-full h-full animate-wiggle shadow-lg' alt="bollon-bed" style={{ position: 'absolute', top: '28%', left: '58%', width: '15%', height: '15%' }}/>
          <div className="block text text-orange-500 font-bold hover:bg-blue-100 animate-wiggle" style={{
            position: 'absolute', top: '30%', left: '62%', width: '10%', height: '15%' }}>寝室</div>
        </Link>
        <Link href="/?category=歩行">
        <Image src={balloon} className='w-full h-full animate-wiggle shadow-lg' alt="bollon-living" style={{ position: 'absolute', top: '55%', left: '58%', width: '15%', height: '15%' }}/>
        <div className="block text text-orange-500 font-bold hover:bg-blue-100 animate-wiggle" style={{
            position: 'absolute', top: '57%', left: '62%', width: '10%', height: '15%' }}>居間</div>
        </Link>
      </div>
     
      <a className='text-gray-400'>
        イラストの著作者:macrovector / 出典:Freepik
      </a>
    </div>
  );
};

export default LayoutPlan;

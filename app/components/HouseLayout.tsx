// components/LayoutPlan.tsx

import Link from 'next/link';
import Image from 'next/image';
import layout from 'public/images/layout.svg'

const LayoutPlan = () => {
  return (
    <div className="flex flex-col relative items-center">
      <Image src={layout} alt="3LDK Layout" width={700} height={700} />
      <div className="absolute top-0 left-0 w-full h-full">
        {/* キッチンへのリンク */}
        <Link href="/?category=栄養">
          <div className="block text-4xl text-orange-500 font-bold hover:bg-blue-100 animate-wiggle" style={{ 
            position: 'absolute', top: '60%', left: '32%', width: '15%', height: '20%' }}>食事</div>
        </Link>
        {/* 居間へのリンク */}
        <Link href="/?category=ベッド">
          <div className="block text-4xl text-orange-500 font-bold hover:bg-blue-100 animate-wiggle" style={{
            position: 'absolute', top: '28%', left: '58%', width: '10%', height: '15%' }}>寝室</div>
        </Link>
        {/* ...他の部屋も同様にリンクを追加 */}
      </div>
      <a href="https://jp.freepik.com/free-vector/flat-architectural-plan-top-view-position_4015450.htm#query=%E9%96%93%E5%8F%96%E3%82%8A&position=43&from_view=keyword&track=sph&uuid=2a7df97a-0b8b-4987-a7d3-09c6f0cd81ba">イラストの著作者：macrovector</a>／出典：Freepik
    </div>
  );
};

export default LayoutPlan;

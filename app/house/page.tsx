// pages/index.tsx

import type { NextPage } from 'next';
import LayoutPlan from '../components/HouseLayout';


const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold my-4">間取りから動画選択</h1>
      <div className="text-center text-gray-500 my-4">ゆらゆらしてる風船🎈をクリック！</div>
      <LayoutPlan />
    </div>
  );
};

export default Home;

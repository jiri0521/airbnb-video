import type { NextPage } from 'next';
import LayoutPlan from './layout';


const Home: NextPage = () => {
    return (
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-bold my-4">寝室</h1>
        <div className="text-center text-gray-500 my-4">ゆらゆらしてる文字をクリック！</div>
        <LayoutPlan />
      </div>
    );
  };
  
  export default Home;
  
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import error from 'public/images/error.png';


const A8NetAd: React.FC = () => {
  return (
    <div className='flex justify-center items-center '>
 
      <Link href="https://px.a8.net/svt/ejp?a8mat=3Z4U5E+G23X6A+5HQC+BXB8X" rel="nofollow noopener noreferrer" target="_blank" className="block w-300 h-250">
      【広告】腰の悩み ぎゅ〜っで解決！
          <Image
          className='rounded-xl'
          src="https://www25.a8.net/svt/bgt?aid=240410786971&wid=001&eno=01&mid=s00000025626002003000&mc=1"
          alt=""
          width={300}
          height={250}
          />
           <Image
          className=''
          src="https://www13.a8.net/0.gif?a8mat=3Z4U5E+G23X6A+5HQC+BXQOH"
          alt=""
          width={1}
          height={1}
        />
      </Link>
       <br></br>
    </div>
  );
};

export default A8NetAd;


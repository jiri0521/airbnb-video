"use client";

import Link from "next/link";


const  Thanks = () => {
  return(
  
     <div className="justify-senter items-center ">
        <div className="text-xl font-bold">
        お問い合わせは送信されました。
        </div>
       
       <Link href="/" className="mb-3 justify-center items-center text-sky-400">ホームへ戻る</Link>
     </div>
  
  );
}
export default Thanks;
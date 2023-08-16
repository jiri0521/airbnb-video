'use client';

const ChatEmptyState = () => {
  return ( 
      <div 
      className="
        px-4 
        py-10 
        sm:px-6 
        lg:px-8 
        lg:py-6 
        h-full 
        flex 
        justify-center 
        items-center 
        bg-gray-100
      "
      >
        <div className="text-center items-center flex flex-col">
          <h3 className="mt-2 text-2xl font-semibold text-gray-900">
            チャットを選択 or 新しい会話を始めよう!
          </h3>
        </div>
    </div>
   );
}
 
export default ChatEmptyState;

import ClientOnly from "@/app/components/ClientOnly";




const ContactPage =  () => {
  
    return (
       
        <div>
          <h1 className="text-center  text-orange-400 h-full mb-3">お問い合わせ</h1>
           <form>
             <div className="mb-3">
                <label htmlFor="name" className="mx-auto form-control px-4 py-2 min-w-[230px] lg:w-[620px] sm:px-5 sm:py-3 flex focus:ring-[1px] placeholder:text-zinc-400 form-label">お名前</label><div/>
                <input type="text" className="mx-auto form-control px-4 py-2 min-w-[230px] lg:w-[620px] sm:px-5 sm:py-3 flex border focus:ring-[1px] placeholder:text-zinc-400" id="name" required />
                <label htmlFor="email" className="mx-auto form-control px-4 py-2 min-w-[230px] lg:w-[620px] sm:px-5 sm:py-3 flex  focus:ring-[1px] placeholder:text-zinc-400 form-label">メールアドレス</label><div/>
                <input type="email" className="mx-auto form-control px-4 py-2 min-w-[230px] lg:w-[620px] sm:px-5 sm:py-3 flex border focus:ring-[1px] placeholder:text-zinc-400" id="email" required />
                <label htmlFor="message" className="mx-auto form-control px-4 py-2 min-w-[230px] lg:w-[620px] sm:px-5 sm:py-3 flex focus:ring-[1px] placeholder:text-zinc-400 form-label">メッセージ</label><div/>
                <textarea 
                  name="message"
                  id="message"
                  className="mx-auto form-control px-4 py-2 min-w-[230px] lg:w-[620px] sm:px-5 sm:py-3 flex border focus:ring-[1px] placeholder:text-zinc-400"
                ></textarea>
               
              </div>
              <button
              type="submit"
              className="flex border focus:ring-[1px] px-4 py-2 bg-blue-400 text-white mx-auto rounded"
              >
                メール送信
              </button>
           </form>
       
       </div>
         
      
    );
  }
   
  export default ContactPage;

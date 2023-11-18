"use client";


const  Contact = () => {
  return(
  
    <form id="my-form-id" method="post" action="https://api.formcake.com/api/form/f62cb2d3-8e3b-4d73-bc57-68458b32f39d/submission" className="mb-3md:w-1/2 w-5/6 p-5 border mx-auto my-5 bg-slate-200 rounded-lg">
      <div className="flex flex-col items-start mb-3 justify-start">
          <h1 className="text-xl font-semibold">お問い合わせ</h1>
        </div>
        <div className="mb-3 relative flex flex-col space-y-1">
          <label htmlFor="name" className="mb-3 text-sm font-light text-gray-500">
            名前
          </label>
          <input
            name="name"
            type="text"
            id="name"
            required
            placeholder="そうわ たろう"
            className="mb-3 rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <div className="mb-3 relative flex flex-col space-y-1">
          <label htmlFor="name" className="mb-3 text-sm font-light text-gray-500">
            メールアドレス
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            placeholder="sample@mail.com"
            className="mb-3 rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <div className="mb-3 relative flex flex-col space-y-1">
          <label htmlFor="massage" className="mb-3 text-sm font-light text-gray-500">
            内容
          </label>
          <textarea
            name="message"
            id="message"
            required
            cols={10}
            rows={5}    
            placeholder="お問い合わせの内容をこちらに書いてください。"
            className="mb-3 rounded-xl border-2 border-gray-400 p-2"
          />
        </div>
        <div className="items-center justify-center">
        <button type='submit' className="flex p-2 px-3 py-3 items-center justify-center rounded-lg bg-blue-600 text-white shadow-blue-500 hover:bg-blue-700 hover:shadow-md">
          <span>送信</span>
        </button>
        </div>
    </form>
  
  );
}
export default Contact;

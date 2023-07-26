
import ClientOnly from "@/app/components/ClientOnly";




const ContactPage =  () => {
  
    return (
      <ClientOnly>
        <div className="w-full bg-white z-10 shadow-sm">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScKlYLRQKhzubFIQ3sTMKJKot8S3xZy25cErEwtA9JDE_vYdw/viewform?embedded=true" width="540" height="1002" >読み込んでいます…</iframe>
        </div>
      </ClientOnly>
    );
  }
   
  export default ContactPage;

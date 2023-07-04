import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import PropertiesClient from "./PropertiesClient";
import Image from 'next/image';

import getCurrentUser from "@/app/actions/getCurrentUser";

import getListings from "../actions/getListings";


const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();
  
    if (!currentUser) {
      return (
        <ClientOnly>
           <div className="w-screen flex justify-center items-center">
          <Image
          src="/images/error.png"
          alt="Error"
          height="100"
          width="100"
          />
          </div>
          <EmptyState
            title="認証エラー"
            subtitle="ログインしてね"
          />
        </ClientOnly>
      );
    }
    const listings = await getListings({ userId: currentUser.id });

    if (listings.length === 0) {
      return (
        <ClientOnly>
          <EmptyState
            title="持ち家が見つかりません"
            subtitle="レンタルできる持ち家がまだ無いようですね"
          />
        </ClientOnly>
      );
    }
  
    return (
      <ClientOnly>
        <PropertiesClient
          listings={listings}
          currentUser={currentUser}
        />
      </ClientOnly>
    );
  }
   
  export default PropertiesPage;
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import TripsClient from "./TripsClient";
import Image from 'next/image';

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";



const TripsPage = async () => {
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
    const reservations = await getReservations({ userId: currentUser.id });

    if (reservations.length === 0) {
      return (
        <ClientOnly>
          <EmptyState
            title="予約が見つかりません"
            subtitle="旅の予定はまだ無いようですね"
          />
        </ClientOnly>
      );
    }
  
    return (
      <ClientOnly>
        <TripsClient
          reservations={reservations}
          currentUser={currentUser}
        />
      </ClientOnly>
    );
  }
   
  export default TripsPage;
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import Image from 'next/image';

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
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

    const reservations = await getReservations({ 
        authorId: currentUser.id });

    if (reservations.length === 0) {
    return (
        <ClientOnly>
        <EmptyState
            title="予約が見つかりません"
            subtitle="あなたの家に予約は入っていないようです"
        />
        </ClientOnly>
    );
    }

    return (
        <ClientOnly>
          <ReservationsClient
            reservations={reservations}
            currentUser={currentUser}
          />
        </ClientOnly>
      );
}
    export default ReservationsPage;
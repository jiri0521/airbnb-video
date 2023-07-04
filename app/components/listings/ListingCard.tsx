'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format, parseISO } from 'date-fns';

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import HeartButton from "../HeartButton";
import Button from "../Button";
import ClientOnly from "../ClientOnly";
import { ja } from 'date-fns/locale';

interface ListingCardProps {
  title: string;
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  createdAt: Date;
  currentUser?: SafeUser | null
};

const ListingCard: React.FC<ListingCardProps> = ({
  title,
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  createdAt,
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.(actionId)
  }, [disabled, onAction, actionId]);

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }
  
    const start = parseISO(reservation.startDate);
    const end = parseISO(reservation.endDate);
  
    const formattedStart = format(start, 'yyyy年M月d日', { locale: ja });
    const formattedEnd = format(end, 'M月dd日', { locale: ja });
  
    return `${formattedStart} ~ ${formattedEnd}`;
  }, [reservation]);
  

  const date_createdAt = data.createdAt;
  const parsedDate = parseISO(date_createdAt);
  const formattedDate = format(parsedDate, "yyyy年M月d日", { locale: ja });
  
  return (
    <div 
      onClick={() => router.push(`/listings/${data.id}`)} 
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div 
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
            
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={data.imageSrc}
            alt="Listing"
          />
          <div className="
            absolute
            top-3
            right-3
          ">
            <HeartButton 
              listingId={data.id} 
              currentUser={currentUser}
            />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {data.title}
        </div>
        <div className="font-light text-lg">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>
        <div className="font-light text-neutral-500">
          投稿日:{formattedDate}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            ¥ {price}
          </div>
          {!reservation && (
            <div className="font-light">1泊</div>
          )}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel} 
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
   );
}
 
export default ListingCard;
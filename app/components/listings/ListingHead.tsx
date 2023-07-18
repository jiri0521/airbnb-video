'use client';

import Image from "next/image";
import ReactPlayer from 'react-player';


import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  videoUrl: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  videoUrl,
  id,
  currentUser
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return ( 
    
    <>    
        <Heading 
            title={title}
            subtitle={`${location?.label}`}
        />
            <div className="
              w-full
              h-[60vh]
              overflow-hidden 
              rounded-xl
              relative
            "
            >
          <ReactPlayer
            url={videoUrl}
            controls={true}
            width="100%"
            height="100%"
            light={imageSrc}
          />
           
            <div
              className="
                absolute
                top-5
                right-5
              "
              >
            <HeartButton 
              listingId={id}
              currentUser={currentUser}
            />
        </div>
        
      </div>
      <div
        className="fixed z-50 bottom-5 right-10 py-5 px-2
                  border-2 bg-red-200 rounded-full cursor-pointer"

        onClick={handleClick}
        >
        ホーム
      </div>
    </>
      
   );
}
 
export default ListingHead;

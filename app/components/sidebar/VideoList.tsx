'use client';

import React, { useState, useEffect } from 'react';
import ListingCard from '../listings/ListingCard';
import SmallListingCard from '../listings/SmallListingCard';

interface Listing {
  id: string;
  videoUrl: string;
  imageSrc: string;
}

const VideoList: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    // APIからデータを取得する
    const fetchListings = async () => {

      
      try {
        const response = await fetch('/api/videolistings');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setListings(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:");
        // ここにエラーハンドリングのロジックを書く
      }
    };
    

    fetchListings();
  }, []);

  return (
    <aside className="sidebar">
      <ul className="video-list">
      {listings.map((listing: any) => (
          <SmallListingCard
          key={listing.id}
          data={listing}
          title={null}
          createdAt={null}
          />
        ))}      
      </ul>
    </aside>
  );
};

export default VideoList;

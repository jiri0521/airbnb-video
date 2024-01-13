'use client';

import React, { useState, useEffect } from 'react';
import SmallListingCard from '../listings/SmallListingCard';

interface Listing {
  id: string;
  videoUrl: string;
  imageSrc: string;
}

// リストをシャッフルする関数
const shuffleArray = (array: any[]) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

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
       // 取得したデータをシャッフルして状態にセットする
       setListings(shuffleArray(data));
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

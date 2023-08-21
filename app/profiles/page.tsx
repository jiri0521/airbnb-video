'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router'; // next/navigation から next/router に修正
import { User } from '@prisma/client';

import Avatar from '../components/ChatAvatar';
import SettingsModal from '../components/sidebar/SettingsModal';

interface ProfileProps {
  currentUser: User;
}

const ProfilePage: React.FC<ProfileProps> = ({ currentUser }) => {
  const router = useRouter(); // next/navigation から next/router に修正
  const [isOpen, setIsOpen] = useState(false);

  // SettingsModal のコンポーネントを適切に処理
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SettingsModal currentUser={currentUser} isOpen={isOpen} onClose={handleModalClose} />
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer hover:opacity-75 transition"
      >
        <Avatar user={currentUser} />
        <div>クリック！</div>
      </div>
    </>
  );
};

export default ProfilePage;

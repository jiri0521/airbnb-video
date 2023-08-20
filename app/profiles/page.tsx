'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client'

import Avatar from '../components/ChatAvatar';
import SettingsModal from '../components/sidebar/SettingsModal';


interface ProfileProps {
    currentUser: User
  }

  const ProfilePage: React.FC<ProfileProps> = ({
  currentUser
  }) => {

    const [isOpen, setIsOpen] = useState(false);
    console.log({ currentUser, }, 'Profile')


return(
  <>
    <SettingsModal currentUser={currentUser} isOpen={isOpen} onClose={() => setIsOpen(false)} /><div
      onClick={() => setIsOpen(true)}
      className="cursor-pointer hover:opacity-75 transition"
    >
      <Avatar user={currentUser} />
<div>クリック！</div>
    </div>
  </>
);
                    
   
}

export default ProfilePage;

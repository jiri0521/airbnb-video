import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from 'react-icons/hi';
import { ImProfile } from 'react-icons/im';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import { TbHomeShare } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: HiChat,
      active: pathname === '/conversations' || !!conversationId
    },
    { 
      label: 'Users', 
      href: '/users', 
      icon: HiUsers, 
      active: pathname === '/users'
    },
    {
      label: 'Home', 
      href: '/',
      icon: BiMoviePlay, 
      active: pathname === '/'
    },
    {
      label: 'Profile', 
      href: '/profiles',
      icon: ImProfile, 
      active: pathname === '/profiles'
    }
  ], [pathname, conversationId]);
  
  return routes;
};

export default useRoutes;

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from 'react-icons/hi';
import { ImProfile } from 'react-icons/im';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import { TbHomeShare } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";


const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [    
    {
      label: 'Home', 
      href: '/',
      icon: BiMoviePlay, 
      active: pathname === '/'
    },
     {
      label: 'favorites', 
      href: '/favorites',
      icon: AiOutlineStar, 
      active: pathname === '/favorites'
     },
    {
      label: 'Profile', 
      href: '/#',
      icon: ImProfile, 
      active: pathname === '/#'
    }
  ], [pathname, conversationId]);
  
  return routes;
};

export default useRoutes;

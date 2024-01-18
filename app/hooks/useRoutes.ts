import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from 'react-icons/hi';
import { ImProfile } from 'react-icons/im';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import { TbHomeShare } from "react-icons/tb";
import { BiMoviePlay, BiLayout,BiHomeAlt } from "react-icons/bi";
import { AiOutlineMail,AiOutlineStar } from "react-icons/ai";


const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [    
    {
      label: 'ホーム', 
      href: '/',
      icon: BiHomeAlt, 
      active: pathname === '/'
    },
     {
      label: 'お気に入り', 
      href: '/favorites',
      icon: AiOutlineStar, 
      active: pathname === '/favorites'
     },
     {
      label: '間取り図', 
      href: '/house',
      icon: BiLayout, 
      active: pathname === '/house'
     },
  {
      label: 'お問い合わせ', 
      href: '/contact',
      icon: AiOutlineMail, 
      active: pathname === '/contact'
    }
  ], [pathname, conversationId]);
  
  return routes;
};

export default useRoutes;

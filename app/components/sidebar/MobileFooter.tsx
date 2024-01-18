// MobileFooter.tsx
'use client';

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return ( 
    <div className="fixed bottom-0 z-40 flex justify-between w-full items-center bg-white border-t-[1px] lg:hidden">
      {routes.map((route) => (
        <MobileItem 
          key={route.href} 
          href={route.href} 
          active={route.active} 
          icon={route.icon}
          label={route.label} // ラベルを追加して渡す
        />
      ))}
    </div>
  );
}

export default MobileFooter;

// MobileItem.tsx
import Link from "next/link";
import clsx from "clsx";
import { IconType } from 'react-icons'; //React Iconsの型をインポート

interface MobileItemProps {
  href: string;
  icon: IconType;
  active?: boolean;
  label: string; // ラベルのプロパティを追加
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({ 
  href,
  icon: Icon, // 変更: JSXでのアイコン表示のため大文字で始める
  active,
  label,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return ( 
    <Link href={href}>
      <div 
        onClick={handleClick}
        className={clsx(
          "group flex flex-col items-center gap-x-3 text-sm font-semibold w-full justify-center p-2 text-gray-500 hover:text-black hover:bg-gray-100",
          active && "bg-gray-100 text-black",
        )}
      >
        <Icon className="h-6 w-6" />
        <span className="text-xs">{label}</span> {/* ラベルを表示 */}
      </div>
    </Link>
  );
}

export default MobileItem;

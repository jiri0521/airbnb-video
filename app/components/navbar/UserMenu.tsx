'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRentModal from '@/app/hooks/useRentModal';

import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';



interface UserMenuProps{
    currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
})  => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen(( value )=> !value);
    },[]);

    const onRent = useCallback(() => {
        if (!currentUser){
            return loginModal.onOpen();
        }
        //Open Rent Modal
        rentModal.onOpen();
    },[currentUser,loginModal,rentModal])

  
    const closeMenu = () => {
        setIsOpen(false);
      };

    const handleClick = () => {
        router.push('/');
        closeMenu();
      };
    
    const handleClick2 = () => {
        router.push('/trips');
        closeMenu();
      };

      const handleClick3 = () => {
        router.push('/favorites');
        closeMenu();
      };

      const handleClick4 = () => {
        router.push('/reservations');
        closeMenu();
      };

      const handleClick5 = () => {
        router.push('/properties');
        closeMenu();
      };

      const handleClick6 = () => {
        router.push('/favorites');
        closeMenu();
      }

    return( 
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div
                onClick={onRent}
                className="
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer
                "
                >
                    
            </div>
            <div 
                onClick={toggleOpen}
                className="
                    p-4
                    md:py-1
                    md:px-2
                    border-[1px]
                    border-neutral-200
                    flex
                    flex-row
                    items-center
                    gap-3
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition                   
            "
            >
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    <Avatar src={currentUser?.image}/>
                </div>
            </div>
        </div>
        { isOpen && (
            <div className="
                absolute
                rounded-xl
                shadow-md
                w-[ 40vw ]
                md:w-3/4
                bg-white
                overflow-hidden
                right-0
                top-12
                text-sm               
            ">
                <div className="flex items-center flex-col gap-2 cursor-pointer">
                    { currentUser ? (
                    <>

                        <MenuItem 
                            onClick={handleClick}
                            label="ホーム"
                        />
                       
                       
                        <MenuItem 
                            onClick={handleClick3}
                            label="お気に入り"
                        />
                       
                        
                        <hr/>
                        <MenuItem 
                            onClick={()=> signOut() }
                            label="ログアウト"
                        />
                    </>
                    ) : (
                    <>
                        <MenuItem 
                            onClick={loginModal.onOpen}
                            label="ログイン"
                        />
                        <MenuItem 
                            onClick={registerModal.onOpen}
                            label="登録"
                        />
                     
                    </>
                    )}
                </div>
            </div>
        )}
    </div> 
    );
}

export default UserMenu;

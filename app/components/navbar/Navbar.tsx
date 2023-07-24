'use client';

import { AiOutlineSearch } from "react-icons/ai";
import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

import { SafeUser } from "@/app/types";

interface NavbarProps{ 
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser,
  }) => {
    console.log({ currentUser });
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm"> 
           <div
            className="
            py-2
            border-b-[1px]
            "
           
           >
                <Container>
                    <div
                    className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    "
                    >
                        <Logo />
                      
                    <div className='flex border items-center gap-4 bg-white px-2 py-1 rounded-lg cursor-pointer'>
                        <input className='text-[#222] outline-none' type="text" placeholder='Search...' />
                        <AiOutlineSearch color="black" />
                    </div>
                    <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>              
            </div>
            <Categories />
        </div> 
     );
}
export default Navbar

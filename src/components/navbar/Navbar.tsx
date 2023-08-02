import Image from "next/image";
import Logo from "@/assets/logo.svg";
import MenuItems from "@/components/navbar/MenuItems";
import ProfileIcon from "@/components/navbar/ProfileIcon";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className={'flex lg:hidden items-center justify-between p-4 md:p-6 bg-semi-dark-blue md:mx-6 md:mt-6 md:rounded-[10px]'}>
            <Image src={Logo} alt={'logo'} height={32} width={32} className={'h-[20px] w-[25px] md:w-[32px] md:h-[25.6px]'}  />
            <MenuItems />
            <ProfileIcon/>
        </nav>
    )
}

export default Navbar;
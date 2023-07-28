import Image from "next/image";
import Logo from "@/assets/logo.svg";
import MenuItems from "@/components/navbar/MenuItems";
import ProfileIcon from "@/components/navbar/ProfileIcon";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className={'flex justify-between p-4 bg-semi-dark-blue'}>
            <Image src={Logo} alt={'logo'} height={33} width={27} />
            <MenuItems />
            <ProfileIcon/>
        </nav>
    )
}

export default Navbar;
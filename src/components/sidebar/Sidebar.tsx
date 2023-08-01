import Image from "next/image";
import Logo from "@/assets/logo.svg";
import MenuItems from "@/components/navbar/MenuItems";
import ProfileIcon from "@/components/navbar/ProfileIcon";
import React from "react";

const Sidebar = () => {
    return (
        <div className={'hidden lg:flex ml-6 h-screen max-h-[960px]'}>
            <div
                className={'rounded-[10px] bg-semi-dark-blue py-8 px-6 my-8 flex flex-col justify-between items-center'}>
                <div className={'flex flex-col gap-y-16'}>
                    <Image src={Logo} alt={'logo'} height={33} width={27}/>
                    <MenuItems vertical={true}/>
                </div>
                <div className={'h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 grid place-items-center'}>
                    <ProfileIcon/>
                </div>

            </div>
        </div>
    );
};


export default Sidebar;

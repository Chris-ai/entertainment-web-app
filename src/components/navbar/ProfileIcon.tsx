import ProfileImage from '@/assets/image-avatar.png'
import Image from "next/image"
import React from "react";

const ProfileIcon: React.FC = () => {
    return <Image
        src={ProfileImage}
        alt={'profile-image'}
        className={'border border-white rounded-full'}
        height={40}
        width={40}
    />
}

export default ProfileIcon;
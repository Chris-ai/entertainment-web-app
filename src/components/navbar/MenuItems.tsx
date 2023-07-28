import MoviesIcon from "@/components/common/icon/Movies";
import BookmarkIcon from "@/components/common/icon/Bookmark";
import HomeIcon from "@/components/common/icon/Home";
import React from "react";
import Link from "next/link";
import TvIcon from "@/components/common/icon/Tv";

const MenuItems: React.FC = () => {
    return (
        <div className={'flex gap-x-6 justify-center items-center'}>
            <Link href={"/"} className={'group/link'}>
                <HomeIcon className={'group-hover/link:fill-white'} active={false}/>
            </Link>
            <Link href={"/auth/login"} className={'group/link'}>
                <MoviesIcon className={'group-hover/link:fill-white'} active={false}/>
            </Link>
            <Link href={"/"} className={'group/link'}>
                <TvIcon className={'group-hover/link:fill-white'} active={false}/>
            </Link>
            <Link href={"/"} className={'group/link'}>
                <BookmarkIcon className={'group-hover/link:fill-white'} active={false}/>
            </Link>
        </div>
    )
}

export default MenuItems;
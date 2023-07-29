'use client'
import MoviesIcon from "@/components/common/icon/Movies";
import BookmarkIcon from "@/components/common/icon/Bookmark";
import HomeIcon from "@/components/common/icon/Home";
import React, {useEffect} from "react";
import Link from "next/link";
import TvIcon from "@/components/common/icon/Tv";
import {usePathname} from "next/navigation";
import useNavigation from "@/hooks/useNavigation";

const MenuItems: React.FC = () => {
    const pathname = usePathname();
    const {pages} = useNavigation();

    useEffect(() => {
    }, [pathname])

    return (
        <div className={'flex gap-x-6 justify-center items-center'}>
            <Link href={pages.homePage} className={'group/link'}>
                <HomeIcon className={'group-hover/link:fill-white'} active={pathname === pages.homePage}/>
            </Link>
            <Link href={pages.moviesPage} className={'group/link'}>
                <MoviesIcon className={'group-hover/link:fill-white'} active={pathname === pages.moviesPage}/>
            </Link>
            <Link href={pages.tvPage} className={'group/link'}>
                <TvIcon className={'group-hover/link:fill-white'} active={pathname === pages.tvPage}/>
            </Link>
            <Link href={pages.bookmarksPage} className={'group/link'}>
                <BookmarkIcon className={'group-hover/link:fill-white'} active={pathname === pages.bookmarksPage}/>
            </Link>
        </div>
    )
}

export default MenuItems;
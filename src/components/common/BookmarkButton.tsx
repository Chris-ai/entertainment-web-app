import React from "react";
import Image from "next/image";
import BookmarkFull from "@/assets/icons/icon-bookmark-full.svg";
import BookmarkEmpty from "@/assets/icons/icon-bookmark-empty.svg";
import Button from "@/components/common/Button";

interface IProps {
    isBookmarked: boolean,
    onClick: () => void
}

const Bookmark: React.FC<{isBookmarked: boolean}> = ({isBookmarked}) => {
    if(isBookmarked){
        return (
            <Image src={BookmarkFull} alt={"bookmark-full-button"} width={32} height={32} className={"h-4 w-4"} />
        );
    }
    else {
        return (
            <Image src={BookmarkEmpty} alt={"bookmark-empty-button"} width={32} height={32} className={"h-4 w-4"}/>
        );
    }
};


const BookmarkButton: React.FC<IProps> = ({isBookmarked, onClick}) => {
    return (
        <div className={'absolute right-2 top-2 bg-dark-blue bg-opacity-25 rounded-full'}>
            <Button appearance={'transparent'} type={'icon'} onClick={onClick} className={'p-2'}>
                <Bookmark isBookmarked={isBookmarked} />
            </Button>
        </div>
    );
};


export default BookmarkButton;
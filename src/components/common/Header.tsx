import React from "react";

const Header: React.FC<{title: string}> = ({title}) => {
    return (
        <h1 className={'text-[1.25rem] tracking-[-0.312px] font-light md:text-hl md:leading-normal md:tracking-[-0.5px]'}>{title}</h1>
    );
};

export default Header;
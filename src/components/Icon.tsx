"use client";
import * as BsIcons from "react-icons/bs";
import * as GoIcons from "react-icons/go";
import * as PiIcons from "react-icons/pi";


export const Icon = ({ classname = '', icon }) => {
    const Icon = BsIcons[icon] || GoIcons[icon] || PiIcons[icon];
    if (!Icon) return <></>;
    return (
        <span className={`w-4 h-4 flex items-center justify-center ${classname}`}>
            <Icon />
        </span>
    );
};

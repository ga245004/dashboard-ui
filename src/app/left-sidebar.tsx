"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidDashboard } from "react-icons/bi";
import { navConfig, NavItem, NavSection } from "./navConfig";
import { Icon } from "@/components/Icon";
import { IconText } from "@/components/IconText";
import { useState } from "react";

export function Logo() {
    return (
        <div className="px-4 gap-2">
            <div className="flex gap-2 px-2 py-2 items-center  ">
                <span className="w-8 h-8 bg-forground rounded-full text-background flex items-center justify-center">
                    <BiSolidDashboard />
                </span>
                <span className="text-lg font-semibold">{"Admin UI"}</span>
            </div>
        </div>
    )
}

export default function LeftSidebar() {
    return (
        <aside className="hidden lg:flex flex-col w-[212] ">
            <Logo />
            <nav className="flex-1 flex flex-col overflow-hidden hover:overflow-auto p-4 gap-2 transition-all">
                {navConfig.map(({ header, links }) => (
                    <Navigation key={header} {...{ header, links, }} />
                ))}
            </nav>
        </aside>
    );
}

export const Navigation = ({ header, links = [] }: NavSection) => {

    return (
        <div className="pb-4 flex flex-col gap-1">
            {header && (
                <span className="flex px-2 py-1 text-forground/40"> {header} </span>
            )}
            {links.map(
                (link) => (
                    <LinkItem key={link.text} {...link} />
                )
            )}
        </div>
    )
}

export const LinkItem = ({ path, type, icon, text, children, level = 0 }: NavItem) => {
    const pathname = usePathname();
    const isActive = pathname === path;
    const isParent = pathname.startsWith(path);

    console.log("isParent", isParent, pathname, path)
    const [expanded, setExpanded] = useState(false);
    const onClick = () => {
        setExpanded(!expanded);

    }

    return (
        <Link href={!children ? (path || "javascript:void(0)") : "javascript:void(0)"} key={text} className={`transition-all `} onClick={onClick}>
            <div className={`flex gap-1 px-2 py-2 items-center group hover:rounded-xl  hover:bg-forground/3 ${isActive ? "rounded-xl bg-forground/4" : ""}`}>
                <button className="flex gap-2 items-center" >
                    {!icon && <span className="w-4 h-4" />}
                    {children ? (
                        <Icon classname="text-forground/20" icon={!expanded ? "GoChevronRight" : "GoChevronDown"}></Icon>
                    ) : (
                        <> {
                            (level != 0 && <span className="w-4 h-4" />)
                        }</>
                    )}
                    <IconText {...{ icon, text }} />
                </button>
            </div>
            {(expanded || isParent) && children && children.map(
                (link) => (
                    <LinkItem key={link.text} {...link} level={1} />
                )
            )}
        </Link>
    )
}
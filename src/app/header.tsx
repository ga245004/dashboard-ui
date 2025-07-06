"use client"
import { useEffect } from "react";
import { Icon } from "../components/Icon";
import { PiSidebar } from "react-icons/pi";


export function Logo() {
    return (
        <div className="gap-2 flex lg:hidden">
            <div className="flex gap-2 px-2 items-center  ">
                <span className="w-4 h-4  rounded-full flex items-center justify-center">
                    <PiSidebar />
                </span>
                <span className="text-lg font-semibold select-none">{"Admin UI"}</span>
            </div>
        </div>
    )
}

export default function Header() {

    useEffect(() => {
        console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)
        if (!localStorage.getItem("theme")) {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleTheme = () => {
        console.log(localStorage.getItem("theme"))
        if (localStorage.theme === "light") {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        }
        else {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }
    }

    const leftSideIcons = [
        { type: 'leftSidebar', icon: "PiSidebar", title: "Toggle left sidebar", className: "hidden lg:flex", },
        { type: 'start', icon: "PiStar", title: "Add to favirote", className: "", }
    ]

    const rightSideIcons = [
        { type: 'search', icon: "PiMagnifyingGlass", title: "Add to favirote", className: "flex xl:hidden", },
        { type: 'theme', icon: "PiSun", title: "Toggle theme", className: "", onClick: toggleTheme },
        { type: 'timer', icon: "PiTimer", title: "View task list", className: "", },
        { type: 'notification', icon: "PiBell", title: "View notifications", className: "", },
        { type: 'rightSidebar', icon: "PiSidebar", title: "Toggle right sidebar", className: "", },
    ]

    return (
        <div className="px-6 py-5 flex flex-col h-16">
            <div className="flex-1 flex items-center">
                <Logo />
                <div className="flex gap-4 items-center">
                    <IconBreadcum icons={leftSideIcons} />
                    <div className="flex gap-4">
                        <div className="text-forground/50 select-none">Dashboards</div>
                        <div className="text-forground/50 select-none">/</div>
                        <div className="select-none">Default</div>
                    </div>
                </div>
                <div className="flex-1"></div>
                <div className="flex gap-4 items-center">
                    <SearchInputText />
                    <IconBreadcum icons={rightSideIcons} />
                </div>
            </div>
        </div>
    )
}

export function IconBreadcum({ icons }) {
    return (
        <div className="flex gap-4">
            {icons.map(({ type, icon, className, onClick }) => {

                return (
                    <button key={type} className={className} onClick={(e) => onClick()} >
                        <Icon icon={icon} />
                    </button>
                )
            })}
        </div>
    )
}

export function SearchInputText() {
    return (
        <div className="hidden xl:flex items-center rounded-full px-2 bg-forground/10 py-1 outline-0 ">
            <Icon icon="PiMagnifyingGlass" classname="text-forground/20" />
            <input className="min-w-8 px-2 text-forground/80 placeholder:text-forground/20" placeholder="Search" type="search" />
            <div className=" w-4 h-4 flex items-center justify-center text-forground/20">/</div>
        </div>
    )
}
import { FiRadio } from "react-icons/fi";
import { PiBugBeetleLight, PiUserLight } from "react-icons/pi";

export default function RightSidebar() {
    return (
        <aside className="w-[280] hidden lg:flex flex-col p-4 gap-4 overflow-hidden hover:overflow-auto ">
            <NotificationsSection />
            <ActivitiesSection />
            <ContactsSection />
        </aside>
    );
}


function NotificationsSection() {
    const header = "Notifications";
    const list = [
        { text: "You fixed a bug.", time: "Just now", icon: <PiBugBeetleLight /> },
        { text: "New user registered.", time: "59 minutes ago", icon: <PiUserLight /> },
        { text: "You fixed a bug.", time: "12 hours ago", icon: <PiBugBeetleLight /> },
        { text: "Andi Lane subscribed to you.", time: "Today, 11:59 AM", icon: <FiRadio /> }
    ]

    return (
        <SideSection {...{ header }}>
            <div className="px-1 ">
                {list.map(
                    ({ text, time, icon }) => {
                        return (
                            <div key={time} className="flex gap-2 py-2 relative">
                                <div className="w-6 h-6 flex items-center justify-center bg-primary/20 rounded-full">
                                    <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="text-xs">{text}</div>
                                    <div className="font-extralight text-xs">{time}</div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>

        </SideSection>
    )
}

function ActivitiesSection() {

    const header = "Activities";
    const list = [
        { text: "Changed the style.", time: "Just now", icon: <PiUserLight /> },
        { text: "Released a new version.", time: "59 minutes ago", icon: <PiUserLight /> },
        { text: "Submitted a bug.", time: "12 hours ago", icon: <PiBugBeetleLight /> },
        { text: "Modified A data in Page X.", time: "Today, 11:59 AM", icon: <PiUserLight /> },
        { text: "Deleted a page in Project X.", time: "Feb 2, 2025", icon: <PiUserLight /> }
    ]
    return <SideSection {...{ header }}>
        <div className="px-1">
            {list.map(
                ({ text, time, icon }, index) => {
                    const isLast = (index == (list.length - 1))
                    return (
                        <div key={time} className="flex gap-2 py-2 relative">
                            <div className="w-6 h-6 flex items-center justify-center bg-primary/20 rounded-full">
                                <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <div className="text-xs">{text}</div>
                                <div className="font-extralight text-xs">{time}</div>
                            </div>
                            {!isLast && <div className="absolute left-3 -bottom-1 w-[1] pt-2 h-4 rounded-md border-1 border-forground/20 border-dashed"></div>}
                        </div>
                    )
                }
            )}
        </div>

    </SideSection>
}

function ContactsSection() {
    const header = "Contacts";
    const list = [
        { text: "Natali Craig", icon: <PiUserLight /> },
        { text: "Drew Cano", icon: <PiUserLight /> },
        { text: "Andi Lane", icon: <PiUserLight /> },
        { text: "Koray Okumus", icon: <PiUserLight /> },
        { text: "Kate Morrison", icon: <PiUserLight /> },
        { text: "Melody Macy", icon: <PiUserLight /> }
    ]

    return <SideSection {...{ header }} >
        <div className="px-1 py-1">
            {list.map(
                ({ text, icon }) => {

                    return (
                        <div key={text} className="flex items-center gap-2 py-2">
                            <div className="w-6 h-6 flex items-center justify-center bg-primary/20 rounded-full">
                                <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <div className="text-xs">{text}</div>
                            </div>
                        </div>
                    )
                }
            )}
        </div>

    </SideSection>
}


function SideSection({ header, children = <></> }) {

    return (
        <div className="flex flex-col gap-0.5">
            <div className="px-1 pt-2 font-medium">{header}</div>
            {children}
        </div>
    )
}
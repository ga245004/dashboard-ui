
export interface NavSection {
    header: string
    links?: NavItem[]
}

export interface NavItem {
    text?: string
    path?: string
    notSelectable?: boolean;
    expanded?: boolean;
    type?: string
    icon?: string
    children?: NavItem[],
    level?: number
}

export const navConfig: NavSection[] = [
    {
        header: "Favorites",
        links: [
            {
                notSelectable: false,
                icon: 'GoDotFill',
                text: 'Overview',
                path: '/overview',
                type: 'link'
            },
            {
                notSelectable: false,
                icon: 'GoDotFill',
                text: 'Projects',
                path: '/projects',
                type: 'link'
            }
        ]
    },
    {
        header: "Dashboards",
        links: [
            {
                notSelectable: true,
                text: "Overview",
                path: '/overview',
                icon: 'PiChartPieSliceFill',
            },
            {
                text: 'eCommerce',
                path: '/ecommerce',
                icon: 'PiShoppingBagOpen',
                type: 'children',
            },
            {
                text: 'Projects',
                path: '/projects',
                icon: 'BsFolder',
                type: 'children',
            },
        ]
    },
    {
        header: "Pages",
        links: [
            {
                expanded: true,
                icon: 'PiUserCircleDuotone',
                text: 'User Profile',
                type: 'children',
                path: "/user/",
                children: [
                    {
                        text: "Overview", path: "/user/overview"
                    },
                    { text: "Projects", path: "/user/projects", },
                    { text: "Campaigns", path: "/user/campaigns", },
                    {
                        text: "Documents", path: "/user/documents", 
                        children: [{
                            text: "Contacts", 
                        }]
                    },
                    { text: "Followers", path: "/user/followers", },
                ]
            },
            {
                icon: 'PiUserListDuotone',
                path: "/account",
                text: 'Account',
                type: 'children',
            },
            {
                icon: 'PiUsersThreeDuotone',
                text: 'Corporate',
                path: "/corporate",
                type: 'children'
            },
            {
                icon: 'PiArticleDuotone',
                text: 'Blog',
                path: "/blog",
                type: 'children'
            },
            {
                icon: 'PiChatsTeardropDuotone',
                text: 'Social',
                path: "/social",
                type: 'children'
            }
        ]
    },
]

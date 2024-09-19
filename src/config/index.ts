export const PRODUCT_CATEGORIES = [
    {
        label: "UI KIT",
        value: "ui_kits" as const,
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSRC: "/nav/ui-kits/mixed.jpg"
            },{
                name: "New arrival",
                href: "#",
                imageSRC: "/nav/ui-kits/blue.jpg"
            },{
                name: "Best sellers",
                href: "#",
                imageSRC: "/nav/ui-kits/purple.jpg"
            },
        ]
    },{
        label: "ICONS",
        value: "icons" as const,
        featured: [
            {
                name: "Favorite icon pack",
                href: "#",
                imageSRC: "/nav/icons/picks.jpg"
            },{
                name: "New arrival",
                href: "#",
                imageSRC: "/nav/icons/new.jpg"
            },{
                name: "Best selling icons",
                href: "#",
                imageSRC: "/nav/icons/bestsellers.jpg"
            },
        ]
    }
]
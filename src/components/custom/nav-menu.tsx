import { cn } from "@/lib/utils";
import React from "react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import useIsMobile from "@/hooks/custom/use-mobile";
import useNavigationData from "@/hooks/custom/use-nav-data";
import { NavigationType } from "@/lib/types";

const NavMenu: React.FC<{ toggle: boolean }> = ({ toggle }) => {
    const isMobile = useIsMobile();
    const navigations = useNavigationData().filter(
        n => n.placement === "header" || n.placement === "both"
    );

    return (
        <NavigationMenu
            className={cn(`max-w-full py-0`,
                isMobile && toggle && "p-4 absolute left-0 top-12.5 items-start w-full justify-start backdrop-blur-sm bg-background",
                isMobile && !toggle && 'hidden lg:flex')}>
            <NavigationMenuList className={cn(`flex-row`, isMobile && toggle && "flex-col items-start")}>
                {navigations.map(({ title, items, intro, url }: NavigationType) => (
                    <NavigationMenuItem key={title}>
                        {toggle ? (
                            <ul>
                                {items && items.map((item) => (
                                    <ListItem
                                        key={item.title}
                                        title={item.title}
                                        href={item.url}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <>
                                {items && items?.length ? (
                                    <>
                                        <NavigationMenuTrigger className="dark:text-zinc-200 bg-transparent hover:bg-popover">{title}</NavigationMenuTrigger>
                                        <NavigationMenuContent className="p-0!">
                                            <ul className="grid gap-1 p-3 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
                                                {intro && (
                                                    <li className="row-span-3">
                                                        <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md 
                                                        bg-primary/90 hover:bg-primary/85 dark:bg-primary/50 hover:dark:bg-primary/45
                                                        p-6 no-underline outline-hidden focus:shadow-md transition-colors"
                                                            href="/"
                                                        >
                                                            <span className="pt-5 font-italiana text-2xl text-white font-bold uppercase tracking-widest">
                                                                Anush
                                                            </span>
                                                            <div className="pb-1 pt-4 text-sm font-medium text-white">
                                                                {intro.abbr}
                                                            </div>
                                                            <p className="text-xs leading-tight text-white">
                                                                {intro.content}
                                                            </p>
                                                        </NavigationMenuLink>
                                                    </li>
                                                )}
                                                {items.map((item) => (
                                                    <ListItem
                                                        key={item.title}
                                                        title={item.title}
                                                        href={item.url}
                                                    >
                                                        {item.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <ul>
                                        <MenuItem
                                            key={title}
                                            title={title}
                                            href={url}
                                        >
                                            {title}
                                        </MenuItem>
                                    </ul>
                                )}
                            </>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
export default NavMenu;

const ListItem = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<"a"> & { title: string; children?: React.ReactNode }
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        `select-none flex flex-col gap-1 rounded-md p-3 leading-none no-underline
                        outline-hidden transition-colors hover:bg-accent`,
                        className
                    )}
                    {...props}
                >
                    <span className="text-sm lowercase font-medium leading-none dark:text-zinc-200">
                        &lt;{title} /&gt;
                    </span>
                    <span className="line-clamp-3 text-xs leading-snug text-muted-foreground dark:text-zinc-400">
                        {children}
                    </span>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


const MenuItem = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<"a"> & { title: string; url?: string }
>(({ title, className, url, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        `select-none flex flex-col gap-1 hover:rounded-md p-3 leading-none no-underline
                        outline-hidden transition-colors hover:bg-accent`,
                        className
                    )}
                    {...props}
                >
                    <span className="text-sm capitalize font-medium leading-none dark:text-zinc-200">
                        {title}
                    </span>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
MenuItem.displayName = "MenuItem"
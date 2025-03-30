import React from "react";
import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import useNavigationData from "@/hooks/custom/use-nav-data";
import useIsMobile from "@/hooks/custom/use-mobile";
import { NavigationType } from "@/lib/types";


const NavMenu: React.FC<{ toggle: boolean }> = ({ toggle }) => {
    const isMobile = useIsMobile();
    const navigations = useNavigationData();

    return (
        <NavigationMenu
            className={cn(`max-w-full py-0`,
                isMobile && toggle && "p-4 absolute left-0 top-[60px] items-start w-full justify-start bg-white dark:bg-zinc-900",
                isMobile && !toggle && 'hidden lg:flex')}>
            <NavigationMenuList className={cn(`flex-row`, isMobile && toggle && "flex-col items-start")}>
                {navigations.map(({ title, items, intro }: NavigationType) => (
                    <NavigationMenuItem key={title}>
                        {toggle ? (
                            <ul>
                                {items.map((item) => (
                                    <ListItem
                                        key={item.title}
                                        title={item.title}
                                        href={item.url}
                                    />
                                ))}
                            </ul>
                        ) : (
                            <>
                                <NavigationMenuTrigger className="dark:text-zinc-200">{title}</NavigationMenuTrigger>
                                <NavigationMenuContent className="!p-0">
                                    <ul className="grid gap-1 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
export default NavMenu;

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        `select-none flex flex-col gap-1 rounded-md p-3 leading-none no-underline
                        outline-hidden transition-colors hover:bg-gray-50 hover:dark:bg-zinc-700/30`,
                        className
                    )}
                    {...props}
                >
                    <p className="text-sm font-medium leading-none dark:text-zinc-200">{title}</p>
                    <p className="line-clamp-3 text-xs leading-snug text-muted-foreground dark:text-zinc-400">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
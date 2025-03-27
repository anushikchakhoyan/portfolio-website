import React from "react";
import { useTranslations } from "next-intl";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import useNavigationData from "@/hooks/custom/use-nav-data";
import { NavigationType } from "@/lib/types";
import { cn } from "@/lib/utils";

const NavMenu: React.FC<{ toggle: boolean }> = ({ toggle }) => {
    const t = useTranslations();
    // const isMobile = useIsMobile();
    const isMobile = false;
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
                                <NavigationMenuContent className="dark:bg-zinc-800">
                                    <ul className="grid gap-1 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] dark:bg-zinc-800">
                                        {intro && (
                                            <li className="row-span-3">
                                                <NavigationMenuLink>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md 
                                                        bg-primary-400 hover:bg-primary/90 dark:bg-primary/50 hover:dark:bg-primary/40
                                                        p-6 no-underline outline-none focus:shadow-md transition-colors"
                                                        href="/"
                                                    >
                                                        <span className="pt-5 font-italiana text-2xl text-white font-bold uppercase tracking-widest">Anush</span>

                                                        <div className="pb-1 pt-4 text-sm font-medium text-white">
                                                            {intro.abbr}
                                                        </div>
                                                        <p className="text-xs leading-tight text-white">
                                                            {intro.content}
                                                        </p>
                                                    </a>
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
                        `block select-none space-y-1 rounded-md p-3 leading-none no-underline 
                        outline-none transition-colors hover:bg-gray-50 hover:dark:bg-zinc-700/30`,
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
"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { appliances_content } from "@/lib/assets/appliances";
import { Drawer } from "../core/drawer";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row items-center h-16 justify-between text-slate-600 w-full bg-purple-600">
      <Link href="/">
        <span className=" origin-center  hover:rotate-45 text-white px-2">
          Kaphstore
        </span>
      </Link>

      <span className="hidden lg:flex">
        <NavigationMenu className="text-slate-700 ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/appliances" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-purple-700 hover:text-base hover:bg-slate-200  bg-purple-600 text-white`}
                >
                  Appliances
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/phones-tablets" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-purple-700 hover:text-base hover:bg-slate-200  bg-purple-600 text-white`}
                >
                  Phones & Tablets
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/computers" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-purple-700 hover:text-base hover:bg-slate-200  bg-purple-600 text-white`}
                >
                  Computers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/groceries" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-purple-700 hover:text-base hover:bg-slate-200  bg-purple-600 text-white`}
                >
                  Groceries
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/electronics" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-purple-700 hover:text-base hover:bg-slate-200  bg-purple-600 text-white`}
                >
                  Electronics
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/fashion" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-purple-700 hover:text-base hover:bg-slate-200  bg-purple-600 text-white`}
                >
                  Fashion
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/health-beauty" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-purple-700 hover:text-base hover:bg-slate-200  bg-purple-600 text-white`}
                >
                  Health and beauty
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/home-office" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-purple-700 hover:text-base hover:bg-slate-200  bg-purple-600 text-white`}
                >
                  Home and office
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </span>

      <div className=" flex justify-between items-center flex-row gap-5 px-2">
        <Button className="hidden lg:block border-purple-500 border-2 border-purple-500/100 . bg-white text-purple-700 hover:bg-purple-700 hover:text-white">
          Sign in
        </Button>
        <span className="block lg:hidden">
          <Drawer />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

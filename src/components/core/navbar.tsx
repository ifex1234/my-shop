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
// import { Drawer } from "../core/drawer";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

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
              <NavigationMenuTrigger className=" hover:text-purple-700 hover:text-base  bg-purple-600 text-white">
                Appliances
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] p-2 md:w-[300px] md:grid-cols-2 lg:w-[500px] ">
                  {appliances_content.map((component, idx) => (
                    <ListItem
                      key={idx}
                      href={component}
                      className=" hover:bg-purple-400 hover:text-white"
                    >
                      {component}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className=" hover:text-purple-700 hover:text-base  bg-purple-600 text-white">
                Phones & Tablets
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] p-2 md:w-[300px] md:grid-cols-2 lg:w-[500px] ">
                  {appliances_content.map((component, idx) => (
                    <ListItem
                      key={idx}
                      href={component}
                      className=" hover:bg-purple-400 hover:text-white"
                    >
                      {component}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className=" hover:text-purple-700 hover:text-base  bg-purple-600 text-white">
                Computers
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] p-2 md:w-[300px] md:grid-cols-2 lg:w-[500px] ">
                  {appliances_content.map((component, idx) => (
                    <ListItem
                      key={idx}
                      href={component}
                      className=" hover:bg-purple-400 hover:text-white"
                    >
                      {component}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className=" hover:text-purple-700 hover:text-base  bg-purple-600 text-white">
                Groceries
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] p-2 md:w-[300px] md:grid-cols-2 lg:w-[500px] ">
                  {appliances_content.map((component, idx) => (
                    <ListItem
                      key={idx}
                      href={component}
                      className=" hover:bg-purple-400 hover:text-white"
                    >
                      {component}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className=" hover:text-purple-700 hover:text-base  bg-purple-600 text-white">
                Electronics
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] p-2 md:w-[300px] md:grid-cols-2 lg:w-[500px] ">
                  {appliances_content.map((component, idx) => (
                    <ListItem
                      key={idx}
                      href={component}
                      className=" hover:bg-purple-400 hover:text-white"
                    >
                      {component}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className=" hover:text-purple-700 hover:text-base  bg-purple-600 text-white">
                Fashion
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] p-2 md:w-[300px] md:grid-cols-2 lg:w-[500px] ">
                  {appliances_content.map((component, idx) => (
                    <ListItem
                      key={idx}
                      href={component}
                      className=" hover:bg-purple-400 hover:text-white"
                    >
                      {component}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className=" hover:text-purple-700 hover:text-base  bg-purple-600 text-white">
                Health & Beauty
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] p-2 md:w-[300px] md:grid-cols-2 lg:w-[500px] ">
                  {appliances_content.map((component, idx) => (
                    <ListItem
                      key={idx}
                      href={component}
                      className=" hover:bg-purple-400 hover:text-white"
                    >
                      {component}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </span>

      <div className=" flex justify-between items-center flex-row gap-5 px-2">
        <Button className="hidden lg:block border-purple-500 border-2 border-purple-500/100 . bg-white text-purple-700 hover:bg-purple-700 hover:text-white">
          Sign in
        </Button>
        {/* <span className="block lg:hidden">
          <Drawer />
        </span> */}
      </div>
    </nav>
  );
}

export default Navbar;

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

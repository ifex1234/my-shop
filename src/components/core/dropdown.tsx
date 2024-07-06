"use client";
import {
  LuLogOut,
  LuHeart,
  LuSettings,
  LuUser,
  LuBook,
  LuLogIn,
} from "react-icons/lu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown, FaUser } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Dropdown() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className=" flex flex-row gap-x-2 border-none ring-0"
          variant="outline"
        >
          <FaUser />
          Account <FaAngleDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link
            className=" hover:bg-slate-300 cursor-pointer flex flex-row h-10 w-full items-center gap-x-0 px-3 rounded-md"
            href="/profile"
          >
            <LuUser className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>

          <DropdownMenuItem className="cursor-pointer">
            <LuSettings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>

          <Link
            className=" hover:bg-slate-300 cursor-pointer flex flex-row h-10 w-full items-center gap-x-0 px-3 rounded-md"
            href="/orders"
          >
            <LuBook className="mr-2 h-4 w-4" />
            <span>My orders</span>
          </Link>

          <Link
            className=" hover:bg-slate-300 cursor-pointer flex flex-row h-10 w-full items-center gap-x-0 px-3 rounded-md"
            href="/favourites"
          >
            <LuHeart className="mr-2 h-4 w-4" />
            <span>Favorites</span>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {isLoggedIn ? (
          <Link
            className="bg-red-500 text-white hover:bg-red-700 cursor-pointer flex flex-row h-10 w-full items-center gap-x-3 px-3 rounded-md"
            href="/login"
          >
            <LuLogOut />
            <span>Log out</span>
          </Link>
        ) : (
          <Link
            className="bg-purple-600 text-white hover:bg-purple-800 cursor-pointer flex flex-row h-10 w-full items-center gap-x-3 px-3 rounded-md"
            href="/login"
          >
            <LuLogIn />
            <span>Log in</span>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

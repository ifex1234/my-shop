import { LuLogOut, LuHeart, LuSettings, LuUser, LuBook } from "react-icons/lu";

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

export function Dropdown() {
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
          <DropdownMenuItem className="cursor-pointer">
            <LuUser className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <LuSettings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <LuBook className="mr-2 h-4 w-4" />
            <span>My orders</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <LuHeart className="mr-2 h-4 w-4" />
            <span>Favorites</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem className=" bg-purple-600 text-white hover:bg-purple-800 cursor-pointer">
          <LuLogOut className="mr-2 h-5 w-4 hover:bg-purple-800" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

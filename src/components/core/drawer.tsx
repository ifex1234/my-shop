// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { MdMenu } from "react-icons/md";
// import { drawerLink, drawerLink2 } from "@/data/drawerLink";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Separator } from "../ui/separator";

// export function Drawer() {
//   const pathname = usePathname();
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <MdMenu size={30} />
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader className="mt-5 md:hidden">
//           <Input placeholder="Search..." />
//         </SheetHeader>
//         <span className="flex gap-3 flex-col w-full my-7">
//           {drawerLink.map((link) => (
//             <SheetClose className="flex float-start" key={link.id} asChild>
//               <Link
//                 className={`${pathname === link.href ? "active" : ""} px-2`}
//                 href={link.href}
//               >
//                 {link.label}
//               </Link>
//             </SheetClose>
//           ))}
//           <Separator />
//           <nav className="flex flex-col gap-3">
//             {drawerLink2.map((link) => (
//               <SheetClose className="flex float-start" key={link.id} asChild>
//                 <Link
//                   key={link.id}
//                   href={link.href}
//                   className={`${pathname === link.href ? "active" : ""} px-2`}
//                 >
//                   {link.label}
//                 </Link>
//               </SheetClose>
//             ))}
//           </nav>
//         </span>
//         <SheetFooter>
//           <SheetClose asChild>
//             <Button className=" w-full border-purple-500 border-2 border-purple-500/100 . bg-white text-purple-700 hover:bg-purple-700 hover:text-white">
//               Sign in
//             </Button>
//           </SheetClose>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// }

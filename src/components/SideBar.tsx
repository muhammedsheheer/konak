"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState, type FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => setShowSubMenu((prev) => !prev);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/home/hero/logo.png"
              width={162}
              height={35}
              alt="Foodo"
              className="w-28"
            />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-center justify-center gap-7 pt-14">
            <Link
              href="/"
              className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              Home
            </Link>
            <button
              onClick={toggleSubMenu}
              className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              <span>Menu</span>
            </button>

            {showSubMenu && (
              <div className="ml-6 flex w-full flex-col gap-6 pb-4 text-sm text-white">
                <Link
                  className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-[#323232]"
                  href="/menu"
                  // className="hover:underline"
                >
                  Main Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-[#323232]"
                  href={"/pdf/Main_Menu.pdf"}
                  target="_blank"
                  // className="hover:underline"
                >
                  Food Menu
                </Link>
                <Link
                  className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-[#323232]"
                  href={"/pdf/Take_Out_Menu.pdf"}
                  target="_blank"
                  // className="hover:underline"
                >
                  Take Out Menu
                </Link>
              </div>
            )}
            {/* <Link
              href="/menu"
              className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              Menu
            </Link> */}
            <Link
              href="/about-us"
              className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              Contact
            </Link>
            <Link
              href="/table-booking"
              className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              Table Booking
            </Link>
            {/* <Link
              href=""
              className="flex w-full justify-center p-0 font-playfair text-2xl font-normal text-[#323232]"
            >
              Products
            </Link> */}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

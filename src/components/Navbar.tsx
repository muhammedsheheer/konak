"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [positioned, setPositioned] = React.useState("bottom");

  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const imageSrc =
    pathname === "/table-booking"
      ? "/images/home/hero/logof.png"
      : "/images/home/hero/logof.png";

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 h-[10vh] w-full pt-4 md:pt-10`,
        pathname === "/" ? "bg-transparent" : "pt-4 md:pt-5",
      )}
    >
      {/*big screen */}
      <div className="hidden px-4 md:block md:px-14">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={imageSrc}
                width={281}
                height={74}
                alt="logo"
                className="w-28"
              />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-20">
            <Link
              href={"/"}
              className={`text-center font-sofia_sans text-sm font-[700] uppercase tracking-[2.106px] hover:underline ${
                pathname === "/table-booking" ? "text-[#fff]" : "text-[#fff]"
              }`}
            >
              Home
            </Link>
            {/* <Link
              href={"/menu"}
              className={`text-center font-sofia_sans text-sm font-[700] uppercase tracking-[2.106px] hover:underline ${
                pathname === "/table-booking" ? "text-[#fff]" : "text-[#fff]"
              }`}
            >
              Menu
            </Link> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className={`text-center font-sofia_sans text-sm font-[700] uppercase tracking-[2.106px] hover:underline ${
                    pathname === "/table-booking"
                      ? "text-[#fff]"
                      : "text-[#fff]"
                  }`}
                  variant="link"
                >
                  Menu
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60">
                {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={positioned}
                  onValueChange={setPositioned}
                >
                  <DropdownMenuRadioItem value="menu">
                    <Link className="uppercase text-[#000]" href={"/menu"}>
                      Main Menu
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Main_Menu">
                    <Link
                      className="uppercase text-[#000]"
                      href={"/pdf/Main_Menu.pdf"}
                      target="_blank"
                    >
                      Food Menu
                    </Link>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Take_Out_Menu">
                    <Link
                      className="uppercase text-[#000]"
                      href={"/pdf/Take_Out_Menu.pdf"}
                      target="_blank"
                    >
                      Take Out Menu
                    </Link>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <Link
              href={""}
              className={
                "text-center font-sofia_sans text-sm font-[700] uppercase tracking-[2.106px] text-[#fff] hover:underline"
              }
            >
              Products
            </Link> */}
            <Link
              href={"/about-us"}
              className={`text-center font-sofia_sans text-sm font-[700] uppercase tracking-[2.106px] hover:underline ${
                pathname === "/table-booking" ? "text-[#fff]" : "text-[#fff]"
              }`}
            >
              About
            </Link>

            <Link
              href={"/contact"}
              className={`text-center font-sofia_sans text-sm font-[700] uppercase tracking-[2.106px] hover:underline ${
                pathname === "/table-booking" ? "text-[#fff]" : "text-[#fff]"
              }`}
            >
              Contact us
            </Link>
          </div>
          <div className="">
            <Link href={"/table-booking"}>
              <Button
                className={
                  "rounded-none border border-[#000] bg-[#000] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#fff] hover:bg-[#222] hover:text-[#fff]"
                }
              >
                Reserve
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logof.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-16"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate text-[#fff]">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

"use client";
import React, { FunctionComponent, ReactNode, useEffect, useRef } from "react";
import {
  Basket,
  Heart,
  House,
  MagnifyingGlass,
  User,
  UserCircle,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavbarProps {}

const dataIcon = [
  {
    href: "/",
    icon: <House size={32} />
  },
  {
    href: "/details/123",
    icon:  <MagnifyingGlass size={26} />
  },
  {
    href: "/cart",
    icon:  <Basket size={26} />
  },
  {
    href: "/like",
    icon:  <Heart size={26} />
  },
  {
    href: "/user",
    icon:  <User size={26} />
  },
]

const Navbar: FunctionComponent<NavbarProps> = () => {
  const path = usePathname()

  return (
    <div className="mw500   min-[450px]:shadow-none bottom-0  shadow-inner w-full  fixed  rounded-t">
      <div className=" rounded h-16 mxb-10 bg-color-primary flex justify-evenly items-center">
          {dataIcon.map((cb,index)=>{
            return(
              <IconsNav href={cb.href} active={path === cb.href} key={index} >{cb.icon}</IconsNav>
            )
          })}
      </div>
    </div>
  );
};

export default Navbar;

interface iconsProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}


export const IconsNav: FunctionComponent<iconsProps> = ({ children, href, active,  }) => {
  return (
    <Link
      href={href}
      className="hover:bg-color-gray rounded-full p-2 flex flex-col items-center"
    >
      {children}
      <div  className={`mt-1.5 ${active ? "fade-up" : "opacity-0"}  h-1.5 w-1.5 rounded-full bg-color-secondary`}></div>
    </Link>
  );
};

"use client";
import { FunctionComponent } from "react";
import {
  Basket,
  Heart,
  House,
  MagnifyingGlass,
  User,
  UserCircle,
} from "@phosphor-icons/react";
import Link from "next/link";
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className="bg-color-primary w-full h-16 bottom-0 fixed px-3 rounded-t">
      <div className=" rounded h-full flex justify-evenly items-center">
        <Link href={"/"} className="hover:bg-color-gray rounded-full p-2">
          <House size={32} />
        </Link>
        <Link href={"/details/123"} className="hover:bg-color-gray rounded-full p-2">
          <MagnifyingGlass size={32} />
        </Link>
        <Link href={"/cart"} className="hover:bg-color-gray rounded-full p-2">
          <Basket size={32} />
        </Link>
        <Link href={"/like"} className="hover:bg-color-gray rounded-full p-2">
          <Heart size={32} />
        </Link>
        <Link href={"/user"} className="hover:bg-color-gray rounded-full p-2">
          <User size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

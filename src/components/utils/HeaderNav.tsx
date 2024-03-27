"use client"
import { Basket, CaretLeft, DotsThree, Heart, MagnifyingGlass } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface HeaderNavProps {
    liked?: boolean
    model: "dot" | "like" | "manify"  | "cart"
    title?: string
}

const HeaderNav: FunctionComponent<HeaderNavProps> = ({liked, model, title}) => {
  const router = useRouter()
  const path = usePathname()
  const handleClick = () => {
    router.back()
    router.push("/")
  }
  return (
    <div className="flex justify-between">
      <CaretLeft onClick={handleClick} size={32} weight="bold" className="cursor-pointer" />
      <p className="text-xl font-bold">{title}</p>
      {model === "like" && <Heart className="cursor-pointer" size={32} color={liked ? "#ff4242" : "#151514"} weight={liked ? "fill" : "bold"} /> }
      {model === "dot" && <DotsThree className="cursor-pointer" size={32} color="#151514" weight="bold" /> }
      {model === "manify" && <MagnifyingGlass className="cursor-pointer" size={32} weight="bold" />}
      {model === "cart" && <Basket className="cursor-pointer" size={32} weight="bold" />}
    </div>
  );
};

export default HeaderNav;

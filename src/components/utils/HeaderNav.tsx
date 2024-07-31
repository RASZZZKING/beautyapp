"use client"
import { Basket, CaretLeft, DotsThree, Heart, MagnifyingGlass } from "@phosphor-icons/react";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";

interface HeaderNavProps {
    liked?: boolean
    model?: "dot" | "like" | "manify"  | "cart"
    title?: string
}

const HeaderNav: FunctionComponent<HeaderNavProps> = ({liked, model, title}) => {
  const router = useRouter()
  const path = usePathname()
  const [likesCondition, setLikesCondition] = useState<boolean | undefined>(liked)
  const handleClick = () => {
    router.back()
    router.push("/")
  }
  const handleSearch = () => {
    router.push("/search/you")
  }
  const likeHandler = () => {
     setLikesCondition(!likesCondition)
  }
  return (
    <div className="flex justify-between">
      <CaretLeft onClick={handleClick} size={32} weight="bold" className="cursor-pointer" />
      <p className="text-xl font-bold">{title}</p>
      {model === "like" && <Heart onClick={likeHandler} className={`cursor-pointer ${likesCondition && "liked"}`} size={32} color={likesCondition ? "#ff4242" : "#151514"} weight={likesCondition ? "fill" : "bold"} /> }
      {model === "dot" && <DotsThree className="cursor-pointer" size={32} color="#151514" weight="bold" /> }
      {model === "manify" && <MagnifyingGlass onClick={handleSearch} className="cursor-pointer" size={25} weight="bold" />}
      {model === "cart" && <ShoppingCart className="cursor-pointer" size={32} weight="bold" />}
    </div>
  );
};

export default HeaderNav;

import { CaretLeft, DotsThree, Heart } from "@phosphor-icons/react";
import { FunctionComponent } from "react";

interface HeaderNavProps {
    liked: boolean
    model: "dot" | "like"
    title?: string
}

const HeaderNav: FunctionComponent<HeaderNavProps> = ({liked, model, title}) => {
  return (
    <div className="flex justify-between">
      <CaretLeft size={32} weight="bold" />
      <p className="text-xl font-bold">{title}</p>
      {model === "like" && <Heart size={32} color={liked ? "#ff4242" : "#151514"} weight={liked ? "fill" : "bold"} /> }
      {model === "dot" && <DotsThree size={32} color="#151514" weight="bold" /> }
    </div>
  );
};

export default HeaderNav;

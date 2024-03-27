"use client"
import { Basket, ChatCentered, ChatCenteredDots, ChatTeardrop, ChatTeardropDots, ClockCounterClockwise, DotsThree, Ticket } from "@phosphor-icons/react";
import { FunctionComponent } from "react";

interface HeaderUserProps {}

const HeaderUser: FunctionComponent<HeaderUserProps> = () => {
  return (
    <div className="flex justify-between">
      <ChatCentered size={32} className="cursor-pointer" />
      <DotsThree size={32} className="cursor-pointer" />
    </div>
  );
};

export default HeaderUser;

"use client"
import { Basket, ClockCounterClockwise, Ticket } from "@phosphor-icons/react";
import { FunctionComponent } from "react";

interface HeaderUserProps {}

const HeaderUser: FunctionComponent<HeaderUserProps> = () => {
  return (
    <div className="flex justify-between">
      <ClockCounterClockwise size={32} />
      <Ticket size={32} />
    </div>
  );
};

export default HeaderUser;

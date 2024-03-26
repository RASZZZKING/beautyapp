"use client";
import {
  Clipboard,
  Coins,
  CreditCard,
  EnvelopeSimple,
  Package,
  Question,
  Tag,
  TagSimple,
  Ticket,
  Truck,
} from "@phosphor-icons/react";
import { FunctionComponent } from "react";

interface FeaturesUserProps {}

const FeaturesUser: FunctionComponent<FeaturesUserProps> = () => {
  return (
    <>
    <div className="  gap-4 flex flex-col">
      <div className="bg-color-primary rounded-lg shadow-xl  flex flex-col p-2 gap-2">
        <div className="flex items-center gap-2 border-b  border-color-placeholder pb-1">
          <Clipboard size={28} className="font-semibold" />
          <p className="grow text-base font-semibold text-color-secondary">
            My Purchase
          </p>
          <p className="text-xs opacity-50">View Purchase History</p>
        </div>
        <div className="flex items-center justify-around">
          <div className="flex flex-col justify-center items-center">
            <CreditCard size={28} />
            <p className="text-xs -mt-0.5">Pay</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Truck size={28} />
            <p className="text-xs -mt-0.5">Ship</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Package size={28} />
            <p className="text-xs -mt-0.5">Receive</p>
          </div>
        </div>
      </div>
      <div className="bg-color-primary rounded-lg shadow-xl flex flex-col p-2 gap-2">
        <div className="flex items-center gap-2 border-b  border-color-placeholder pb-1">
          <Ticket size={28} className="font-semibold" />
          <p className="grow text-base font-semibold text-color-secondary">
            My Voucher
          </p>
          <p className="text-xs opacity-50">View Voucher History</p>
        </div>
        <div className="flex items-center justify-around">
          <div className="flex flex-col justify-center items-center">
            <TagSimple size={28} />
            <p className="text-xs -mt-0.5">Discount</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Truck size={28} />
            <p className="text-xs -mt-0.5">Free Delevery</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Coins size={28} />
            <p className="text-xs -mt-0.5">Cashback</p>
          </div>
        </div>
      </div>
    </div>
      <div className=" flex flex-col p-2 gap-2 fixed w-full pe-10 bottom-20">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5  justify-center items-center">
          <Question size={20} />
            <p className="text-xs">Help Centre</p>
          </div>
          <div className="flex gap-1.5  flex-row-reverse justify-center items-center">
          <EnvelopeSimple size={20} />
            <p className="text-xs">Contact Me</p>
          </div>
        </div>
      </div>
    </>

  );
};

export default FeaturesUser;

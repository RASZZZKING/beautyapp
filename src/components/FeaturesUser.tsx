"use client";
import {
  Clipboard,
  Coins,
  CreditCard,
  EnvelopeSimple,
  MapPin,
  Package,
  Percent,
  Question,
  Tag,
  TagSimple,
  Ticket,
  Truck,
  X,
} from "@phosphor-icons/react";
import { FunctionComponent, useState } from "react";
import LocationClient from "./LocationClient";
import PopFeat from "./utils/PopFeat";

interface FeaturesUserProps {}

const FeaturesUser: FunctionComponent<FeaturesUserProps> = () => {
  const [popHelp, setPopHelp] = useState<boolean>(false);
  const [popEnvelope, setPopEnvelope] = useState<boolean>(false);
  const [payHistory, setPayHistory] = useState<boolean>(false);
  const [receiveHistory, setReceiveHistory] = useState<boolean>(false);
  const [shipHistory, setShipHistory] = useState<boolean>(false);
  const [discountHistory, setDiscountHistory] = useState<boolean>(false);

  const handleClose = () => {
    // setSlow(true);
      setPopHelp(false);
      setPopEnvelope(false);
      setReceiveHistory(false);
      setPayHistory(false);
      setShipHistory(false);
      setDiscountHistory(false);
  };
  const handleHelp = () => {
    setPopHelp(true);
  };
  const handleEnvelope = () => {
    setPopEnvelope(true);
  };
  const handlePay = () => {
    setPayHistory(true);
  };
  const handleReceive = () => {
    setReceiveHistory(true);
  };
  const handleShip = () => {
    setShipHistory(true);
  };
  const handleDiscount = () => {
    setDiscountHistory(true);
  };

  return (
    <>
      <div className="  gap-4 flex flex-col">
        <div className="bg-color-primary rounded-lg shadow-xl  flex flex-col p-2 gap-2">
          <div className="flex items-center gap-2 border-b  border-color-placeholder pb-1">
            <Clipboard size={28} className="font-semibold" />
            <p className="grow text-base font-semibold text-color-secondary">
              My Purchase
            </p>
            <p className="text-xs opacity-50 cursor-pointer">
              View Purchase History
            </p>
          </div>
          <div className="flex items-center justify-around">
            <div
              onClick={handlePay}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <CreditCard size={28} />
              <p className="text-xs -mt-0.5">Pay</p>
            </div>
            <div
              onClick={handleShip}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <Truck size={28} />
              <p className="text-xs -mt-0.5">Ship</p>
            </div>
            <div
              onClick={handleReceive}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
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
            <p className="text-xs opacity-50 cursor-pointer">
              View Voucher History
            </p>
          </div>
          <div className="flex items-center justify-around">
            <div
              onClick={handleDiscount}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <TagSimple size={28} />
              <p className="text-xs -mt-0.5">Discount</p>
            </div>
            <div
              onClick={handleDiscount}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <Truck size={28} />
              <p className="text-xs -mt-0.5">Free Delevery</p>
            </div>
            <div
              onClick={handleDiscount}
              className="cursor-pointer flex flex-col justify-center items-center"
            >
              <Coins size={28} />
              <p className="text-xs -mt-0.5">Cashback</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col p-2 gap-2 w-full  ">
        <div className="flex items-center justify-between">
          <div
            onClick={handleHelp}
            className="flex gap-1.5 cursor-pointer  justify-center items-center"
          >
            <Question size={20} />
            <p className="text-xs">Help Centre</p>
          </div>
          <div
            onClick={handleEnvelope}
            className="flex gap-1.5 cursor-pointer  flex-row-reverse justify-center items-center"
          >
            <EnvelopeSimple size={20} />
            <p className="text-xs">Contact Me</p>
          </div>
        </div>
      </div>

        <PopFeat isVisible={popHelp} title="How To Order?"  onClose={handleClose}>
          <p className="text-xs font-normal mt-2">
            Select from Thirft48 Product your likes, see the detail. You can
            select Color, and Select size (read the guide) and then you can
            press add to cart, you can go to basket icon and you can see the
            button payment, and yeah you can select payment method for payments,
            and then yeah. Happy Shopping!!!
          </p>
          <p className="text-md font-bold mt-2 text-color-main">
            I Want Buy in High Production
          </p>
          <p className="text-xs font-normal">
            You can do that with the permission, you can request with contact
            example@email.com
          </p>
          <p className="text-md font-bold mt-2 text-color-main">
            I Want Return Your Order
          </p>
          <p className="text-xs font-normal">
            Okay you can explain your problems and please dont break anything in
            my product you must take a photo and video for your return product,
            you can request with contact example@email.com
          </p>
        </PopFeat>
        <PopFeat isVisible={popEnvelope} title="Contact Produsen"  onClose={handleClose }>
          <p className="text-xs font-normal mt-2">
            Email: youremail@example.com <br />
            Instagram: yourig <br />
            Whatsapp: +62392843242304
          </p>
          <p className="text-md font-bold mt-2 text-color-main">
            Contact Developers
          </p>
          <p className="text-xs font-normal">
            Email: farras.akhirio.ramadhan.204@gmail.com <br />
            Instagram: farrasakra <br />
            Whatsapp: +62881024277039
          </p>
        </PopFeat>
        <PopFeat isVisible={payHistory} title="Pay now"  onClose={handleClose}>
          <div className="w-full bg-color-gray shadow-inner font-normal mt-2 rounded-md p-3 min-h-16 flex flex-col gap-3 ">
            <div className="flex justify-between">
              <div className="flex items-center justify-center gap-0.5">
                <p className="font-semibold text-sm">Sweather Weather</p>
              </div>
              <div className="flex items-center justify-center gap-0.5">
                <p className="opacity-50 font-semibold text-xs">Rp</p>
                <p className="font-semibold text-sm">500.000</p>
              </div>
            </div>
            <LocationClient forUser />
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center gap-0.5">
                <p className="font-semibold text-xs">Qty</p>
                <p className="opacity-50 ml-0.5 font-semibold text-xs">x1</p>
              </div>
              <div className="flex w-12 items-center cursor-pointer justify-center gap-0.5 bg-color-secondary rounded px-2 py-1 text-color-primary">
                <p className="font-semibold text-xs">Pay</p>
              </div>
            </div>
          </div>
        </PopFeat>
        <PopFeat isVisible={shipHistory} title="Your Ship"  onClose={handleClose}>
          <div className="w-full bg-color-gray shadow-inner font-normal mt-2 rounded-md p-3 min-h-16 flex flex-col gap-3 ">
            <div className="flex justify-between">
              <div className="flex items-center justify-center gap-0.5">
                <p className="font-semibold text-sm">Sweather Weather</p>
              </div>
              <div className="flex items-center justify-center gap-0.5">
                <p className="opacity-50 font-semibold text-xs">Rp</p>
                <p className="font-semibold text-sm">500.000</p>
              </div>
            </div>
            <LocationClient forUser noEdit isShip />
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center gap-0.5">
                <p className="font-semibold text-xs">Qty</p>
                <p className="opacity-50 ml-0.5 font-semibold text-xs">x1</p>
              </div>
              <div className="flex w-12 items-center cursor-pointer justify-center gap-0.5 bg-color-secondary rounded px-2 py-1 text-color-primary">
                <p className="font-semibold text-xs">See</p>
              </div>
            </div>
          </div>
        </PopFeat>
        <PopFeat isVisible={receiveHistory} title="Pay Now"  onClose={handleClose}>
          <div className="w-full bg-color-gray shadow-inner font-normal mt-2 rounded-md p-3 min-h-16 flex flex-col gap-3 ">
            <div className="flex justify-between">
              <div className="flex items-center justify-center gap-0.5">
                <p className="font-semibold text-sm">Sweather Weather</p>
              </div>
              <div className="flex items-center justify-center gap-0.5">
                <p className="opacity-50 font-semibold text-xs">Rp</p>
                <p className="font-semibold text-sm">500.000</p>
              </div>
            </div>
            <LocationClient forUser noEdit />
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center gap-0.5">
                <p className="font-semibold text-xs">Qty</p>
                <p className="opacity-50 ml-0.5 font-semibold text-xs">x1</p>
              </div>
              <div className="flex w-12 items-center cursor-pointer justify-center gap-0.5 bg-color-secondary rounded px-2 py-1 text-color-primary">
                <p className="font-semibold text-xs">Rate</p>
              </div>
            </div>
          </div>
        </PopFeat>
        <PopFeat isVisible={discountHistory} title="Your Discount"  onClose={handleClose}>
          <div className="w-full bg-color-gray shadow-inner font-normal mt-2 rounded-md p-3 min-h-16 flex flex-col gap-3 ">
            <div className="rounded-lg shadow-md w-full max-w-full bg-color-primary p-3 px-5  flex flex-col gap-2">
              <div className="gap-2 items-center flex">
                <div className="grow flex flex-col justify-between">
                  <p className="text-color-placeholder text-sm">
                    {"RAMADHAN SALE"}
                  </p>
                </div>
                <div className="flex items-center text-color-placeholder">
                  70
                  <Percent size={17} className="text-color-placeholder" />
                </div>
                <p
                  className={`text-color-main font-semibold text-xs cursor-pointer hidden`}
                >
                  Edit
                </p>
              </div>
              <p className="font-light text-xs truncate">
                Khusus Pembelian Baju Lebaran
              </p>
            </div>
          </div>
        </PopFeat>
    </>
  );
};

export default FeaturesUser;

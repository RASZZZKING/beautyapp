"use client";
import { FunctionComponent, useState } from "react";
import PopFeat from "./utils/PopFeat";
import { Percent } from "@phosphor-icons/react/dist/ssr";

interface NavPricingProps {
  totalBiaya: number;
}

const NavPricing: FunctionComponent<NavPricingProps> = ({ totalBiaya }) => {
  const [isVoucer, setIsVoucer] = useState<boolean>(false);

  const handleClose = () => {
    setIsVoucer(false);
  };
  return (
    <>
      <div className="flex z-50 bg-color-gray bottom-0 left-0 gap-4 flex-col w-full shadow-inner rounded-lg p-4 ">
        <div className="font-semibold flex justify-between">
          <p className="opacity-50 text-base">Subtotal</p>
          <div className="flex items-center">
            <p className="text-xs opacity-50">$</p>
            <p className="text-base">{totalBiaya}</p>
          </div>
        </div>
        <div className="font-semibold flex justify-between">
          <p className="opacity-50 text-base">Delivery</p>
          <div className="flex items-center">
            <p className="text-xs opacity-50">$</p>
            <p className="text-base">10.000</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-color-secondary border-opacity-50 border-t border-dashed w-full h-1"></div>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-xl">Total</p>
          <div className="flex items-center">
            <p className="font-bold opacity-50 text-md">$</p>
            <p className="font-bold text-xl">{totalBiaya + 10000}</p>
          </div>
        </div>
        {isVoucer ? (
          <p className="text-md text-color-placeholder font-semibold">
            You saved{" "}
            <span className="text-color-main opacity-100">$ 30.000</span> with
            this purchase.
          </p>
        ) : (
          <p className="text-md text-color-placeholder font-semibold">
            Use your voucher{" "}
            <span
              onClick={() => setIsVoucer(true)}
              className="text-color-main opacity-100 cursor-pointer"
            >
              here
            </span>
          </p>
        )}
        <div className="h-12 bg-color-secondary font-bold text-color-primary cursor-pointer active:scale-105 transition-all duration-500 flex justify-center items-center rounded-xl text-xl w-full text-center">
          Checkout
        </div>
      </div>
      <PopFeat isVisible={isVoucer} title="Your Voucher" onClose={handleClose}>
        <div className="w-full bg-color-gray shadow-inner font-normal mt-2 rounded-md p-3 min-h-16 flex flex-col gap-3 ">
          <div className="flex rounded-lg shadow-md justify-between bg-color-primary">
            <div className=" w-full max-w-full  p-3 px-5  flex flex-col gap-2">
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
            <div onClick={handleClose} className="flex justify-end items-center p-2 pe-0 rounded-e-lg cursor-pointer bg-color-secondary">
              <p className="font-semibold text-xs whitespace-pre-line text-color-primary">U<br />
S
E
              </p>
            </div>
          </div>
          <div className="flex rounded-lg shadow-md justify-between bg-color-primary">
            <div className=" w-full max-w-full  p-3 px-5  flex flex-col gap-2">
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
            <div onClick={handleClose} className="flex justify-end items-center p-2 pe-0 rounded-e-lg cursor-pointer bg-color-secondary">
              <p className="font-semibold text-xs whitespace-pre-line text-color-primary">U<br />
S
E
              </p>
            </div>
          </div>
          <div className="flex rounded-lg shadow-md justify-between bg-color-primary">
            <div className=" w-full max-w-full  p-3 px-5  flex flex-col gap-2">
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
            <div onClick={handleClose} className="flex justify-end items-center p-2 pe-0 rounded-e-lg cursor-pointer bg-color-secondary">
              <p className="font-semibold text-xs whitespace-pre-line text-color-primary">U<br />
S
E
              </p>
            </div>
          </div>
        </div>
      </PopFeat>
    </>
  );
};

export default NavPricing;

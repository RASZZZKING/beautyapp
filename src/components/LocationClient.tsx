"use client";
import { MapPin } from "@phosphor-icons/react";
import { FunctionComponent } from "react";

interface LocationClientProps {
  forUser?: boolean;
  noEdit?: boolean
  isShip?: boolean
}

const LocationClient: FunctionComponent<LocationClientProps> = ({
  forUser,
  noEdit,
  isShip
}) => {
  return (
    <>
      {forUser ? (
        <div className="rounded-lg shadow-md w-full max-w-full bg-color-primary p-3 px-5  flex flex-col gap-2">
          <div className="gap-2 items-center flex">
            <MapPin size={17} className="text-color-placeholder" />
            <div className="grow flex flex-col justify-between">
              <p className="text-color-placeholder text-sm">{isShip ? "Now In Jakarta" : "Delivering to"}</p>
            </div>
            <p className={`text-color-main font-semibold text-xs cursor-pointer ${noEdit && "hidden"}`}>Edit</p>
          </div>
              <p className="font-light text-xs truncate">
                
                {isShip ? "PC Sicepat JakTim" : "Missouri,Canton, 285 W Peace St Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, rerum, perspiciatis asperiores vitae obcaecati labore est dolorem omnis nobis, minus pariatur aliquid neque!"}
              </p>
        </div>
      ) : (
        <div className="h-20 rounded-xl shadow-md w-full max-w-full bg-color-gray p-3 px-5 flex gap-3">
          <MapPin size={20} className="text-color-placeholder" />
          <div className="grow flex flex-col justify-between">
            <p className="text-color-placeholder text-sm">Delivering to</p>
            <p className="font-semibold truncate">
              Missouri,Canton, 285 W Peace St
            </p>
          </div>
          <p className="text-color-main font-semibold text-md">Edit</p>
        </div>
      )}
    </>
  );
};

export default LocationClient;

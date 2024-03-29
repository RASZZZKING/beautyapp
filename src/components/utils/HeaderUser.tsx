"use client";
import {
  Basket,
  ChatCentered,
  ChatCenteredDots,
  ChatTeardrop,
  ChatTeardropDots,
  ClockCounterClockwise,
  DotsThree,
  Percent,
  Ticket,
  X,
} from "@phosphor-icons/react";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import LocationClient from "../LocationClient";

interface HeaderUserProps {}

const HeaderUser: FunctionComponent<HeaderUserProps> = () => {
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  const [settingsAccount, setSettingsAccount] = useState<boolean>(false);
  const [slow, setSlow] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);
  const [locationSettings, setLocationSettings] = useState<boolean>(false);
  const handleClick = () => {
    setSlow(true);
    setTimeout(() => {
      setLocationSettings(false)
      setSendMessage(false);
      setSlow(false);
      setSettingsAccount(false);
    }, 300);
  };
  const handleMessage = () => {
    setSendMessage(true);
  };
  const handleSettings = () => {
    setSettings(!settings);
  };
  const handleSetAcc = () => {
    setSettingsAccount(true);
    setTimeout(() => {
      setSlow(false);
      setSettings(false);
    }, 300);
  };
  const handleLocation = () => {
    setLocationSettings(true);
    setTimeout(() => {
      setSlow(false);
      setSettings(false);
    }, 300);
  };
  return (
    <>
      <div className="flex justify-between">
        <ChatCentered
          onClick={handleMessage}
          size={32}
          className="cursor-pointer"
        />
        <div>
          <DotsThree
            onClick={handleSettings}
            size={32}
            className="cursor-pointer"
          />
          {settings && (
            <div
              className={`fadeIn3 absolute w-32 bg-color-primary -ml-24 rounded-lg shadow-lg p-2 flex flex-col gap-1`}
            >
              <div
                onClick={handleSetAcc}
                className="w-full h-5 rounded-md bg-color-primary hover:bg-color-gray cursor-pointer px-2 text-xs py-0.5 flex items-center font-extralight"
              >
                Account Settings
              </div>
              <div
                onClick={handleLocation}
                className="w-full h-5 rounded-md bg-color-primary hover:bg-color-gray cursor-pointer px-2 text-xs py-0.5 flex items-center font-exralight"
              >
                Location
              </div>
            </div>
          )}
        </div>
      </div>

      {sendMessage && (
        <div
          className={`fixed ${
            slow ? "fadeOut" : "fadeIn3"
          } top-0 left-0 max-h-screen h-full z-[201]  w-full flex justify-center items-center`}
        >
          <div className="bg-color-primary w-[20rem] rounded-2xl shadow-xl p-4">
            <div className="w-full h-full">
              <div className="flex justify-between items-center">
                <p className="font-bold text-color-main text-lg">
                  Send me a message
                </p>
                <X
                  size={18}
                  weight="bold"
                  className="cursor-pointer"
                  onClick={handleClick}
                />
              </div>
              <textarea
                placeholder="write here..."
                name="mgea"
                id=""
                cols={1}
                rows={1}
                className="w-full min-h-32 h-auto py-1 px-2 mt-3 border-2 rounded hidden-scrollbar"
              ></textarea>
              <div className="flex justify-end">
                <div
                  onClick={handleClick}
                  className="bg-color-main text-color-primary h-6 w-12 rounded-md mt-1 font-bold flex justify-center items-center text-xs shadow-md cursor-pointer"
                >
                  Send
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {settingsAccount && (
        <div
          className={`fixed ${
            slow ? "fadeOut" : "fadeIn3"
          } top-0 left-0 max-h-screen h-full z-[201]  w-full flex justify-center items-center`}
        >
          <div className="bg-color-primary w-[20rem] rounded-2xl shadow-xl p-4">
            <div className="w-full h-full flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="font-bold text-color-main text-lg">
                  Account Settings
                </p>
                <X
                  size={18}
                  weight="bold"
                  className="cursor-pointer"
                  onClick={handleClick}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-sm">Username</p>
                <input
                  type="text"
                  className="border rounded-lg text-xs px-2 py-1"
                  placeholder="your full name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-sm">Number</p>
                <input
                  type="number"
                  className="border rounded-lg text-xs px-2 py-1 hidden-scrollbar"
                  placeholder="+62123456789"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-sm">Second Number</p>
                <input
                  type="number"
                  className="border rounded-lg text-xs px-2 py-1 hidden-scrollbar"
                  placeholder="+62123456789"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-sm">Photo Profile</p>
                <div className="flex justify-start px-2">
                  <label
                    htmlFor="inptFile"
                    className="flex items-center"
                  >
                    {/* <p className="text-xs ms-2">File must type of png, jpeg, jpg, wepg</p> */}
                    <input type="file" className="file:text-center file:rounded-md file:text-xs file:bg-color-secondary   file:text-color-primary file:w-16 file:h-6 file:cursor-pointer file:border-none text-xs ml-1 file:me-2" />
                  </label>
                </div>
              </div>
              <div className="flex justify-end mt-1">
                <div className="bg-color-main text-xs font-semibold rounded text-color-primary cursor-pointer px-2 py-1">
                  Update
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {locationSettings && (
        <div
          className={`fixed ${
            slow ? "fadeOut" : "fadeIn3"
          } top-0 left-0 max-h-screen h-full z-[201]  w-full flex justify-center items-center`}
        >
          <div className="bg-color-primary w-[20rem] rounded-2xl shadow-xl p-4">
            <div className="w-full h-full flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="font-bold text-color-main text-lg">
                  Account Settings
                </p>
                <X
                  size={18}
                  weight="bold"
                  className="cursor-pointer"
                  onClick={handleClick}
                />
              </div>
              <div className="w-full bg-color-gray shadow-inner font-normal mt-2 rounded-md p-3 min-h-16 flex flex-col gap-3 ">
                <LocationClient forUser />
                <LocationClient forUser />
                <LocationClient forUser />
                <div className="flex justify-end items-center">
                  <div className="flex w-12 items-center cursor-pointer justify-center gap-0.5 bg-color-secondary rounded px-2 py-1 text-color-primary">
                    <p className="font-semibold text-xs">New</p>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col gap-1">
                <p className="font-semibold text-sm">Username</p>
                <input
                  type="text"
                  className="border rounded-lg text-xs px-2 py-1"
                  placeholder="your full name"
                />
              </div> */}
              {/* <div className="flex justify-end mt-1">
                <div className="bg-color-main text-xs font-semibold rounded text-color-primary cursor-pointer px-2 py-1">
                  Update
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderUser;

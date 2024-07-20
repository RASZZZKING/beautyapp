"use client";
import { ChatCentered, DotsThree } from "@phosphor-icons/react";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import PopUp from "./PopUp"; // Import PopUp component
import LocationClient from "../LocationClient";

interface HeaderUserProps {}

const HeaderUser: FunctionComponent<HeaderUserProps> = ({}) => {
  const [sendMessage, setSendMessage] = useState<boolean>(false);
  const [settingsAccount, setSettingsAccount] = useState<boolean>(false);
  const [locationSettings, setLocationSettings] = useState<boolean>(false);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [slowDropDown, setSlowDropDown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setTimeout(() => {
      setSendMessage(false);
      setSettingsAccount(false);
      setLocationSettings(false);
    }, 300);
  };

  const handleMessage = () => setSendMessage(true);
  const toggleDropdown = () => 
    {
      if (dropdownVisible === true){
        setTimeout(() => {
          setDropdownVisible(false);
        }, 300);
      }else{
        setDropdownVisible(!dropdownVisible);

      }
      
    }

  const handleAccountSettings = () => {
    setDropdownVisible(false);
    setSettingsAccount(true);
  };

  const handleLocationSettings = () => {
    setDropdownVisible(false);
    setLocationSettings(true);
  };

  // Detect click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSlowDropDown(true)
        setTimeout(() => {
          setSlowDropDown(false)
          setDropdownVisible(false);
        }, 300);
      }
    };

    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <>
      <div className="flex justify-between">
        <ChatCentered onClick={handleMessage} size={32} className="cursor-pointer" />
        <div className="relative">
          <DotsThree onClick={toggleDropdown} size={32} className="cursor-pointer" />
          {dropdownVisible && (
            <div ref={dropdownRef} className={`absolute right-0 mt-2 bg-color-primary whitespace-nowrap text-sm bg-white shadow-lg rounded-md p-2 flex flex-col gap-1 ${!slowDropDown ? "fadeIn3" : "fadeOut"}`}>
              <div onClick={handleAccountSettings} className="cursor-pointer p-1 hover:bg-color-placeholder rounded  hover:text-color-primary">
                Account Settings
              </div>
              <div onClick={handleLocationSettings} className="cursor-pointer p-1 hover:bg-color-placeholder rounded  hover:text-color-primary">
                Location
              </div>
            </div>
          )}
        </div>
      </div>

      <PopUp isVisible={sendMessage}  onClose={handleClose} title="Send me a message">
        <textarea placeholder="Write here..." className="w-full min-h-32 h-auto py-1 px-2 mt-3 border-2 rounded hidden-scrollbar"></textarea>
        <div className="flex justify-end mt-2">
          <button onClick={handleClose} className="bg-color-main text-color-primary h-6 w-12 rounded-md font-bold flex justify-center items-center text-xs shadow-md cursor-pointer">
            Send
          </button>
        </div>
      </PopUp>

      <PopUp isVisible={settingsAccount} onClose={handleClose} title="Account Settings">
        <div className="flex flex-col gap-2">
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-sm">Username</span>
            <input type="text" className="border rounded-lg text-xs px-2 py-1" placeholder="Your full name" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-sm">Number</span>
            <input type="number" className="border rounded-lg text-xs px-2 py-1" placeholder="+62123456789" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-sm">Second Number</span>
            <input type="number" className="border rounded-lg text-xs px-2 py-1" placeholder="+62123456789" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold text-sm">Photo Profile</span>
            <input type="file" className="file:text-center file:rounded-md file:text-xs file:bg-color-secondary file:text-color-primary file:w-16 file:h-6 file:cursor-pointer file:border-none text-xs ml-1 file:me-2" />
          </label>
          <div className="flex justify-end mt-1">
            <button className="bg-color-main text-xs font-semibold rounded text-color-primary cursor-pointer px-2 py-1">
              Update
            </button>
          </div>
        </div>
      </PopUp>

      <PopUp isVisible={locationSettings} onClose={handleClose} title="Location Settings">
        <div className="w-full bg-color-gray shadow-inner font-normal mt-2 rounded-md p-3 min-h-16 flex flex-col gap-3">
          <LocationClient forUser />
          <LocationClient forUser />
          <LocationClient forUser />
          <div className="flex justify-end items-center">
            <button className="flex w-12 items-center cursor-pointer justify-center gap-0.5 bg-color-secondary rounded px-2 py-1 text-color-primary">
              New
            </button>
          </div>
        </div>
      </PopUp>
    </>
  );
};

export default HeaderUser;

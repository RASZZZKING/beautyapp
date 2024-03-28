"use client"
import { Basket, ChatCentered, ChatCenteredDots, ChatTeardrop, ChatTeardropDots, ClockCounterClockwise, DotsThree, Ticket, X } from "@phosphor-icons/react";
import { FunctionComponent, useState } from "react";

interface HeaderUserProps {}

const HeaderUser: FunctionComponent<HeaderUserProps> = () => {
  const [sendMessage, setSendMessage] = useState<boolean>(false)
  const [slow, setSlow] = useState<boolean>(false)
  const [settings, setSettings] = useState<boolean>(false)
  const handleClick = () => {
    setSlow(true)
    setTimeout(() => {
      setSendMessage(false)
      setSlow(false)
    }, 300);
  }
  const handleMessage = () => {
    setSendMessage(true)
  }
  const handleSettings = () => {
    setSettings(!settings)
  }
  return (
    <>
    <div className="flex justify-between">
      <ChatCentered onClick={handleMessage} size={32} className="cursor-pointer" />
      <div>
      <DotsThree onClick={handleSettings} size={32} className="cursor-pointer" />
      { settings && <div className={`fadeIn3 absolute w-32 bg-color-primary -ml-24 rounded-lg shadow-lg p-2 flex flex-col gap-1`}>
        <div className="w-full h-5 rounded-md bg-color-primary hover:bg-color-gray cursor-pointer px-2 text-xs py-0.5 flex items-center font-extralight">Account Settings</div>
        <div className="w-full h-5 rounded-md bg-color-primary hover:bg-color-gray cursor-pointer px-2 text-xs py-0.5 flex items-center font-exralight">Location</div>
      </div>
      }
      </div>
    </div>
    
    {
        sendMessage && (
          <div className={`fixed ${slow  ? "fadeOut" : "fadeIn3"} top-0 left-0 max-h-screen h-full z-[201]  w-full flex justify-center items-center`}>
          <div className="bg-color-primary w-[20rem] rounded-2xl shadow-xl p-4">
            <div className="w-full h-full">
              <div className="flex justify-between items-center">
                <p className="font-bold text-color-main text-lg">Send me a message</p>
                <X size={18} weight="bold" className="cursor-pointer" onClick={handleClick} />
              </div>
              <textarea placeholder="write here..." name="mgea" id="" cols={1} rows={1} className="w-full min-h-32 h-auto py-1 px-2 mt-3 border-2 rounded hidden-scrollbar">
              </textarea>
              <div className="flex justify-end">
                <div onClick={handleClick} className="bg-color-main text-color-primary h-6 w-12 rounded-md mt-1 font-bold flex justify-center items-center text-xs shadow-md cursor-pointer">
                  Send
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </>
  );
};

export default HeaderUser;

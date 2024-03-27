"use client"
import { Cross, X } from "@phosphor-icons/react";
import Link from "next/link";
import { FunctionComponent, useRef, useState } from "react";

interface HeaderCaptionProps {
  href?: string;
  caption: string;
  linkCaption?: string;
  size: string;
  type?: string
}

const HeaderCaption: FunctionComponent<HeaderCaptionProps> = ({
  href,
  size,
  caption,
  linkCaption,
  type
}) => {
  const [popGuide, setPopGuide] = useState<Boolean>(false)
  const [slow, setSlow] = useState<Boolean>(false)
  const handleClick = () => {
    setSlow(true)
    setTimeout(() => {
      setPopGuide(false)
      setSlow(false)
    }, 300);
  } 
  const handleShow = () => {
    setPopGuide(true)
  } 
  return (
    <div className="w-full flex justify-between">
      <p className={`font-semibold text-${size}`}>{caption}</p>
      {href && (
        <Link
          href={href}
          className={`font-semibold text-${size} text-color-main`}
        >
          {linkCaption}
        </Link>
      )}
      {type && (
        <p className={`font-semibold cursor-pointer text-${size} text-color-main`} onClick={handleShow}>
          {linkCaption}
        </p>

      )}
      {popGuide && (
        <div className={`fixed ${slow  ? "fadeOut" : "fadeIn3"} top-0 left-0 max-h-screen h-full z-[201]  w-full flex justify-center items-center`}>
          <div className="bg-color-primary w-[20rem] rounded-2xl shadow-xl p-4">
            <div className="w-full h-full">
              <div className="flex justify-between items-center">
                <p className="font-bold text-color-main text-lg">Size guide</p>
                <X size={18} weight="bold" className="cursor-pointer" onClick={handleClick} />
              </div>
              <p className="text-xs font-normal mt-2">The length of Thirft48 Product have vary according to style. On average a size M measures 29.5 inches / 75cm down the centre back from neck to hem.</p>
              <p className="text-md font-bold mt-2 text-color-main">HOW TO MEASURE?</p>
              <p className="text-xs font-normal">Measure around the fullest part, place the tape close under the arms and make sure the tape is flat across the back</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderCaption;

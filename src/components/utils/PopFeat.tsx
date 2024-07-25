"use client";
import { X } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent, useEffect, useRef, useState } from "react";

interface PopFeatProps {
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  isVisible: boolean;
}

const PopFeat: FunctionComponent<PopFeatProps> = ({
  onClose,
  children,
  title,
  isVisible,
}) => {
  const popUpRef = useRef<HTMLDivElement>(null);
  const [proops, setProops] = useState<Boolean>(false);

  const handleClose = () => {
    setProops(true);
    setTimeout(() => {
      onClose();
      setProops(false);
    }, 300);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);
``
  return (
    <div
      className={`fixed ${
        proops ? "fadeOut" : "fadeIn3"
      } ${isVisible ? "flex" : "hidden"} top-0 left-0 max-h-screen h-full z-[201]  w-full justify-center items-center`}
    >
      <div
        ref={popUpRef}
        className="bg-color-primary min-w-[20rem] rounded-2xl shadow-xl p-4 transition-all transform"
      >
        <div className="w-full h-full">
          <div className="flex justify-between items-center">
            <p className="font-bold text-color-main text-lg">{title}</p>
            <X
              size={18}
              weight="bold"
              className="cursor-pointer"
              onClick={handleClose}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopFeat;
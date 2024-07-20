import React, { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";

interface PopUpProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({
  isVisible,
  onClose,
  title,
  children,
}) => {
  const popUpRef = useRef<HTMLDivElement>(null);
  const [slowProops, setProops] = useState<boolean>(false);

  const handleClose = () => {
    setProops(true);
    onClose();
    setTimeout(() => {
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
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full z-50 flex justify-center items-center ${
        !slowProops ? "fadeIn3" : "fadeOut"
      }`}
    >
      <div
        ref={popUpRef}
        className=" bg-color-primary w-80 rounded-2xl shadow-xl p-4"
      >
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">{title}</p>
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
  );
};

export default PopUp;

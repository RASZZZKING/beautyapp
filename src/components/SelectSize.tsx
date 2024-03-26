"use client";
import { Dot } from "@phosphor-icons/react";
import { FunctionComponent, useState } from "react";

interface SelectSizeProps {
  data: Size;
}
interface Size {
  size: number[] | string[];
}

const SelectSize: FunctionComponent<SelectSizeProps> = ({ data }) => {
  const [selected, setSelected] = useState<number | string>(data.size[0]);
  const handleChange = (val: string | number) => {
    setSelected(val);
  };
  return (
    <div>
      <div className="flex  w-full  items-center max-w-full min-h-14 gap-1 overflow-x-auto hidden-scrollbar whitespace-nowrap bg-color-gray border-opacity-30 border-color-placeholder border rounded-xl"></div>
      <div className="flex -mt-14  w-full  items-center max-w-full min-h-14 gap-1 overflow-x-auto hidden-scrollbar whitespace-nowrap  ">
        {data?.size.map((cb, index) => {
          const lastItem = index === data.size.length - 1;
          return (
            <div className={`flex gap-1 items-center ${ lastItem && "pe-2 me-2" }`} key={index}>
              <label
                className={`${
                  selected !== cb && "opacity-50"
                } cursor-pointer aspect-square  m-0 h-14 flex items-center justify-center`}
              >
                <input
                  type="radio"
                  name="selectSize"
                  value={cb}
                  className="opacity-0"
                  onChange={() => handleChange(cb)}

                />
                <div className="flex flex-col justify-between items-center min-h-14">
                  <div className="bg-color-secondary w-10 h-1 opacity-0"></div>
                  <p className="text-md font-semibold">{cb}</p>
                  <div className={`bg-color-secondary w-10 h-1 rounded-sm ${selected !== cb && "opacity-0"}`}></div>
                </div>
              </label>
              {!lastItem && (
                <Dot size={20} weight="bold" className="opacity-50" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectSize;

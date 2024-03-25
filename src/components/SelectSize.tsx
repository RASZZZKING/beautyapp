import { Dot } from "@phosphor-icons/react";
import { FunctionComponent, useState } from "react";

interface SelectSizeProps {
  data: Size;
}
interface Size {
  size: number[] | string[];
}

const SelectSize: FunctionComponent<SelectSizeProps> = ({ data }) => {
    const [selected, setSelected] = useState<number|string>(data.size[0])
    const handleChange = (val: string|number) => {
        setSelected(val)
    }
    return (
        <div className="flex  w-full  items-center max-w-full min-h-14 gap-1 overflow-x-auto whitespace-nowrap bg-color-gray border-opacity-30 border-color-placeholder border rounded-xl">
      {data?.size.map((cb, index) => {
          const lastItem = index === data.size.length - 1
        return (
          <div className="flex gap-1 items-center" key={index}>
            <label className={`${selected !== cb && "opacity-50"} cursor-pointer aspect-square  ms-2  m-0 h-14 flex items-center justify-center`}>
              <input
                type="radio"
                name="selectSize"
                value={cb}
                className="opacity-0"
                onChange={()=> handleChange(cb)}
              />
              <p className="text-md font-semibold absolute">{cb}</p>
              <div className={`h-14 absolute items-end mt-0.5 ${selected === cb ? "flex" : "hidden" }`}>
                <div className="bg-color-secondary w-14 h-1 rounded-sm"></div>
              </div>
            </label>
            {!lastItem && <Dot size={20} weight="bold" className="opacity-50" /> }

          </div>
        );
      })}
    </div>
  );
};

export default SelectSize;

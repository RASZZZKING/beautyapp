"use client"
import { FunctionComponent, useEffect, useState } from "react";

interface Color {
    name: string;
    hex: string;
  }
  
  interface SelecetColorProps {
    colors: Color[];
  }
  

const SelecetColor: FunctionComponent<SelecetColorProps> = ({ colors }) => {
    const [selected, setSelected] = useState<string>(colors[0].name)

    const handleChange = (value: string) => {
        setSelected(value)
    }

    useEffect(()=>{
        console.log(selected);
        
    },[selected])
    
  return (
    <div className="flex  w-full hidden-scrollbar  items-center max-w-full min-h-14 gap-4 overflow-x-auto whitespace-nowrap">
      {colors.map((cb: Color, index: number) => {
        return (
          <label key={index} style={{backgroundColor: `${cb.hex}`}} className={`aspect-square cursor-pointer ${selected === cb.name ? 'ring-2 liked2' : 'opacity-85'} shadow-xl ring-color-placeholder ring-purple-500 ms-2 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 m-0 h-10 rounded-xl`} >
            <input
              type="radio"
              name="selectColor"
              value={cb.name}
              onChange={()=>handleChange(cb.name)}
              className="opacity-0"
            />
          </label>
        );
      })}
    </div>
  );
};

export default SelecetColor;

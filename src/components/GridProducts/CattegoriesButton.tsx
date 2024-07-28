"use client"
import { dataCategories } from "@/libs/dataCategories";
import { FunctionComponent, useState } from "react";

interface CategoriesButtonProps {}

const CategoriesButton: FunctionComponent<CategoriesButtonProps> = () => {
  const [activeCat, setActiveCat] = useState<string>("All")
  
  return (
    <div className="w-full max-w-full max-h-10 flex gap-2 overflow-x-auto whitespace-nowrap hidden-scrollbar">
      {
        dataCategories.data.map((cb,i)=>{
          const handleClick = () => {
            setActiveCat(cb.url)
          }
          return(
          <Button key={i} handleClick={handleClick} activeCat={activeCat} url={cb.url} name={cb.title} />
        )})
      }  
    </div>
  );
};

export default CategoriesButton;

const Button = ({ name, handleClick, activeCat, url }: {url:string, name: string, activeCat: string, handleClick: ()=>void }) => {
  return (
    <button onClick={handleClick} className={`min-h-10 w-auto transition-all duration-500  aspect-video px-2.5  rounded-lg flex justify-center items-center ${url === activeCat ? "bg-color-secondary text-color-primary" : "bg-color-primary border-color-placeholder border text-color-placeholder"}`}>
      {name}
    </button>
  );
};

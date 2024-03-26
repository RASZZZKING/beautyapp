"use client"
import { FunctionComponent, useState } from "react";

interface CategoriesButtonProps {}

const CategoriesButton: FunctionComponent<CategoriesButtonProps> = () => {
  const [activeCat, setActiveCat] = useState<string>("All")
  
  return (
    <div className="w-full max-w-full max-h-10 flex gap-2 overflow-x-auto whitespace-nowrap">
      <Button setActiveCat={setActiveCat} activeCat={activeCat} name="All"/>
      <Button setActiveCat={setActiveCat} activeCat={activeCat} name="Skirt"/>
      <Button setActiveCat={setActiveCat} activeCat={activeCat} name="Clothes"/>
      <Button setActiveCat={setActiveCat} activeCat={activeCat} name="Blazer"/>
      <Button setActiveCat={setActiveCat} activeCat={activeCat} name="Tie"/>
      <Button setActiveCat={setActiveCat} activeCat={activeCat} name="Hem"/>
      <Button setActiveCat={setActiveCat} activeCat={activeCat} name="Sweather"/>
      <Button setActiveCat={setActiveCat} activeCat={activeCat} name="Pashmina"/>
      <Button setActiveCat={setActiveCat} activeCat={activeCat} name="Socket"/>
    </div>
  );
};

export default CategoriesButton;

const Button = ({ name, activeCat, setActiveCat }: { name: string, activeCat: string, setActiveCat: any }) => {
  const handleClick = () => {
    setActiveCat(name)
  }
  return (
    <button onClick={handleClick} className={`min-h-10 w-auto  aspect-video px-2.5  rounded-lg flex justify-center items-center ${name === activeCat ? "bg-color-secondary text-color-primary" : "bg-color-primary border-color-placeholder border text-color-placeholder"}`}>
      {name}
    </button>
  );
};

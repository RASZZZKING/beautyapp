import { FunctionComponent } from "react";

interface CategoriesButtonProps {}

const CategoriesButton: FunctionComponent<CategoriesButtonProps> = () => {
  return (
    <div className="w-full max-w-full max-h-10 flex gap-2 overflow-x-auto whitespace-nowrap">
      <Button name="All"/>
      <Button name="Skirt"/>
      <Button name="Clothes"/>
      <Button name="Blazer"/>
      <Button name="Tie"/>
      <Button name="Hem"/>
      <Button name="Sweather"/>
      <Button name="Pashmina"/>
      <Button name="Socket"/>
    </div>
  );
};

export default CategoriesButton;

export const Button = ({ name }: { name: string }) => {
  return (
    <div className="min-h-10 w-auto  aspect-video px-2.5 text-color-primary rounded-lg flex justify-center items-center bg-color-secondary">
      {name}
    </div>
  );
};

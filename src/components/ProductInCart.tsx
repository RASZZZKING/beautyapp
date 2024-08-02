"use client";
import { theProduct } from "@/libs/dataData";
import { Minus, Plus } from "@phosphor-icons/react";
import { FunctionComponent, useEffect, useState } from "react";

interface ProdcutInCartProps {
  setTotalBiaya: (total: number) => void;
}

const ProdcutInCart: FunctionComponent<ProdcutInCartProps> = ({
  setTotalBiaya,
}) => {
  const [productQuantities, setProductQuantities] = useState<number[]>(
    new Array(theProduct.data.slice(0, 6).length).fill(1)
  );
  const [totalBiaya, setTotalBiayaState] = useState(0);
  const [alertMuncul, setAlertMunculState] = useState(false);
  const [varr, setVarr] = useState(false);
  const [sudahDihapus, setSudahDihapus] = useState<boolean[]>(
    new Array(theProduct.data.slice(0, 6).length).fill(false)
  );

  useEffect(() => {
    let total = 0;
    theProduct.data.slice(0, 6).forEach((cb) => {
      total += cb.price;
    });
    setTotalBiayaState(total);
    setTotalBiaya(total);
  }, []);

  const updateTotal = (amount: number) => {
    setTotalBiayaState((prevTotal) => {
      const newTotal = prevTotal + amount;
      setTotalBiaya(newTotal);
      return newTotal;
    });
  };

  const ubahBiayaMinus = (index: number, price: number) => {
    setProductQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index] -= 1;
        updateTotal(-price);
      } else {
        setAlertMunculState(true);
      }
      return newQuantities;
    });
  };

  const ubahBiayaPlus = (index: number, price: number) => {
    setProductQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      updateTotal(price);
      return newQuantities;
    });
  };

  const handleCloose = () => {
    setAlertMunculState(false);
  };

  const handleBeneran = (index: number) => {
    handleCloose();
    setVarr(true);
    setSudahDihapus((prev) => {
      const newStatus = [...prev];
      newStatus[index] = true;
      return newStatus;
    });
    setTimeout(() => {
      setVarr(false);
    }, 3000);
  };

  return (
    <>
      <div className="flex flex-col gap-4 rounded-xl overflow-y-auto hidden-scrollbar">
        {theProduct.data.slice(0, 6).map((cb, i) => (
          <div key={i} className={`${sudahDihapus[i] ? "hidden" : "flex"} gap-4 items-center`}>
            <img
              src={cb.imageUrl}
              className="aspect-square h-20 object-cover shadow-lg rounded-xl"
            />
            <div className="grow flex flex-col gap-1">
              <div className="flex flex-col">
                <p className="text-base font-semibold">{cb.title}</p>
                <p className="text-xs font-semibold opacity-50">
                  Size: {cb.size[0]} - Color: {cb.colors[0].name}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-xs font-semibold opacity-50">$</p>
                <p className="font-semibold text-base">
                  {cb.price * productQuantities[i]}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Minus
                size={18}
                weight="bold"
                onClick={() => ubahBiayaMinus(i, cb.price)}
                className={`${productQuantities[i] === 1 && "disabled"}`}
              />
              <p className="font-semibold text-base">
                {productQuantities[i]}
              </p>
              <Plus
                size={18}
                weight="bold"
                onClick={() => ubahBiayaPlus(i, cb.price)}
                className="text-color-main"
              />
            </div>
            <div className={`${varr ? "alert-show" : "alert-hide"}`}>
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{cb.title} has been deleted!</span>
              </div>
            </div>
            <div className={`${alertMuncul ? "alert-show" : "alert-hide"}`}>
              <div role="alert" className="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Warning: Do you sure to delete this product from your cart?</span>
                <div>
                  <button onClick={handleCloose} className="btn btn-xs me-2">
                    Cancel
                  </button>
                  <button
                    onClick={() => handleBeneran(i)}
                    className="btn btn-xs btn-primary btn-error"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProdcutInCart;

"use client";
import { AddressBook, Person, Phone } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent, useState } from "react";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  const [gender, setGender] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };


  return (
    <div className="bg-color-gray min-[450px]:shadow-2xl min-[450px]:rounded-xl min-[450px]:-mt-2 hidden-scrollbar mh50">
      <div className="flex h-[90vh] flex-col justify-around w-full py-3 px-5">
        <div className="text-4xl font-semibold">
          Fill your profile! <br />
          <span className="font-medium text-2xl">
            With profile we can easily know you
          </span>
        </div>
        <div className="flex justify-center">
          <img
            src="/lakibesar.png"
            className="cursor-pointer rounded-full max-w-44"
            alt="models"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <Phone size={15} weight="fill" className="opacity-70" />
            <input
              type="number"
              className="grow"
              placeholder="Telephone Number"
            />
          </label>
          <div className="flex gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <Person size={15} weight="fill" className="opacity-70" />
            </label>
            <select
              onChange={handleChange}
              value={gender}
              className={`select select-bordered ${
                gender === "" ? "opacity-70" : "opacity-100"
              } w-full`}
            >
              <option value="" disabled>
                Pick your gender
              </option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <AddressBook size={15} weight="fill" className="opacity-70" />
            <input type="text" className="grow" placeholder="Address" />
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <p className="btn bg-color-secondary bg-opacity-10">Later</p>
          <div className="btn flex-1 text-color-primary bg-color-main">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

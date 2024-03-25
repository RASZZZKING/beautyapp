"use client"
import { FunctionComponent, useRef } from "react";

interface SearchInputProps {}

const SearchInput: FunctionComponent<SearchInputProps> = () => {
    const manifyGlassRef = useRef<HTMLDivElement>(null)
    const inputSearch = useRef<HTMLInputElement>(null)
    const handleClickInput = () => {
        if (manifyGlassRef.current && inputSearch.current) {
            manifyGlassRef.current.style.display = "none";
            inputSearch.current.style.paddingLeft = "1rem";
        }
    }
    const handleKeyDownInput = () => {
        if (manifyGlassRef.current && inputSearch.current) {
            manifyGlassRef.current.style.display = "block";
            inputSearch.current.style.paddingLeft = "2.5rem";
        }
    }
  return (
    <>
      <div className="absolute" ref={manifyGlassRef}>
        <svg
          className="p-2 mt-2 ms-2.5 font-bold"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#9CA3AF"
          viewBox="0 0 256 256"
        >
          <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search here..."
        className="w-full h-12 rounded-xl bg-color-gray ps-10 text-color-secondary px-4"
        ref={inputSearch}
        onClick={handleClickInput}
        onKeyUp={handleKeyDownInput}
      />
    </>
  );
};

export default SearchInput;

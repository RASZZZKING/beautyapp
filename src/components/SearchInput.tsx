"use client"
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { FunctionComponent, KeyboardEventHandler, useRef } from "react";

interface SearchInputProps {}

const SearchInput: FunctionComponent<SearchInputProps> = () => {
    const manifyGlassRef = useRef<HTMLDivElement>(null)
    const inputSearch = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const handleClickInput = () => {
        if (manifyGlassRef.current && inputSearch.current) {
            manifyGlassRef.current.style.opacity = "0";
            inputSearch.current.style.paddingLeft = "1rem";
        }
    }
    const handleKeyDownInput = (event: any) => {
        if (manifyGlassRef.current && inputSearch.current && !inputSearch.current.value) {
            manifyGlassRef.current.style.opacity = "1";
            inputSearch.current.style.paddingLeft = "2.5rem";
        }
    }
    const handleKeyDown = (event: any) => {
      if(event.key==="Enter"){
        event.preventDefault()
        const keyword = inputSearch.current?.value
        router.push(`/search/${keyword}`)
      }
    }
  return (
    <>
      <div className="relative h-12 w-8 ps-2 opacity-100 flex items-center text-color-placeholder" ref={manifyGlassRef}>
        <MagnifyingGlass size={24}  />
      </div>
      <input
        type="text"
        placeholder="Search here..."
        className="w-full h-12 -mt-[4.25rem] rounded-xl bg-color-gray ps-10 text-color-secondary px-4"
        ref={inputSearch}
        onClick={handleClickInput}
        onKeyUp={handleKeyDownInput}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default SearchInput;

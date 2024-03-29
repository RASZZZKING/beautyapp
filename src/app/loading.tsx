"use client"
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface loaderProps {
    
}
 
const loader: FunctionComponent<loaderProps> = () => {
    const path = usePathname()
    const condition = path === "/" || path === "/user" || path === "/like"
    return ( 
        <>
        <div className="flex h-screen w-full items-center justify-center">
            <div className="loader">
                
            </div>
        </div>
        {
            condition && (
                <Navbar />
            )
        }
        </>
     );
}
 
export default loader;
"use client"
import { MapPin } from "@phosphor-icons/react";
import { FunctionComponent } from "react";

interface LocationClientProps {
    
}
 
const LocationClient: FunctionComponent<LocationClientProps> = () => {
    return ( 
        <div className="h-20 rounded-xl shadow-md w-full bg-color-gray p-3 px-5 flex gap-3">
            <MapPin size={20} className="text-color-placeholder" />
            <div className="grow flex flex-col justify-between">
                <p className="text-color-placeholder text-sm">Delivering to</p>
                <p className="font-semibold truncate">Missouri,Canton, 285 W Peace St</p>
            </div>
            <p className="text-color-main font-semibold text-md">Edit</p>
        </div>
     );
}
 
export default LocationClient;
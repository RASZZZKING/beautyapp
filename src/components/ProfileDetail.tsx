"use client"
import { FunctionComponent } from "react";

interface ProfileDetailProps {
    
}
 
const ProfileDetail: FunctionComponent<ProfileDetailProps> = () => {
    return ( 
        <div className="flex gap-3 w-full flex-col justify-center items-center">
            <div className="bg-color-primary shadow-lg aspect-square h-24 rounded-full"></div>
            <p className="font-semibold text-xl border-opacity-50 border-color-placeholder border-b">Rasz Dev</p>
            <div className="flex flex-col gap-1">
                <div className="bg-color-primary shadow-md -mt-1 py-1 px-2 text-xs rounded-lg  flex justify-center items-center font-semibold cursor-pointer">
                    Classic Member
                </div>
                <p className="text-xs text-center">1.333 Points</p>
            </div>
            <div className="flex gap-12 w-full justify-center">
                <div className="bg-color-primary cursor-pointer shadow-md w-full max-w-28 py-1 rounded-lg   flex justify-center items-center font-semibold  text-xs">
                    Events
                </div>
                <div className="bg-color-primary cursor-pointer shadow-md w-full max-w-28 py-1 rounded-lg   flex justify-center items-center font-semibold  text-xs">
                    Affiliate
                </div>
            </div>
        </div>
     );
}
 
export default ProfileDetail;
"use client"
import { FunctionComponent, useState } from "react";
import PopFeat from "./utils/PopFeat";

interface ProfileDetailProps {
    
}
 
const ProfileDetail: FunctionComponent<ProfileDetailProps> = () => {
    const [slow, setSlow] = useState<boolean>(false)
    const [affliatePop, setAffiliatePop] = useState<boolean>(false)
    const [eventsPop, setEventsPop] = useState<boolean>(false)
    const handleClose = () => {
        setAffiliatePop(false)
        setEventsPop(false)
    }
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
                <div onClick={()=> setEventsPop(true)} className="bg-color-primary cursor-pointer shadow-md w-full max-w-28 py-1 rounded-lg   flex justify-center items-center font-semibold  text-xs">
                    Events
                </div>
                <div onClick={()=> setAffiliatePop(true)} className="bg-color-primary cursor-pointer shadow-md w-full max-w-28 py-1 rounded-lg   flex justify-center items-center font-semibold  text-xs">
                    Affiliate
                </div>
            </div>
            <PopFeat onClose={handleClose} title="Affiliate" isVisible={affliatePop}  >
                <div className="flex justify-between px-3 mt-2 bg-color-placeholder rounded-md text-color-primary font-semibold py-2 shadow-inner">
                    <span>Code:</span>
                    <span>I123N34</span>
                </div>
            </PopFeat>
            <PopFeat onClose={handleClose} title="Events" isVisible={eventsPop}  >
                <div className="flex justify-center px-3 mt-2 bg-color-placeholder rounded-md text-color-primary font-semibold py-2 shadow-inner">
                    Comming Soon
                </div>
            </PopFeat>
        </div>
     );
}
 
export default ProfileDetail;
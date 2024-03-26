import FeaturesUser from "@/components/FeaturesUser";
import Navbar from "@/components/Navbar";
import ProfileDetail from "@/components/ProfileDetail";
import HeaderUser from "@/components/utils/HeaderUser";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <>
      <div className="covers bg-color-gray">
        <div className="flex flex-col gap-5">
            <HeaderUser />
            <ProfileDetail />
            <FeaturesUser />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default page;

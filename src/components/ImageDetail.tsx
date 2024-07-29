import { FunctionComponent } from "react";

interface ImageDetailProps {
    src: string
}
 
const ImageDetail: FunctionComponent<ImageDetailProps> = ({src}) => {
    return ( 
        <img src={src} className="aspect-square object-cover w-full bg-color-placeholder rounded-3xl mt-2" />
        // <img src={src} className="aspect-square min-[450px]:min-h-64 object-cover w-full bg-color-placeholder rounded-3xl mt-2" />
     );
}
 
export default ImageDetail;
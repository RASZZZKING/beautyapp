import { FunctionComponent } from "react";

interface ImageDetailProps {
    src: string
}
 
const ImageDetail: FunctionComponent<ImageDetailProps> = ({src}) => {
    return ( 
        <div className="aspect-square object-cover w-full bg-color-secondary rounded-3xl"></div>
     );
}
 
export default ImageDetail;
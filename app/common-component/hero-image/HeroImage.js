import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroImage({ image, pageName }) {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // console.log(image, pageName);
    if (image && image.length > 0 && pageName) {
      
      let bannerImage = image.find(
        (imageDate) =>
          imageDate.Page.toLowerCase() === pageName.toLowerCase()
      );
      setImageData(bannerImage);
    }
  }, [image, pageName]);

  return (
    <>
      {imageData && (
        <Image
          src={process.env.BASE_URL + imageData.Image.url}
          layout="responsive"
          width={imageData.Width}
          height={imageData.Height}
          alt="Banner Image"
        />
      )}
    </>
  );
}

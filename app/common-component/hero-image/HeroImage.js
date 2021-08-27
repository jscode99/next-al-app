import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroImage({ image, pageName }) {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // let bannerImage = image.find(
    //   (imageDate) => imageDate.PageName.toLowerCase() === pageName.toLowerCase()
    // );
    setImageData(/* bannerImage */ image[0]);
  }, [image]);

  return (
    <>
      {imageData && (
        <Image
          src={process.env.BASE_URL + imageData.Image[0].url}
          layout="responsive"
          width={imageData.Width}
          height={imageData.Height}
          alt="Banner Image"
        />
      )}
    </>
  );
}

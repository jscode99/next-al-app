import Image from "next/image";

export default function HeroImage({ image }) {
  return <Image src={image} layout="fill" alt="Banner Image" className={`w-100 h-100`} />;
}

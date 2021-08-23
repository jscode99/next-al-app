import { useRouter } from "next/router";
import style from "./index.module.sass";

export default function SocialMedia({ className, link }) {
  let router = useRouter();
  return (
    <div
      className={`${style.social_media_container} rounded-circle d-flex justify-content-center align-items-center mx-2 cursor-pointer`}
      onClick={() => router.push(link)}
    >
      <i class={`${className} fa-lg text-white`}></i>
    </div>
  );
}

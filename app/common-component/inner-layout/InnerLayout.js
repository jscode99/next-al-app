import { useEffect, useState } from "react";
import style from "./index.module.sass";

export default function InnerLayout({ children }) {
  const [parentHeight, setParentHeight] = useState("");
  useEffect(() => {
    let childElement = document.getElementById("child");
    if (childElement) {
      setParentHeight(childElement.offsetHeight - 200);
    }
  }, []);
  return (
    <div
      className={`${style.inner_layout_container}`}
      style={{ height: parentHeight }}
    >
      <div
        id="child"
        className={`${style.inner_layout_card} position-relative p-5`}
      >
        {children}
      </div>
    </div>
  );
}

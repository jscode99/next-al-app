import { useEffect, useContext } from "react";
import AppContext from "../../AppContext";
import disableScroll from "disable-scroll";
import style from "./index.module.sass";

export default function AppLoader() {
  let context = useContext(AppContext);

  useEffect(() => {
    if (context.appContext.loader === false) {
      disableScroll.off();
    }
    if (context.appContext.loader === true) {
      disableScroll.on();
    }
  }, [context, context.appContext.loader]);

  return (
    context &&
    context.appContext &&
    context.appContext.loader && (
      <div
        style={{ top: window.pageYOffset }}
        className={`${style.app_loader_container} position-absolute h-100 w-100 d-flex justify-content-center align-items-center`}
      >
        <div className={`${style.loader} spinner-border`} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  );
}

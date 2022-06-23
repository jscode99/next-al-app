import { useState, useEffect, useContext } from "react";
import App from "next/app";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
// Context API
import { useRouter } from "next/router";
import { ErrorBoundary } from "react-error-boundary";
import AppContext from "../app/AppContext";
import AppLoader from "../app/common-component/app-loader/AppLoader";
// Language Trans Lib
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../i18n";
// Global styles
import "../styles/globals.css";
import "antd/dist/antd.css";
// import sslRootCAs from "ssl-root-cas";
// require("ssl-root-cas").inject();

function MyApp({ Component, pageProps }) {
  // sslRootCAs.inject();
  const router = useRouter();
  const [appContext, setAppContext] = useState({
    loader: false,
    fLinkClick: false,
    // successStoriesAR: null,
  });
  // useEffect(() => {
  //   process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  // }, []);

  // process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  // const ErrorFallback = ({ error, resetErrorBoundary }) => {
  //   console.log("ErrorFallback", router.pathname);
  //   return (
  //     <div
  //       className={`d-flex justify-content-center align-items-center`}
  //       style={{
  //         width: "100vw",
  //         height: "100vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //       role="alert"
  //     >
  //       <div>
  //         <div
  //           style={{
  //             width: "50vw",
  //             height: "5px",
  //             backgroundColor: "#99999950",
  //           }}
  //         >
  //           <div
  //             style={{
  //               width: "25vw",
  //               height: "5px",
  //               backgroundColor: "#061BCF",
  //             }}
  //           ></div>
  //         </div>
  //         <div
  //           style={{
  //             textAlign: "center",
  //             color: "#061BCF",
  //           }}
  //         >
  //           Loading...
  //         </div>
  //       </div>

  //       {/* <button
  //         onClick={() => {
  //           console.log("btn", router.pathname);
  //           resetErrorBoundary();
  //         }}
  //       >
  //         Click
  //       </button> */}
  //       <div
  //         style={{
  //           visibility: "hidden",
  //         }}
  //       >
  //         {setTimeout(() => {
  //           resetErrorBoundary();
  //         }, 200)}
  //       </div>
  //     </div>
  //   );
  // };
  // console.log("Myapp", router.pathname);
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {/* <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          router.reload();
        }}
      > */}
      <Component {...pageProps} />
      {/* </ErrorBoundary> */}
    </AppContext.Provider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);

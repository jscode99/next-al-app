import { useState, useEffect } from "react";
import App from "next/app";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
// Context API
import AppContext from "../app/AppContext";
// Language Trans Lib
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../i18n";
// Global styles
import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  const [appContext, setAppContext] = useState({
    loader: false,
    languageCode: "en",
    successStoriesAR: null,
  });
  useEffect(() => {}, []);

  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

//    export async function
// MyApp.getInitialProps = async appContext => {

//   return {
//   };
// };

export default appWithTranslation(MyApp, nextI18NextConfig);

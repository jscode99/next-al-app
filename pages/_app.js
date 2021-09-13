import { useState, useEffect } from "react";
import App from "next/app";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
// Context API
import { useRouter } from "next/router";
import { ErrorBoundary } from "react-error-boundary";
import AppContext from "../app/AppContext";
// Language Trans Lib
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../i18n";
// Global styles
import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [appContext, setAppContext] = useState({
    loader: false,
    languageCode: "en",
    successStoriesAR: null,
  });
  useEffect(() => {}, []);

  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  };

  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          router.reload(window.location.pathname);
          // reset the state of your app so the error doesn't happen again
        }}
      >
        {/* <Component {...pageProps} /> */}
      </ErrorBoundary>
    </AppContext.Provider>
  );
}

//    export async function
// MyApp.getInitialProps = async appContext => {

//   return {
//   };
// };

export default appWithTranslation(MyApp, nextI18NextConfig);

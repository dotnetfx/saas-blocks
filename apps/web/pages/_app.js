import React from "react";
import "../styles/globals.css";

import { SaasBlocksProvider, ColorSwitch } from 'components';

function MyApp({ Component, pageProps }) {
  return (
    <SaasBlocksProvider>
      <Component {...pageProps} />
    </SaasBlocksProvider>
  );
}

export default MyApp;
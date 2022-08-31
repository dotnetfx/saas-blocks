import React from "react";
import { Box } from "native-base";
import { SaasBlocksProvider, CallToAction, ColorSwitch } from 'components';

export default function App() {
  return (
    <SaasBlocksProvider>
      <Box flex="1" h="full" justifyContent="center" alignItems="center"
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
      >
        <ColorSwitch />
        <CallToAction />

      </Box>
    </SaasBlocksProvider>
  );
}

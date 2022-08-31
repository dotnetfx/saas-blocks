import React from "react";
import { Box } from "native-base";
import { ColorSwitch, CallToAction } from 'components';

// Start editing here, save and see your changes.
export default function App() {
  return (
    <Box flex="1" h="full" justifyContent="center" alignItems="center"
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <ColorSwitch />
      <CallToAction />

    </Box>
  )
}

import React from "react";
import { Text, Box } from "native-base";
import { ColorSwitch } from 'components';

// Start editing here, save and see your changes.
export default function App() {
  return (
    <Box flex h="full" justifyContent="center" alignItems="center"
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <ColorSwitch />
      <Text color="blue.500" fontSize="xl"
          _dark={{ color: "blueGray.200" }}
          _light={{ color: "blueGray.800" }}>Hello World...
      </Text>
    </Box>
  )
}

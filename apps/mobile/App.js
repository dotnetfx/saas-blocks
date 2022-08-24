import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import { ColorModeSwitch } from 'components';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex h="full" justifyContent="center" alignItems="center"
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
      >
       <ColorModeSwitch />
        <Text color="blue.500" fontSize="xl"
          _dark={{ color: "blueGray.200" }}
          _light={{ color: "blueGray.800" }}>
          Hello World...
        </Text>
      </Box>
    </NativeBaseProvider>
  );
}

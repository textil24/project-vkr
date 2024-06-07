import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, useColorMode } from '@chakra-ui/react';

const ButtonColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box order={'3'}>
      <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
    </Box>
  );
};

export default ButtonColorMode;

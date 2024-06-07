import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Flex,
  Heading,
  useColorMode
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { ButtonColorMode } from '.';
import { useEffect, useState } from 'react';

const Account = () => {
  const colorScheme: 'light' | 'dark' = window.Telegram.WebApp.colorScheme;
  const [userTelegram, setUserTelegram] = useState<any>(window.Telegram.WebApp.initDataUnsafe.user);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    colorScheme === 'dark' && toggleColorMode();
  }, [colorScheme]);

  return (
    <Menu>
      <MenuButton>
        <Avatar cursor={'pointer'} name={userTelegram && userTelegram.first_name} size="sm">
          <AvatarBadge boxSize="1.1em" bg="green.500" />
        </Avatar>
      </MenuButton>
      <MenuList p={2}>
        <Box>
          <Heading mb={2} as="h5" size="sm">
            Профиль:
          </Heading>
          <Flex alignItems={'center'}>
            <Avatar cursor={'pointer'} name={userTelegram && userTelegram.first_name} size="sm" mr={2} />
            <Box>
              <Flex fontWeight={'500'}>
                <Text mr={1}>{userTelegram && userTelegram.first_name}</Text>
                <Text>{userTelegram && userTelegram.last_name}</Text>
              </Flex>
              <Text color={'gray.500'}>{userTelegram && userTelegram.username}</Text>
            </Box>
          </Flex>
        </Box>
        <MenuDivider />
        <Box>
          <Heading mb={2} as="h5" size="sm">
            Режимы:
          </Heading>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Button isDisabled={true} fontSize={24}>
              <Icon icon="openmoji:flag-russia" />
            </Button>
            <Button isDisabled={true}>
              <Icon icon="subway:admin" />
            </Button>
            <ButtonColorMode />
          </Flex>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default Account;

import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

// ! data.data проблемы с типом
const Info: FC<any> = ({ data }) => {
  return (
    <Box>
      <Heading mb={3} size="md">
        {data.data.title}
      </Heading>
      <Stack border={'1px solid #DEE2E7'} padding={'24px'} borderRadius={'15px'}>
        {data.data.boxItems.map((item: any, index: any) => {
          switch (data.data.type) {
            case 'link':
              return (
                <Link key={item.id} to={item.link ?? ''}>
                  <Text fontSize="md">
                    {index + 1}. {item.text}
                  </Text>
                </Link>
              );
            case 'icon':
              return (
                <Text key={item.id} display={'flex'} alignItems={'center'} fontSize="md">
                  {item.icon} {item.text}
                </Text>
              );
            default:
              return null;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Info;

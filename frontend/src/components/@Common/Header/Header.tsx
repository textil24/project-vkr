import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Grid, Heading, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IGetLesson } from '../../../apollo/types';
import { Account } from '..';

interface IHeader {
  lesson?: IGetLesson;
  loading?: boolean;
  type: 'home' | 'course' | 'lesson';
}

const Header: FC<IHeader> = ({ type, lesson, loading }) => {
  const bgColor = useColorModeValue('white', '#1A202C');

  return (
    <Box
      mb={6}
      position={'fixed'}
      top={'0'}
      right={'0'}
      width={'100%'}
      zIndex={999}
      px={'16px'}
      py={'10px'}
      bgColor={bgColor}
      boxShadow="md"
    >
      <Grid alignItems={'center'} templateColumns={`48px 1fr 32px`}>
        {type === 'home' && <Box order={'1'} height={'40px'}></Box>}
        {!(type === 'home') && (
          <Link to={type === 'lesson' ? '/courses/' + lesson?.getLesson.course.id : '/'}>
            <Box order={'1'}>
              <Button display={'flex'} justifyContent={'flex-start'} padding={0} bgColor={'transparent'}>
                <ArrowBackIcon />
              </Button>
            </Box>
          </Link>
        )}
        <Heading
          display={'flex'}
          justifyContent={'center'}
          fontFamily={'monospace'}
          order={'2'}
          textAlign="center"
          size="md"
        >
          <span style={{ color: '#22C35E' }}>naukograd&lt;</span>academy<span style={{ color: '#22C35E' }}>&gt;</span>
        </Heading>
        <Flex order={'3'} justifyContent={'flex-end'}>
          <Account />
        </Flex>
      </Grid>
    </Box>
  );
};

export default Header;

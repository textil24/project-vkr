import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from '@chakra-ui/icons';
import { Button, Text, Grid, GridItem, useColorModeValue, Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Burger } from '../@Common/Header';
import { IGetLesson } from '../../apollo/types';

interface IButtonNavigation {
  lesson?: IGetLesson;
  loading?: boolean;
  courseId?: string;
  prevId: string | null;
  nextId: string | null;
}

const ButtonNavigation: FC<IButtonNavigation> = ({ lesson, loading, courseId, prevId, nextId }) => {
  const bgColor = useColorModeValue('white', '#1A202C');

  const currentLesson = lesson?.getLesson.orderBy;
  const countLessons = lesson?.getLesson.course.lessons.length;

  return (
    <Grid
      paddingRight={'16px'}
      paddingLeft={'16px'}
      py={3}
      position={'fixed'}
      bottom={0}
      left={0}
      width={'100%'}
      templateColumns="48px 1fr 48px 48px"
      gap={2}
      mt={6}
      alignItems={'center'}
      bgColor={bgColor}
      boxShadow={'0 -4px 6px -1px rgba(0, 0, 0, 0.1)'}
    >
      <Box order={1}>
        <Burger lesson={lesson} loading={loading} />
      </Box>
      <Text textAlign={'center'} order={2}>
        Урок {currentLesson} из {countLessons}
      </Text>
      {prevId ? (
        <GridItem order={3}>
          <Link to={'/lessons/' + prevId}>
            <Button>
              <ChevronLeftIcon />
            </Button>
          </Link>
        </GridItem>
      ) : (
        <Button order={3} isDisabled={true}>
          <ChevronLeftIcon />
        </Button>
      )}
      {nextId ? (
        <GridItem order={4}>
          <Link to={'/lessons/' + nextId}>
            <Button>
              <ChevronRightIcon />
            </Button>
          </Link>
        </GridItem>
      ) : (
        <GridItem order={4}>
          <Link to={'/courses/' + courseId}>
            <Button colorScheme="whatsapp">
              <CheckIcon />
            </Button>
          </Link>
        </GridItem>
      )}
    </Grid>
  );
};

export default ButtonNavigation;

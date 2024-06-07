import { Card as CardItem, CardBody, Heading, Stack, Text, Badge, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Progress } from '.';

interface ICard {
  id: string;
  name: string;
  // category: string
  preview: string;
  progressCourse: number | undefined;
}

const Card: FC<ICard> = ({ id, name, preview, progressCourse }) => {
  return (
    <Link to={'/courses/' + id}>
      <CardItem boxShadow={'rgba(36, 36, 36, 0.07) 0px 1px 12px 2px'}>
        <CardBody>
          <Stack spacing={4}>
            <Heading size="md">{name}</Heading>
            <Text>{preview}</Text>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <Badge>Курс</Badge>
              <Progress percent={progressCourse} />
            </Flex>
          </Stack>
        </CardBody>
      </CardItem>
    </Link>
  );
};

export default Card;

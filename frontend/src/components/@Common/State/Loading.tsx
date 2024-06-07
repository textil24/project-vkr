import { Card as CardItem, CardBody, Heading, Stack, Text, Badge, Skeleton, Box, Button, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Breadcrumb from '../Breadcrumb';

const cards = [1, 2, 3];
const infoElements = [1, 2, 3, 4];

interface ILoading {
  type: 'home' | 'course-about' | 'course-info' | 'lesson' | 'burger-items' | 'burger-heading';
}

const Loading: FC<ILoading> = ({ type }) => {
  switch (type) {
    case 'home':
      return cards.map((_, index) => (
        <CardItem key={index} boxShadow={'rgba(36, 36, 36, 0.07) 0px 1px 12px 2px'}>
          <CardBody>
            <Stack spacing={4}>
              <Skeleton>
                <Heading size="md">Lorem ipsum</Heading>
              </Skeleton>
              <Skeleton>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam quisquam nesciunt nisi
                </Text>
              </Skeleton>
              <Skeleton>
                <Stack direction="row">
                  <Badge>Category</Badge>
                </Stack>
              </Skeleton>
            </Stack>
          </CardBody>
        </CardItem>
      ));
    case 'course-about':
      return (
        <>
          <Skeleton>
            <Breadcrumb courseId="" type="course" />
          </Skeleton>
          <Skeleton>
            <Heading as="h2" size="xl">
              Lorem ipsum
            </Heading>
          </Skeleton>
          <Skeleton>
            <Text fontSize="lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus dignissimos illo ipsam
              minima explicabo repellat vitae, sequi dolorem aliquid enim aut at fugit voluptate. Ex sequi quibusdam
              officia odit!
            </Text>
          </Skeleton>
          <Box mt={5} textAlign={'center'} display={'flex'} justifyContent={'center'}>
            <Skeleton>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme="whatsapp" size="md">
                Lorem ipsum
              </Button>
            </Skeleton>
          </Box>
        </>
      );
    case 'course-info':
      return (
        <>
          <Box>
            <Heading mb={3} size="md">
              Список уроков
            </Heading>
            <Stack border={'1px solid #DEE2E7'} padding={'24px'} borderRadius={'15px'}>
              {infoElements.map((_, index) => (
                <Skeleton key={index} height="24px">
                  <Text fontSize="md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                </Skeleton>
              ))}
            </Stack>
          </Box>
          {/* <Box>
                        <Heading mb={3} size='md'>
                            Это учебное пособие
                        </Heading>
                        <Stack border={"1px solid #DEE2E7"} padding={"24px"} borderRadius={"15px"}>
                            {infoElements.map((_, index) =>
                                <Skeleton key={index} height="24px">
                                    <Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </Text>
                                </Skeleton>
                            )}
                        </Stack>
                    </Box> */}
        </>
      );
    case 'lesson':
      return (
        <>
          <Skeleton>
            <Breadcrumb courseId="" />
          </Skeleton>
          <Skeleton>
            <Heading my={2} as="h2" size="2xl">
              Lorem ipsum
            </Heading>
          </Skeleton>
          <Stack spacing={2}>
            <Skeleton>
              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem enim, reprehenderit harum repellendus
                dicta sequi corrupti et! Quas eaque voluptatibus veritatis libero autem corporis. Enim libero quaerat
                saepe vero qui!
              </Text>
            </Skeleton>
            <Skeleton height={'360px'}>
              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem enim, reprehenderit harum repellendus
                dicta sequi corrupti et! Quas eaque voluptatibus veritatis libero autem corporis. Enim libero quaerat
                saepe vero qui!
              </Text>
            </Skeleton>
            <Skeleton>
              <Heading mb={2} as="h2" size="2xl">
                Lorem ipsum
              </Heading>
            </Skeleton>
            <Skeleton height={'360px'}>
              <Text fontSize="md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem enim, reprehenderit harum repellendus
                dicta sequi corrupti et! Quas eaque voluptatibus veritatis libero autem corporis. Enim libero quaerat
                saepe vero qui!
              </Text>
            </Skeleton>
          </Stack>
          <Flex mt={6} justifyContent={'space-between'} alignItems={'center'}>
            <Skeleton>
              <Button leftIcon={<ArrowBackIcon />} colorScheme="gray">
                Предыдущий
              </Button>
            </Skeleton>

            <Skeleton>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray">
                Следующий
              </Button>
            </Skeleton>
          </Flex>
        </>
      );
    case 'burger-items':
      return (
        <Stack spacing={2}>
          <Skeleton>
            <Heading as="h5" size="sm">
              Lorem ipsum
            </Heading>
          </Skeleton>
          <Skeleton>
            <Heading as="h5" size="sm">
              Lorem ipsum
            </Heading>
          </Skeleton>
          <Skeleton>
            <Heading as="h5" size="sm">
              Lorem ipsum
            </Heading>
          </Skeleton>
          <Skeleton>
            <Heading as="h5" size="sm">
              Lorem ipsum
            </Heading>
          </Skeleton>
          <Skeleton>
            <Heading as="h5" size="sm">
              Lorem ipsum
            </Heading>
          </Skeleton>
        </Stack>
      );
    case 'burger-heading':
      return (
        <Stack spacing={2}>
          <Skeleton>
            <Button width={'200px'} leftIcon={<ArrowBackIcon />} mr={2}>
              Lorem ipsum
            </Button>
          </Skeleton>
        </Stack>
      );
    default:
      return null;
  }
};

export default Loading;

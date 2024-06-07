import { Heading, Text, Stack, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '@iconify/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';

interface ISelectionWrapper {
  type?: 'task' | 'answerSelector';
  name: string;
  children: React.ReactNode;
}

const SelectionWrapper: FC<ISelectionWrapper> = ({ type, name, children }) => {
  return (
    <Stack direction={'column'}>
      <Flex alignItems={'center'}>
        {type === 'task' && (
          <Icon
            icon="streamline:interface-edit-write-1-edit-edition-form-pen-text-write"
            style={{ marginRight: '12px' }}
          />
        )}
        {type === 'answerSelector' && <QuestionOutlineIcon mr={'12px'} />}
        <Heading display={'flex'} size={'sm'}>
          {name}{' '}
          <Text ml={1} color="red.500">
            *
          </Text>
        </Heading>
      </Flex>
      {children}
    </Stack>
  );
};

export default SelectionWrapper;

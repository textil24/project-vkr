import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { Heading, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { Icon } from '@iconify/react';

interface IMultitaskTitle {
  multitaskIsCorrect: boolean;
  type: 'answerSelector' | 'task';
  flag: boolean;
  isFlagAndStatus: boolean;
  question?: string;
  title?: string;
}

const MultitaskTitle: FC<IMultitaskTitle> = ({ multitaskIsCorrect, type, flag, isFlagAndStatus, question, title }) => {
  const сolor = useColorModeValue('#1A202C', 'white');

  const titleColorProgress = multitaskIsCorrect ? '#22C35E' : сolor;
  const titleColorMultitask = isFlagAndStatus ? '#22C35E' : сolor;
  const titleColorTask = flag ? '#22C35E' : сolor;
  const titleColor = multitaskIsCorrect
    ? titleColorProgress
    : type === 'answerSelector'
      ? titleColorMultitask
      : titleColorTask;

  return (
    <Heading display={'flex'} alignItems={'center'} color={titleColor} size="sm">
      {type === 'answerSelector' ? (
        <>
          <QuestionOutlineIcon mr={2} />
          {question}
        </>
      ) : (
        <>
          <Icon
            icon="streamline:interface-edit-write-1-edit-edition-form-pen-text-write"
            style={{ marginRight: '8px' }}
          />
          {title}
        </>
      )}
    </Heading>
  );
};

export default MultitaskTitle;

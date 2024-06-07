import { Box, Checkbox, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { ICreateProgress } from '../../../apollo/types';

interface IMultitaskAnswers {
  setDisabled: (args: boolean) => void;
  addProgress: (args: any) => void;
  getLessonWriteQuery: () => void;
  progressMutation: ICreateProgress | undefined | null;
  lessonId: string | undefined;
  task?: {
    id: number;
    title: string;
    text: string;
  };
  answerSelector?: {
    id: number;
    question: string;
    answers: string[];
    corrects: string[];
  };

  multitaskIsCorrect: boolean;

  // type: "answerSelector" | "task"
  type: any;
  flag: boolean;
  isFlagAndStatus: boolean;
  statusAnswers: boolean;

  off: () => void;
  toggle: () => void;

  errorCount: number;
  setErrorCount: (args: number) => void;
  getCheckboxProps: (args: { value: string }) => object;

  text?: string;
  answers?: string[];
}

const MultitaskAnswers: FC<IMultitaskAnswers> = ({
  setDisabled,
  addProgress,
  getLessonWriteQuery,
  progressMutation,
  lessonId,
  task,
  answerSelector,
  multitaskIsCorrect,
  statusAnswers,
  text,
  flag,
  type,
  isFlagAndStatus,
  off,
  toggle,
  answers,
  errorCount,
  setErrorCount,
  getCheckboxProps
}) => {
  const checkboxColorProgress = multitaskIsCorrect ? 'whatsapp' : 'telegram';
  const checkboxColor = multitaskIsCorrect ? checkboxColorProgress : isFlagAndStatus ? 'whatsapp' : 'telegram';

  return (
    <Stack spacing={2} direction="column">
      {type === 'answerSelector' ? (
        <>
          {answers?.map((text, index) => (
            <Box
              key={index}
              onClick={() => {
                off(), !errorCount && isFlagAndStatus && setErrorCount(3), statusAnswers && setErrorCount(3);
              }}
            >
              <Checkbox colorScheme={checkboxColor} {...getCheckboxProps({ value: text })}>
                {text}
              </Checkbox>
            </Box>
          ))}
        </>
      ) : (
        <Box>
          <Checkbox
            isChecked={multitaskIsCorrect ? true : flag}
            onChange={() => {
              setDisabled(true);
              toggle(), !(progressMutation?.createProgress.contentId === task?.id) && !flag && getLessonWriteQuery();
            }}
            colorScheme="whatsapp"
            textDecoration={multitaskIsCorrect ? 'line-through' : flag ? 'line-through' : 'none'}
          >
            {text}
          </Checkbox>
        </Box>
      )}
    </Stack>
  );
};

export default MultitaskAnswers;

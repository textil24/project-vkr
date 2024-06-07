import { Box, Button, Stack } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import Alert from './Alert';
interface IMultitaskControls {
  setDisabled: (args: boolean) => void;
  addProgress: (args: any) => void;
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
  getLessonWriteQuery: () => void;

  type: 'answerSelector' | 'task';

  flag: boolean;
  on: () => void;
  errorCount: number;
  setErrorCount: (args: number) => void;
  setValue: (args: string[]) => void;
  statusAnswers: boolean;
  selectAnswers: (string | number)[];
  corrects?: string[];
}

const MultitaskControls: FC<IMultitaskControls> = ({
  setDisabled,
  addProgress,
  lessonId,
  task,
  answerSelector,
  getLessonWriteQuery,
  multitaskIsCorrect,
  type,
  flag,
  errorCount,
  setErrorCount,
  statusAnswers,
  selectAnswers,
  on,
  setValue,
  corrects
}) => {
  useEffect(() => {
    multitaskIsCorrect && setValue(corrects ?? []);
  }, [multitaskIsCorrect]);

  const isEmptySelectAnswers = selectAnswers.length === 0;
  const statusAnswer = multitaskIsCorrect ? (
    <Alert status="success" />
  ) : flag ? (
    statusAnswers ? (
      <Alert status="success" />
    ) : (
      <Alert status="error" errorCount={errorCount} />
    )
  ) : (
    <></>
  );

  if (type === 'task') {
    return <></>;
  }

  return (
    <Box>
      <Stack spacing={2} direction="row">
        {multitaskIsCorrect ? (
          <></>
        ) : (
          !(flag && statusAnswers) && (
            <>
              <Button
                onClick={() => {
                  on(), errorCount && !statusAnswers && setErrorCount(errorCount - 1);
                  statusAnswers && getLessonWriteQuery();
                  statusAnswers && setDisabled(true);
                }}
                isDisabled={isEmptySelectAnswers}
              >
                Проверить
              </Button>
              {!errorCount && (
                <Button
                  onClick={() => {
                    setValue(corrects ?? []), getLessonWriteQuery(), setDisabled(true);
                  }}
                  colorScheme="whatsapp"
                >
                  Показать ответ
                </Button>
              )}
            </>
          )
        )}
      </Stack>
      {statusAnswer}
    </Box>
  );
};

export default MultitaskControls;

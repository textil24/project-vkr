import { Button, Heading, Stack, useBoolean, useCheckboxGroup } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import MultitaskControls from './MultitaskControls';
import MultitaskAnswers from './MultitaskAnswers';
import MultitaskTitle from './MultitaskTitle';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PROGRESS, GET_PROGRESS } from '../../../apollo/progress';
import { ICreateProgress, IGetLesson, IGetProgress } from '../../../apollo/types';
import client from '../../../apollo/client';
import { GET_LESSON } from '../../../apollo/lesson';
import { GET_COURSES } from '../../../apollo/home';

interface IMultitask {
  lesson: IGetLesson;
  getMultitaskIsCorrect: (lessonId: string | undefined, contentId: number | undefined) => boolean;
  type: 'answerSelector' | 'task';
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
}

const Multitask: FC<IMultitask> = ({ lesson, getMultitaskIsCorrect, type, lessonId, task, answerSelector }) => {
  const { value: selectAnswers, setValue, getCheckboxProps } = useCheckboxGroup();
  const [flag, setFlag] = useBoolean();
  const [disabled, setDisabled] = useState(false);
  const [errorCount, setErrorCount] = useState(3);
  const contentId = type === 'answerSelector' ? answerSelector?.id : task?.id;

  const [addProgress, { data: progressMutation }] = useMutation<ICreateProgress>(ADD_PROGRESS);

  const getStatusAnswers = () => {
    if (selectAnswers.length !== answerSelector?.corrects.length) {
      return false;
    }

    for (const answer of selectAnswers) {
      if (!answerSelector?.corrects.includes(String(answer))) {
        return false;
      }
    }

    return true;
  };

  const statusAnswers = getStatusAnswers();
  const multitaskIsCorrect = getMultitaskIsCorrect(lessonId, contentId);
  const isFlagAndStatus = flag && statusAnswers;

  const borderLeftColorProgress = multitaskIsCorrect && '#22C35E';
  const borderLeftColorMultitask = isFlagAndStatus ? '#22C35E' : '#0088CC';
  const borderLeftColorTask = flag ? '#22C35E' : '#0088CC';
  const borderLeft = `2px solid ${multitaskIsCorrect ? borderLeftColorProgress : type === 'answerSelector' ? borderLeftColorMultitask : borderLeftColorTask}`;

  const currentContentTotalIsEstimated = lesson.getLesson.content.filter(item => item.isEstimated).length;
  const currentContentTotalDone = lesson.getLesson.userProgress.contentTotalDone;

  function getLessonWriteQuery() {
    return (
      client.writeQuery({
        query: GET_LESSON,
        data: {
          getLesson: {
            ...lesson.getLesson,
            contentTotalIsEstimated: currentContentTotalIsEstimated,
            userProgress: {
              ...lesson.getLesson.userProgress,
              contentTotalDone: currentContentTotalDone + 1,
              contentTotalDonePercent: Math.floor(
                ((currentContentTotalDone + 1) / currentContentTotalIsEstimated) * 100
              ),
              results: [
                ...lesson.getLesson.userProgress.results,
                {
                  tgUserId: 666,
                  contentId: contentId,
                  lessonId: lessonId,
                  isCorrect: true
                }
              ]
            }
          }
        }
      }),
      addProgress({
        variables: {
          input: {
            tgUserId: 666,
            contentId: contentId,
            lessonId: lessonId,
            isCorrect: true
          }
        }
      })
    );
  }

  return (
    <Stack
      pl={4}
      borderLeft={borderLeft}
      py={2}
      spacing={2}
      direction="column"
      style={disabled ? { pointerEvents: 'none' } : multitaskIsCorrect ? { pointerEvents: 'none' } : {}}
    >
      <MultitaskTitle
        multitaskIsCorrect={multitaskIsCorrect}
        type={type}
        flag={flag}
        isFlagAndStatus={isFlagAndStatus}
        question={answerSelector?.question}
        title={task?.title}
      />
      <MultitaskAnswers
        setDisabled={setDisabled}
        addProgress={addProgress}
        getLessonWriteQuery={getLessonWriteQuery}
        lessonId={lessonId}
        task={task}
        answerSelector={answerSelector}
        multitaskIsCorrect={multitaskIsCorrect}
        progressMutation={progressMutation}
        type={type}
        flag={flag}
        isFlagAndStatus={isFlagAndStatus}
        statusAnswers={statusAnswers}
        off={setFlag.off}
        toggle={setFlag.toggle}
        errorCount={errorCount}
        setErrorCount={setErrorCount}
        text={task?.text}
        getCheckboxProps={getCheckboxProps}
        answers={answerSelector?.answers}
      />
      <MultitaskControls
        setDisabled={setDisabled}
        addProgress={addProgress}
        lessonId={lessonId}
        task={task}
        answerSelector={answerSelector}
        multitaskIsCorrect={multitaskIsCorrect}
        getLessonWriteQuery={getLessonWriteQuery}
        type={type}
        flag={flag}
        statusAnswers={statusAnswers}
        on={setFlag.on}
        errorCount={errorCount}
        setErrorCount={setErrorCount}
        setValue={setValue}
        selectAnswers={selectAnswers}
        corrects={answerSelector?.corrects}
      />
    </Stack>
  );
};

export default Multitask;

import { Box, Heading, Stack, Text, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Header, Loading, Error } from '../components/@Common';
import { ButtonNavigation, Monaco, Multitask, Note, Prism } from '../components/Lesson';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_LESSON } from '../apollo/lesson';
import { IGetLesson } from '../apollo/types';
import parse from 'html-react-parser';

enum LessonElementType {
  title = 'title',
  text = 'text',
  image = 'image',
  answerSelector = 'answerSelector',
  task = 'task',
  note = 'note',
  prism = 'prism',
  monaco = 'monaco'
}

const Lesson = () => {
  const params = useParams();
  const {
    data: lesson,
    loading,
    error
  } = useQuery<IGetLesson>(GET_LESSON, {
    variables: {
      getLessonId: params.id ?? ''
    }
  });

  const lessonId = lesson?.getLesson.id;

  function getMultitaskIsCorrect(lessonId: string | undefined, contentId: number | undefined): boolean {
    return lesson?.getLesson.userProgress.results.find(
      item => item.lessonId === lessonId && item.contentId === contentId
    )?.isCorrect
      ? true
      : false;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <Box>
      <Header lesson={lesson} loading={loading} type="lesson" />
      {error && <Error />}
      {loading && <Loading type="lesson" />}
      {lesson && (
        <>
          <Heading my={2} fontSize={24}>
            {lesson.getLesson.name}
          </Heading>
          <Stack spacing={5}>
            {lesson?.getLesson.content.map((item, index) => {
              switch (item.type) {
                case LessonElementType.title:
                  return (
                    <Heading key={`${index}_${item.id}`} mt={4} size="md">
                      {item.content}
                    </Heading>
                  );
                case LessonElementType.text:
                  return (
                    <Text key={`${index}_${item.id}`} fontSize="md">
                      {parse(item.content)}
                    </Text>
                  );
                case LessonElementType.image:
                  return <Image key={`${index}_${item.id}`} sizes={'100%'} src={item.content} alt="Image" />;
                case LessonElementType.answerSelector:
                  return (
                    <Multitask
                      key={`${index}_${item.id}`}
                      lesson={lesson}
                      getMultitaskIsCorrect={getMultitaskIsCorrect}
                      lessonId={lesson?.getLesson.id}
                      type="answerSelector"
                      answerSelector={{
                        id: item.id,
                        question: item.question,
                        answers: item.answers,
                        corrects: item.corrects
                      }}
                    />
                  );
                case LessonElementType.task:
                  return (
                    <Multitask
                      key={`${index}_${item.id}`}
                      lesson={lesson}
                      getMultitaskIsCorrect={getMultitaskIsCorrect}
                      lessonId={lesson?.getLesson.id}
                      type="task"
                      task={{
                        id: item.id,
                        title: item.title,
                        text: item.text
                      }}
                    />
                  );
                case LessonElementType.note:
                  return <Note key={`${index}_${item.id}`} text={item.text} />;
                case LessonElementType.prism:
                  return <Prism key={`${index}_${item.id}`} code={item.content} />;
                case LessonElementType.monaco:
                  return <Monaco key={`${index}_${item.id}`} code={[item.content]} />;
                default:
                  return null;
              }
            })}
          </Stack>
          <ButtonNavigation
            lesson={lesson}
            loading={loading}
            courseId={lesson.getLesson.course.id}
            prevId={lesson.getLesson.prevLessonId}
            nextId={lesson.getLesson.nextLessonId}
          />
        </>
      )}
    </Box>
  );
};

export default Lesson;

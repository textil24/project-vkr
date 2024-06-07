import { Button, Container, Stack } from '@chakra-ui/react';
import { Editor, EditorPrism, EditorTask, EditorAnswerSelector } from '../../components/Admin';
import { Header } from '../../components/@Common';
import { useForm } from 'react-hook-form';

export interface IEditLesson {
  content: [
    {
      title: string;
      text: string;
    },
    {
      content: string;
    },
    {
      progLang: string;
      code: string;
    }
  ];
}

const EditLesson = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting }
  } = useForm<IEditLesson>();

  const onSubmit = (data: any) => {
    console.log(data);
    if (data.title) {
      console.log(data);
    }
  };

  return (
    <Container maxW="container.md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Header type="home" />

          <Editor index={1} errors={errors} setError={setError} clearErrors={clearErrors} setValue={setValue} />

          <EditorTask index={0} register={register} errors={errors} maxLength={100} />

          <EditorAnswerSelector />

          <EditorPrism register={register} errors={errors} />
        </Stack>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default EditLesson;

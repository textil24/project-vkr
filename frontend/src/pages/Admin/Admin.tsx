import { Box, Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Header } from '../../components/@Common';
import { LessonsDragAndDrop, Select, Textarea } from '../../components/Admin';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_COURSE } from '../../apollo/admin';
export interface IAdmin {
  name: string;
  category: string;
  preview: string;
  description: string;
}

export interface ICategory {
  value: string;
  name: string;
}

const Admin = () => {
  const [createCourse] = useMutation(CREATE_COURSE);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<IAdmin>();

  const onSubmit = (data: any) => {
    if (data.name) {
      // createCourse({
      //     variables: {
      //         input: {
      //             ...data
      //         }
      //     }
      // })
      console.log(data);
    }
  };

  const categories = [
    {
      value: 'course',
      name: 'Курс'
    },
    {
      value: 'quiz',
      name: 'Тестирование'
    },
    {
      value: 'article',
      name: 'Статья'
    }
  ];

  return (
    <Container maxW="container.md">
      <Header type="home" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} direction="column">
          <Textarea type="name" name="Название" maxLength={50} error={errors.name} register={register} />
          <Select
            name="Категория"
            type="category"
            categories={categories}
            error={errors.category}
            register={register}
          />
          <Textarea name="Краткое описание" type="preview" maxLength={100} error={errors.preview} register={register} />
          <Textarea
            name="Подробное описание"
            type="description"
            maxLength={200}
            error={errors.description}
            register={register}
          />
          <LessonsDragAndDrop name="Список уроков" />
          <Flex>
            <Button onClick={onSubmit} colorScheme="whatsapp" type="submit">
              Сохранить
            </Button>
          </Flex>
        </Stack>
      </form>
    </Container>
  );
};

export default Admin;

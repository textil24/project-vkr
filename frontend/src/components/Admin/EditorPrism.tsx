import { Box, Stack, Text } from '@chakra-ui/react';
import { Monaco } from '../Lesson';
import { Select, SelectionWrapper } from '.';
import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IEditLesson } from '../../pages/Admin/EditLesson';

const categories = [
  {
    value: 'javascript',
    name: 'JavaScript'
  },
  {
    value: 'typescript',
    name: 'TypeScript'
  },
  {
    value: 'graphql',
    name: 'GraphQL'
  }
];

interface IEditorPrism {
  register: UseFormRegister<IEditLesson>;
  errors: FieldErrors<IEditLesson>;
}

const EditorPrism: FC<IEditorPrism> = ({ register, errors }) => {
  return (
    <SelectionWrapper name={'Код для ознакомления'}>
      <Stack pl={4} borderLeft={'2px solid #0088CC'} py={2} spacing={2} direction="column">
        <Box borderRadius={'10px'}>
          <Select
            name={'Выбрать язык программирования'}
            type={'category'}
            categories={categories}
            errors={errors}
            register={register}
          />
        </Box>
        {/* {errors.content?.[0]?.message ?? <Text color={"red.500"}>Поле обязательное</Text>} */}
        <SelectionWrapper name="Редактор кода">
          <Box borderRadius={'10px'} overflow={'hidden'}>
            <Monaco code={["console.log('Hello world')"]} />
          </Box>
        </SelectionWrapper>
        {/* {errors.content?.[0]?.message ?? <Text color={"red.500"}>Поле обязательное</Text>} */}
      </Stack>
    </SelectionWrapper>
  );
};

export default EditorPrism;

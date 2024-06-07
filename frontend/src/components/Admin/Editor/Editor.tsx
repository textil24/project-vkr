import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SelectionWrapper } from '..';
import { Box, Button, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { FieldErrors, UseFormClearErrors, UseFormSetError, UseFormSetValue } from 'react-hook-form';
import { IEditLesson } from '../../../pages/Admin/EditLesson';

interface IEditor {
  index: number;
  errors: FieldErrors<IEditLesson>;
  setError: UseFormSetError<IEditLesson>;
  clearErrors: UseFormClearErrors<IEditLesson>;
  setValue: UseFormSetValue<IEditLesson>;
}

const Editor: FC<IEditor> = ({ index, errors, setError, clearErrors, setValue }) => {
  const errorContent = errors?.content?.[index]?.content;

  return (
    <SelectionWrapper name="Текстовый редактор">
      <Box border={errorContent ? '1px solid red' : ''}>
        <CKEditor
          editor={ClassicEditor}
          // data="<p>Hello from CKEditor&nbsp;5!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            if (!data) {
              setError(`content.${index}.content`, { message: 'Это поле обязательно!' });
            } else {
              clearErrors(`content.${index}.content`);
            }
            setValue(`content.${index}.content`, data);
          }}
        />
      </Box>
      {errorContent && <Text color={'red.500'}>{errorContent.message}</Text>}
    </SelectionWrapper>
  );
};

export default Editor;

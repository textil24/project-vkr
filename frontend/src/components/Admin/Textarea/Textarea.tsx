import { FC } from 'react';
import './Textarea.css';
import TextareaAutosize from 'react-textarea-autosize';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { IAdmin } from '../../../pages/Admin/Admin';
import { Text } from '@chakra-ui/react';
import { SelectionWrapper } from '..';

interface ITextarea {
  name: string;
  type: 'name' | 'preview' | 'description';
  maxLength: number;
  error: FieldError | undefined;
  register: UseFormRegister<IAdmin>;
}

const Textarea: FC<ITextarea> = ({ name, type, maxLength: value, error, register }) => {
  return (
    <SelectionWrapper name={name}>
      <TextareaAutosize
        {...register(type, {
          required: { value: true, message: 'Поле обязательно для заполнения' },
          maxLength: { value, message: `Максимально ${value} символов` }
        })}
        className={`textarea ${error && 'error'}`}
        placeholder={name}
      />
      {error && <Text color={'red.500'}>{error?.message}</Text>}
    </SelectionWrapper>
  );
};

export default Textarea;

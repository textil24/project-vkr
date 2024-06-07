import { Select as SelectWrapper, Text } from '@chakra-ui/react';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';
import { IAdmin, ICategory } from '../../pages/Admin/Admin';
import { FC } from 'react';
import { SelectionWrapper } from '.';
import { IEditLesson } from '../../pages/Admin/EditLesson';

interface ISelect {
  name: string;
  type: 'category';
  categories: ICategory[];
  error: FieldErrors<IEditLesson>;
  register: UseFormRegister<IEditLesson>;
}

const Select: FC<ISelect> = ({ name, type, categories, error, register }) => {
  return (
    <SelectionWrapper name={name}>
      <SelectWrapper
        {...register(type, { required: { value: true, message: 'Обязательно нужно выбрать категорию' } })}
        _focus={{
          outline: 'none',
          border: 'none',
          transition: 'none'
        }}
        _placeholder={{
          color: '#718096'
        }}
        height={'44px'}
        outline={`1px solid ${error ? '#FE0000' : '#CCCED1'}`}
        border={'none'}
        focusBorderColor={error ? '#FE0000' : '#22C35E'}
        placeholder="Выбрать категорию"
      >
        {categories.map(({ value, name }) => (
          <option value={value}>{name}</option>
        ))}
      </SelectWrapper>
      {error && <Text color={'red.500'}>{error?.message}</Text>}
    </SelectionWrapper>
  );
};

export default Select;

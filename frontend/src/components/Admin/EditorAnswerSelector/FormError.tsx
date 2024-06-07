import { FC } from 'react';
import { FieldError } from 'react-hook-form';

interface IFormError {
  error: FieldError | undefined;
}

const FormError: FC<IFormError> = ({ error }) => {
  return error && <span style={{ color: 'red' }}>This field is required</span>;
};

export default FormError;

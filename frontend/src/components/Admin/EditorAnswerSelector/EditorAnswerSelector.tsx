import { useForm, SubmitHandler } from 'react-hook-form';
import { CheckboxInput } from '.';
import { Input, Stack, Text } from '@chakra-ui/react';
import { SelectionWrapper } from '..';

export interface Inputs {
  question: string;
  answers: string[];
  corrects: string[];
}

export default function EditorAnswerSelector() {
  const {
    register,
    trigger,
    handleSubmit,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const hasString = getValues().corrects?.some(item => typeof item === 'string' || item === true) ?? false;

  console.log(getValues());

  return (
    <SelectionWrapper name="Тестирование" type="answerSelector">
      <Stack pl={4} borderLeft={`2px solid #0088CC`} py={2} spacing={2} direction="column">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <Stack spacing={2}>
              <SelectionWrapper name="Вопрос">
                <Input
                  {...register('question', { required: { value: true, message: 'This field is required' } })}
                  type="text"
                  placeholder="Вопрос"
                />
                {errors.question && <Text style={{ color: 'red' }}>{errors.question.message}</Text>}
              </SelectionWrapper>

              <CheckboxInput
                text={getValues(`answers.0`)}
                typeAnswer={`answers.0`}
                typeCorrect={`corrects.0`}
                register={register}
                errorAnswer={errors.answers?.[0]}
                clearErrors={clearErrors}
                setValue={setValue}
              />

              <CheckboxInput
                text={getValues(`answers.1`)}
                typeAnswer={`answers.1`}
                typeCorrect={`corrects.1`}
                register={register}
                errorAnswer={errors.answers?.[1]}
                clearErrors={clearErrors}
                setValue={setValue}
              />

              <CheckboxInput
                text={getValues(`answers.2`)}
                typeAnswer={`answers.2`}
                typeCorrect={`corrects.2`}
                register={register}
                errorAnswer={errors.answers?.[2]}
                clearErrors={clearErrors}
                setValue={setValue}
              />

              <CheckboxInput
                text={getValues(`answers.3`)}
                typeAnswer={`answers.3`}
                typeCorrect={`corrects.3`}
                register={register}
                errorAnswer={errors.answers?.[3]}
                clearErrors={clearErrors}
                setValue={setValue}
              />

              {errors.corrects && <span style={{ color: 'red' }}>ERROR!</span>}
            </Stack>
          </div>
          {/* <input onClick={() => !hasString && setError("corrects", { message: "Должен быть выбран хотя бы один правильный ответ" })} type="submit" /> */}
        </form>
      </Stack>
    </SelectionWrapper>
  );
}

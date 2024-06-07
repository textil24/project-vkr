import { Alert as AlertItem, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';
import { FC } from 'react';

interface IAlert {
  status: 'success' | 'error';
  errorCount?: number;
}

const Alert: FC<IAlert> = ({ status, errorCount }) => {
  const isSuccess = status === 'success';
  const errorTitleText = 'Попробуйте еще раз.';
  const errorsolutionText = `( Решение доступно после ${errorCount} ${errorCount === 2 ? 'попыток' : 'попытки'} ).`;
  const errorcommonDescription = 'Прочитайте урок, чтобы найти нужную информацию.';

  const currentTitle = isSuccess
    ? 'Правильно.'
    : errorCount
      ? errorTitleText
      : `Попробуйте еще раз или нажмите кнопку "Показать ответ" выше.`;

  const currentDescription = isSuccess
    ? 'Продолжай в том же духе 🚀🚀🚀'
    : errorCount
      ? `${errorsolutionText} ${errorcommonDescription}`
      : errorcommonDescription;

  return (
    <AlertItem mt={2} status={status}>
      <AlertIcon />
      <Box>
        <AlertTitle>{currentTitle}</AlertTitle>
        <AlertDescription>{currentDescription}</AlertDescription>
      </Box>
    </AlertItem>
  );
};

export default Alert;

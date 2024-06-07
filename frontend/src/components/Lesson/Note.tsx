import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface INote {
  text: string;
}

const Note: FC<INote> = ({ text }) => {
  return (
    <Box pl={4} borderLeft={'2px solid #0088CC'}>
      <Text>
        <strong>Примечание: </strong>
        {text}
      </Text>
    </Box>
  );
};

export default Note;

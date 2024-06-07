import { Box, Button } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';
import { FC, useState } from 'react';
import { TriangleUpIcon, RepeatClockIcon } from '@chakra-ui/icons';

interface IMonaco {
  type?: 'edit';
  code: string[];
}

const Monaco: FC<IMonaco> = ({ type, code }) => {
  const [codeStringElements, setCodeStringElements] = useState(code);
  const [fileIndex, setFileIndex] = useState(0);

  const handleEditorChange = (newValue: any) => {
    setCodeStringElements((prevArray: any) => {
      const newArray = [...prevArray];
      newArray[fileIndex] = newValue;
      return newArray;
    });
  };

  const handleRunClick = () => {
    console.log(codeStringElements[fileIndex]);
  };

  const handleResetClick = () => {
    setCodeStringElements((prevArray: any) => {
      const newArray = [...prevArray];
      newArray[fileIndex] = code[fileIndex];
      return newArray;
    });
  };

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box border={'1px solid #2E3650'} borderRadius={'5px'} py={4} bgColor={'#1E1E1E'}>
        {type === 'edit' && (
          <Box display={'flex'} alignItems={'center'} borderTopRadius={'5px'} bgColor={'#1e1e1e'} overflow={'hidden'}>
            <Box
              fontWeight={'500'}
              fontSize={'14px'}
              padding={'8px'}
              bgColor={'#292b34'}
              cursor={'pointer'}
              color={'white'}
              onClick={() => setFileIndex(0)}
            >
              schema.graphql
            </Box>
          </Box>
        )}
        <Editor
          value={codeStringElements[fileIndex]}
          onChange={handleEditorChange}
          height="40vh"
          width="100%"
          theme={'vs-dark'}
          defaultLanguage={'python'}
        />
        {type === 'edit' && (
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            borderTop={'1px solid #2d3748'}
            bgColor={'#1e1e1e'}
            mt={'-1px'}
            padding={'8px'}
            borderBottomRadius={'5px'}
          >
            <Button
              rightIcon={<TriangleUpIcon transform={'rotate(90deg)'} />}
              bgColor={'#292b34'}
              color={'white'}
              size="sm"
              _hover={{
                backgroundColor: '#373B4A'
              }}
              onClick={handleRunClick}
            >
              Выполнить
            </Button>
            <Button
              leftIcon={<RepeatClockIcon />}
              bgColor={'#1e1e1e'}
              color={'#f1b2a6'}
              size="sm"
              onClick={handleResetClick}
              _hover={{
                backgroundColor: '#282C3D'
              }}
            >
              Сбросить
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Monaco;

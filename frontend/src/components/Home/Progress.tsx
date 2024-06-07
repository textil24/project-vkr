import { Text, Progress as ProgressItem, Flex, Grid } from '@chakra-ui/react';
import { FC } from 'react';

interface IProgress {
  percent: number | undefined;
}

const Progress: FC<IProgress> = ({ percent }) => {
  return (
    <Grid gap={2} templateColumns={'64px 40px'} alignItems={'center'}>
      <ProgressItem colorScheme="green" width={'64px'} height={'4px'} borderRadius={'50px'} size="sm" value={percent} />
      <Text justifySelf={'flex-end'}>{percent}%</Text>
    </Grid>
  );
};

export default Progress;

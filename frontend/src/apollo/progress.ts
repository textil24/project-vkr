import { gql } from '@apollo/client';

export const GET_PROGRESS = gql`
  query GetProgress($tgUserId: Int!, $contentId: Int!, $lessonId: String!) {
    getProgress(tgUserId: $tgUserId, contentId: $contentId, lessonId: $lessonId) {
      tgUserId
      contentId
      lessonId
      isCorrect
    }
  }
`;

export const ADD_PROGRESS = gql`
  mutation CreateProgress($input: ProgressInput!) {
    createProgress(input: $input) {
      tgUserId
      contentId
      lessonId
      isCorrect
    }
  }
`;

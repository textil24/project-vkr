import { gql } from '@apollo/client';

export const GET_COURSE = gql`
  query Query($getCourseId: UUID!) {
    getCourse(id: $getCourseId) {
      id
      name
      description
      lessons {
        id
        name
      }
    }
  }
`;

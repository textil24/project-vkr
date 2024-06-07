import { gql } from '@apollo/client';

export const CREATE_COURSE = gql`
  mutation Mutation($input: CourseInput!) {
    createCourse(input: $input) {
      id
      name
    }
  }
`;

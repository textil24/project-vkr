import { gql } from '@apollo/client';

export const GET_COURSES = gql`
  query GetCourses {
    getCourses {
      id
      name
      category
      preview
      contentTotalIsEstimatedCount
      contentTotalDoneCount
      progressCourse
    }
  }
`;

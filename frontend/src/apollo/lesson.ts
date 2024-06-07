import { gql } from '@apollo/client';

export const GET_LESSON = gql`
  query GetLesson($getLessonId: UUID!) {
    getLesson(id: $getLessonId) {
      id
      name
      content
      orderBy
      nextLessonId
      prevLessonId
      contentTotalIsEstimated
      course {
        id
        name
        lessons {
          name
          id
          contentTotal
          contentTotalIsEstimated
          userProgress {
            contentTotalDone
            contentTotalDonePercent
            results {
              tgUserId
              contentId
              lessonId
              isCorrect
            }
          }
        }
      }
      userProgress {
        contentTotalDone
        contentTotalDonePercent
        results {
          tgUserId
          contentId
          lessonId
          isCorrect
        }
      }
    }
  }
`;

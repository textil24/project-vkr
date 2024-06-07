export interface ICreateProgress {
  createProgress: {
    tgUserId: number;
    contentId: number;
    lessonId: string;
    isEstimated: boolean;
  };
}

export interface IGetProgress {
  getProgress: {
    tgUserId: number;
    contentId: number;
    lessonId: string;
    isCorrect: boolean;
  };
}

export interface IGetCourses {
  getCourses: [
    {
      id: string;
      name: string;
      category: string;
      preview: string;
      contentTotalIsEstimatedCount: number;
      contentTotalDoneCount: number;
      progressCourse: number;
    }
  ];
}

export interface IGetCourse {
  getCourse: {
    id: string;
    name: string;
    description: string;
    lessons: [
      {
        id: string;
        name: string;
      }
    ];
  };
}

export interface IGetLesson {
  getLesson: {
    id: string;
    name: string;
    nextLessonId: string;
    prevLessonId: string;
    orderBy: number;
    contentTotalIsEstimated: number;
    content: [
      {
        id: number;
        type: 'title' | 'text' | 'image' | 'prism' | 'monaco';
        content: string;
        isEstimated: false;
      },
      {
        id: number;
        type: 'answerSelector';
        question: string;
        answers: string[];
        corrects: string[];
        isEstimated: true;
      },
      {
        id: number;
        type: 'task';
        title: string;
        text: string;
        isEstimated: true;
      },
      {
        id: number;
        type: 'note';
        text: string;
        isEstimated: false;
      }
    ];
    course: {
      id: string;
      name: string;
      lessons: [
        {
          id: string;
          name: string;
          contentTotal: number;
          contentTotalIsEstimated: number;
          userProgress: {
            contentTotalDone: number;
            contentTotalDonePercent: number;
            results: {
              tgUserId: number;
              contentId: number;
              lessonId: string;
              isCorrect: boolean;
            };
          };
        }
      ];
    };
    userProgress: {
      contentTotalDone: number;
      contentTotalDonePercent: number;
      results: [
        {
          tgUserId: number;
          contentId: number;
          lessonId: string;
          isCorrect: boolean;
        }
      ];
    };
  };
}

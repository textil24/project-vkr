import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb as BreadcrumbItem, BreadcrumbItem as BreadcrumbWrapper } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IBreadcrumb {
  courseId: string | undefined;
  courseName?: string | undefined;
  lessonId?: string | undefined;
  lessonOrder?: number | undefined;
  type?: 'course';
}

const Breadcrumb: FC<IBreadcrumb> = ({ courseId, courseName, lessonId, lessonOrder, type }) => {
  return (
    <BreadcrumbItem
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
    >
      <BreadcrumbWrapper>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M240 204h-12v-88.45a20.07 20.07 0 0 0-6.44-14.7l-79.95-75.47l-.16-.15a19.93 19.93 0 0 0-26.91 0l-.17.15l-79.93 75.47a20.07 20.07 0 0 0-6.44 14.7V204H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24ZM52 117.28l76-71.75l76 71.75V204h-40v-44a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v44H52ZM140 204h-24v-40h24Z"
            />
          </svg>
        </Link>
      </BreadcrumbWrapper>

      <BreadcrumbWrapper>
        <Link to={'/courses/' + courseId}>{courseName}</Link>
      </BreadcrumbWrapper>

      {!(type === 'course') && (
        <BreadcrumbWrapper minWidth={'50px'}>
          <Link to={'/lessons/' + lessonId}>Урок {lessonOrder}</Link>
        </BreadcrumbWrapper>
      )}
    </BreadcrumbItem>
  );
};

export default Breadcrumb;

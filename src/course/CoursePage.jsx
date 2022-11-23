import { useCourses } from "./useCourses";
import { CourseList } from "./CourseList";
import styled from "styled-components";
import { Loader } from "../ui/Loader";

const Page = styled.main`
  box-sizing: border-box;
  padding: 0 36px;
  width: 100%;
`;

export const CoursePage = () => {
  const { response } = useCourses();

  // Networks errors

  if (response.status === "loading") {
    return <Loader />;
  }

  if (response.status === "failed") {
    throw response.error;
    /*  return (
      <>
        Failed, {response.error.message}, {response.error.cause}
      </>
    ); */
  }

  return (
    <Page>
      <h1>{response.data.title}</h1>
      <CourseList initialCouses={response.data.lessons} />
    </Page>
  );
};

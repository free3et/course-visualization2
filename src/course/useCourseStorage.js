import { CourseInternalState } from "./CourseList";
import { useLocalStorage } from "../hooks/useStorage";

export const useCourseStorage = () => {
  const { getFromStorage, setToStorage } = useLocalStorage();

  return {
    getCourseFromStorage: () => {
      const course = getFromStorage("COURSES");
      return course ? JSON.parse(course) : undefined;
    },
    setCourseToStorage: (CourseInternalState) =>
      setToStorage("COURSES", JSON.stringify(CourseInternalState)),
  };
};

import { Lesson } from "./Lesson";
import { CourseItemDto } from "./useCourses";
import { useEffect, useState } from "react";
import { deepCopy } from "../utils/objects";
import { useCourseStorage } from "./useCourseStorage";

export const CourseInternalState = Object.assign({}, CourseItemDto, {
  completed: false,
  note: "",
});

export const CourseList = ({ initialCouses }) => {
  const { getCourseFromStorage, setCourseToStorage } = useCourseStorage();

  const [courses, setCourses] = useState(
    getCourseFromStorage() || initialCouses
  );

  useEffect(() => {
    setCourseToStorage(courses);
  }, [courses]);

  return (
    <div>
      {courses.map((lesson, index) =>
        lesson.hidden ? null : (
          <Lesson
            key={lesson.name}
            lesson={lesson}
            onLessonChange={(newState) => {
              setCourses((prev) => {
                const nextState = deepCopy(prev);
                nextState[index] = newState;
                return nextState;
              });
            }}
          />
        )
      )}
    </div>
  );
};

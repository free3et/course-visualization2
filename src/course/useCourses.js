import { useEffect, useState } from "react";
import { COURSE_URL } from "../urls";

export const CourseItemDto = {
  name,
  type: "Lecture" || "Workshop",
  //published,
  links: [],
  //hidden,
  keyPoints: [],
  takeaways: [],
  //youtube,
  prerequisite: [],
  hometask: [],
};

const CourseItem = {
  name,
  type: "Lecture" || "Workshop",
  //published,
  links: [],
  //hidden,
  keyPoints: [],
  takeaways: [],
  //youtube,
  prerequisite: [],
  hometask: [],
};

const mapCourseItemDtoToCourse = (dto) => {
  return {
    name: dto.name,
    type: dto.type,
    //published,
    links: dto.links,
    //hidden,
    keyPoints: dto.keyPoints || [],
    takeaways: dto.takeaways || [],
    //youtube,
    prerequisite: dto.prerequisite || [],
    hometask: dto.hometask || [],
  };
};

const mapCourseDtoToCourse = (dto) => {
  return {
    lessons: dto.lessons.map(mapCourseItemDtoToCourse),
    title: dto.title || "",
  };
};

const AsyncStatusLoading = {
  status: "loading",
};

const AsyncStatusOk = {
  status: "ok",
  //data,
};

const AsyncStatusFailed = {
  status: "failed",
  error: Error,
};

const AsyncStatus = AsyncStatusLoading || AsyncStatusOk || AsyncStatusFailed;

export const useCourses = () => {
  const [response, setResponse] = useState({ status: "loading" });

  useEffect(() => {
    fetch(COURSE_URL)
      .then((response) => {
        // Networks errors
        if (response.ok) {
          return response.json();
        }

        throw new Error("Network failed", { cause: response.status });
      })
      .then((data) => {
        const isResponseValid = validateResponse(data);
        setResponse({ data: mapCourseDtoToCourse(data), status: "ok" });
      })
      .catch((error) => {
        setResponse({ status: "failed", error });
      });
  }, []);

  return { response };
};

function validateResponse(courseData) {
  if (courseData === null) {
    throw new Error("Empty response");
  }

  if (!Array.isArray(courseData.lessons)) {
    throw new Error("Lessons in improper format");
  }

  if (courseData.title == null) {
    throw new Error("Title is null");
  }
}

//  yup validation!!!

// typescript automapper !!!

// !. Networks errors
// 2. Помилки в схемі: неповні дані, некорректні дані, неправильнийс тип ==== 1. Валідуємо найважливіше речі, без яких апки не працюють 2.Відобразити дто на нашу модель
// Other mistakes

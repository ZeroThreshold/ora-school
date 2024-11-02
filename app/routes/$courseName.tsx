import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getCourseInfo } from "~/services/school-service";

export const loader = async ({
  params,
}: LoaderFunctionArgs): Promise<string> => {
  const courseName = params.courseName ?? "defaultCourseName";
  const courseInfo = getCourseInfo(courseName);
  return courseInfo;
};

export default function courseName() {
  const courseInfo = useLoaderData<any>();
  return <section>{courseInfo}</section>;
}

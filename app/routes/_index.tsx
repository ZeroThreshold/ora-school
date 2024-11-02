import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getLocationInfo } from "~/services/school-service";

export const meta: MetaFunction = () => {
  return [
    { title: "School Name" },
    { name: "description", content: "Welcome to school" },
  ];
};

export const loader = async ({
  params,
}: LoaderFunctionArgs): Promise<string> => {
  const schoolName = process.env.SCHOOL_VALUE ?? "defaultSchoolName";
  const locationInfo = getLocationInfo(schoolName);
  return locationInfo;
};

export default function Index() {
  const locationInfo = useLoaderData<any>();
  return <section>{locationInfo}</section>;
}

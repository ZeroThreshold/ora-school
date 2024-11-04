import { locationsData } from "~/config/school-constants";

export function getLocationInfo(school_value: keyof typeof locationsData) {
  return locationsData[school_value];
}

export function getCourseInfo(courseName: keyof typeof locationsData) {
  return locationsData[courseName];
}

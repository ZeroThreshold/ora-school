import { LOCATION } from "~/config/text_constants";

export function getLocationInfo(school_value: keyof typeof LOCATION) {
  return LOCATION[school_value];
}

export function getCourseInfo(courseName: keyof typeof LOCATION) {
  return LOCATION[courseName];
}

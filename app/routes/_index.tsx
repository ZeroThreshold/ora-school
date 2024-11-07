import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import { getLocationInfo } from "~/services/school-service";
import { LOCATION } from "~/config/text_constants";
import Logo from "~/components/general/logo";

type Course = {
  img: string;
  title: string;
  description: string;
};

type LocationInfo = {
  title: string;
  description: string;
  bannerImage: string;
  courses: Record<string, Course>;
  variant: string;
  seoKeywords: string[];
};

export const meta: MetaFunction = ({ data }: { data: unknown }) => {
  const locationInfo = data as LocationInfo;

  return [
    { title: locationInfo.title },
    { name: "description", content: locationInfo.description },
    { name: "keywords", content: locationInfo.seoKeywords },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
  ];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loader: LoaderFunction = async () => {
  const schoolName = process.env.SCHOOL_VALUE as keyof typeof LOCATION;
  const locationInfo = getLocationInfo(schoolName);
  return locationInfo;
};

export default function Index() {
  const { title, description, bannerImage, courses, variant } =
    useLoaderData<LocationInfo>();

  return (
    <div className="my-12 container">
      <div className="flex items-center justify-center">
        <Logo variant={variant} width={220} height={220} />
      </div>
      <div className="my-20">
        <h1 className="text-4xl font-bold mt-4">About Us - {title}</h1>
        <p className="mt-4 text-xl">{description}</p>
        <img
          src={bannerImage}
          className="my-5 rounded-md"
          alt="Banner"
          width={2000}
          height={1500}
        />
      </div>
      <div className="my-20">
        <h1 className="text-4xl font-bold mt-4">Training Programs - {title}</h1>
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Object.entries(courses).map(([id, course]) => (
            <div
              className="rounded-md shadow-lg flex flex-col justify-between"
              key={id}
            >
              <div>
                <div className="w-full h-64 overflow-hidden rounded-t-md mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={course.img}
                    alt={course.title}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="font-bold text-xl mb-2 px-4 py-2">
                  {course.title}
                </div>
                <p className="text-gray-700 text-base px-4">
                  {course.description}
                </p>
              </div>
              <Link to={`${id}`} className="px-4 py-2 mb-3">
                <button className="gap-4 mt-4 bg-slate-900 text-white p-3 font-medium rounded">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

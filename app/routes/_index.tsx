import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getLocationInfo } from "~/services/school-service";
import { locationsData } from "~/config/school-constants";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "TVS DRIFT-R" },
    { name: "description", content: "Welcome to school" },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs): Promise<any> => {
  const schoolName = process.env.SCHOOL_VALUE as keyof typeof locationsData;
  const locationInfo = getLocationInfo(schoolName);
  return locationInfo;
};
                                
export default function Index() {
  const { title, description, bannerImage, courses } = useLoaderData<any>();

  const locationInfo = useLoaderData<any>();
  return (
    <div className="my-12 container">
      <div className="flex items-center justify-center">
        <img src="/images/logos/driftr-black.png" width={400} height={300} />
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
              <Link to={`/course/${id}`} className="px-4 py-2 mb-3">
                <Button className="gap-4 mt-4">Book Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

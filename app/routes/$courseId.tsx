import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { LOCATION } from "~/config/text_constants";
import BookNow from "~/components/blobs/book-now";
import { ArrowRight, ClockIcon, Dot, IndianRupee } from "lucide-react";

interface Ride {
  price: number;
  duration: string;
  maxRiders: number;
  minRiders: number;
  special?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spdesc?: any;
}

interface Pricing {
  title: string;
  prices: Ride[];
}

interface TimeBatch {
  time: string;
  active: boolean;
}

interface Batches {
  title: string;
  times: TimeBatch[];
}

type CourseData = {
  title: string;
  img: string;
  description: string;
  infoItems: { question: string; listItem: boolean; info: string | string[] }[];
  batches: { title: string; times: { time: string; active: boolean }[] }[];
  pricelist: {
    title: string;
    prices: {
      price: number;
      duration: string;
      maxRiders: number;
      minRiders: number;
    }[];
  }[];
  level: string;
};
export const loader: LoaderFunction = async ({ request, params }) => {
  const { courseId } = params;

  const locationKey = process.env.SCHOOL_VALUE as keyof typeof LOCATION;
  const course =
    LOCATION[locationKey]?.courses[
      courseId as unknown as keyof (typeof LOCATION)[typeof locationKey]["courses"]
    ];

  if (!course) {
    throw new Response("Course not found", { status: 404 });
  }

  return course;
};
export default function CourseDetails() {
  const course = useLoaderData<CourseData>();

  return (
    <div>
      <img
        className="object-cover w-full h-[44vh] md:h-p[65vh] lg:h-[75vh]"
        src={course.img ?? ""}
        alt="AltImage"
        width={2000}
        height={1000}
      />
      <div className="my-20 container flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div>
            <h1 className="font-extrabold text-4xl">{course.title}</h1>
            <div className="text-2xl mt-1">
              Level: <span className="text-gray-500">{course.level}</span>
            </div>
            <div className="text-base mt-1">
              Address:{" "}
              <span className="text-gray-500">
                {LOCATION.driftr_pune.address}
              </span>
            </div>
          </div>
          <BookNow course={course} locationData={LOCATION} />
        </div>
        <div>
          <h2 className="font-bold text-2xl">Course Details</h2>
          <p className="mt-2">{course.description}</p>
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="my-10 flex flex-col gap-5 max-w-3xl">
              {course.infoItems.map(
                (
                  item: {
                    question: string;
                    info: string[] | string;
                    listItem: boolean;
                  },
                  index
                ) => {
                  return (
                    <div key={index}>
                      <h3 className="font-semibold text-xl">{item.question}</h3>
                      {item.listItem &&
                        Array.isArray(item.info) &&
                        item.info.map((info, index) => (
                          <li
                            key={index}
                            className="text-gray-500 font-medium flex gap-2 my-[0.35rem]"
                          >
                            <ArrowRight /> {info}
                          </li>
                        ))}
                      {!item.listItem && (
                        <p className="mt-2 text-gray-500 font-medium ">
                          {item.info}
                        </p>
                      )}
                    </div>
                  );
                }
              )}
            </div>
            <div className="w-full max-w-[26rem] mt-10">
              <div className="rounded-md shadow border p-4 border-neutral-100 flex flex-col gap-6">
                {course.batches.length > 0 && (
                  <BatchTimings batches={course.batches} />
                )}

                <PricingComp pricing={course.pricelist} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BatchTimings = ({ batches }: { batches: Batches[] }) => {
  return (
    <div>
      <h3 className="text-2xl font-[550]">Duration</h3>
      {batches.map((batch, index) => {
        return (
          <div key={index}>
            <h4 className="text-base font-medium text-gray-500">
              {batch.title}
            </h4>
            {batch.times.map((time, index) => {
              return (
                <div
                  className="mt-1 flex font-[550] items-center gap-3"
                  key={index}
                >
                  <ClockIcon className="w- h-6" />
                  {time.time}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const PricingComp = ({ pricing }: { pricing: Pricing[] }) => {
  return (
    <div>
      <h3 className="text-2xl font-[550]">Pricing</h3>
      {pricing.map((price, index) => {
        return (
          <div key={index}>
            <h4 className="text-base font-medium text-gray-500">
              {price.title}:
            </h4>
            <ul>
              {price.prices.map((price, index) => {
                let special = false;
                if (price.special) {
                  special = true;
                }
                return (
                  <li className="mt-1 flex flex-col font-[550]" key={index}>
                    <div className="flex">
                      <Dot />
                      {!special && (
                        <>
                          <IndianRupee className="w-4" /> {price.price}/- per
                          rider
                        </>
                      )}
                      {special && (
                        <div className="flex flex-col">
                          <div className="text-green-500">{price.duration}</div>
                          <div>{price.spdesc}</div>
                        </div>
                      )}
                      {price.maxRiders !== -1 &&
                        `, Max: ${price.maxRiders} Riders`}
                      {price.minRiders !== -1 &&
                        `, Min: ${price.minRiders} Riders`}
                    </div>
                    {!special && (
                      <div className="ml-10">Duration: {price.duration}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

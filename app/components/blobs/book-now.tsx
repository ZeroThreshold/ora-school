/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface Price {
  price: number;
  duration: string;
  minRiders: number;
  maxRiders: number;
}

interface PriceList {
  title: string;
  prices: Price[];
}

const findMinPrice = (pricelist: PriceList[]) => {
  let leastPrice = 0;

  for (const price of pricelist) {
    const minPrice = Math.min(...price.prices.map((p) => p.price));

    if (leastPrice === 0) {
      leastPrice = minPrice;
    } else {
      leastPrice = Math.min(leastPrice, minPrice);
    }
  }

  return leastPrice;
};

const BookNow = ({
  course,
  locationData,
}: {
  course: any;
  locationData: any;
}) => {
  const leastprice = findMinPrice(course.pricelist);
  console.log("leastprice", course);

  return (
    <>
      <div className="flex flex-col lg:gap-6 gap-1">
        <div className="text-2xl">
          Starts from <strong className="text-3xl">₹ {leastprice}</strong>
        </div>
        {course.coursePayLink ? (
          <a
            href={course.coursePayLink ?? ""}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border p-3 bg-slate-950 text-white font-medium rounded-lg"
          >
            Book Now
          </a>
        ) : (
          <form className="flex items-center justify-center">
            <script
              src="https://checkout.razorpay.com/v1/payment-button.js"
              data-payment_button_id={course.coursePayHtml}
              async
            ></script>
          </form>
        )}
      </div>
    </>
  );
};

export default BookNow;

"use client";

import { useState } from "react";
import { Button } from "app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "app/components/ui/dialog";
import { Input } from "app/components/ui/input";
import { Label } from "app/components/ui/label";
import { useToast } from "app/components/ui/use-toast";

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

  return (
    <>
      <div className="flex flex-col lg:gap-6 gap-1">
        <div className="text-2xl">
          Starts from <strong className="text-3xl">₹ {leastprice}</strong>
        </div>
        <a href="/">Book Now</a>
      </div>
    </>
  );
};

export default BookNow;

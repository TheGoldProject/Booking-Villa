"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X, ShoppingCart, Check, Coffee, RefreshCwOff } from "lucide-react";
import Image from "next/image";
import { useBooking } from "@/components/context-provider";
import { differenceInDays } from "date-fns";
import Link from "next/link";

export function FloatReserveCard() {
  const [open, setOpen] = useState(true);
  const { people, date } = useBooking();
  const nights = differenceInDays(date?.to, date?.from);
  const guests = people.adults + people.children;
  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="fixed bottom-4 left-4 w-8 h-8 rounded-full border border-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <ShoppingCart />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 overflow-hidden" align="start">
        <div className="flex flex-col gap-2">
          <div className="relative h-20">
            <Image
              src="/images/villa/1.jpg"
              alt="Villa"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <p className="text-xl font-bold">Executive Two Bedroom Villa</p>
            <div className="flex flex-col gap-1  text-xl ">
              <h2 className="font-bold italic">
                Non-Refundable | Breakfast Included
              </h2>
              <div className="flex items-center gap-1">
                <p>(</p>
                {/* <UserRound /> */}
                <p> {guests + 1} guests</p>
                <p>, {nights} nights</p>
                <p>)</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-red-500 line-through">$2000</p>
              <p className="text-4xl font-bold">$1500</p>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2">
                <p>Bedroom 1: King Bed</p>
                <Image
                  src="/icons/bedroom.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center gap-2">
                <p>Bedroom 2: King Bed</p>
                <Image
                  src="/icons/bedroom.svg"
                  alt="Check"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Check />
                <p>Free Cancellation Before 14 days</p>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Coffee />
                <p>Breakfast Included</p>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCwOff size={20} />
                <p>Non-refundable</p>
              </div>
            </div>

            <div className="flex justify-end mt-auto">
              <Link href="/book">
                <Button className="bg-cyan-500 text-white w-60 h-12 text-xl">
                  Reserve
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

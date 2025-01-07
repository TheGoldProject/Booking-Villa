"use client";
import { useState } from "react";
// import MorphingText from "@/components/ui/morphing-text";
// import { hero } from "@/data/texts";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Fade from "embla-carousel-fade";
import BlurFade from "@/components/ui/blur-fade";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { amenities, premiumAmenities } from "@/data/constants";
import BookForm from "@/components/book-form";
import { Check, UserRound, Coffee } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useBooking } from "@/components/context-provider";
import { differenceInDays } from "date-fns";

export default function CallToAction() {
  const { people, date } = useBooking();
  const nights = differenceInDays(date?.to, date?.from);
  const guests = people.adults + people.children;
  return (
    guests > 0 &&
    date?.from &&
    date?.to && (
      <section id="call-to-action" className="pt-20">
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl shadow-lg">
            <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row">
              <div class="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                <Image
                  src="/images/villa/40.jpg"
                  alt="Photo by Dom Hill"
                  width={1000}
                  height={500}
                  // fill
                  // className="object-cover object-center"
                />
              </div>
              <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                <div className="flex items-center gap-3  md:text-2xl lg:text-3xl ">
                  <h2 class="font-bold italic">Two Bedroom Villa</h2>
                  <div className="flex items-center gap-1">
                    <p>(</p>
                    {/* <UserRound /> */}
                    <p> {guests} guests</p>
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
                </div>

                <div class="flex justify-end mt-auto">
                  <Link href="/book">
                    <Button className="bg-cyan-500 text-white w-60 h-12 text-xl">
                      Reserve
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

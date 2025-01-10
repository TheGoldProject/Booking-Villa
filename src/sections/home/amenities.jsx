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
import { Check } from "lucide-react";
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

export default function Amenities() {
  return (
    <section id="gallery" className="mt-20">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col items-center mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our competitive Premium Amenities
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {premiumAmenities.map((amenity, i) => (
              <div key={i} className="flex divide-x rounded-lg border bg-gray-50">
                <div className="flex items-center p-2 text-cyan-500 md:p-4">
                  {amenity.icon}
                </div>

                <div className="p-4 md:p-6">
                  <p className="mb-2 text-lg font-semibold md:text-xl">
                    {amenity.label}
                  </p>
                  <p className="text-gray-500">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-5 w-60 h-12 text-lg" variant="outline">
                View All Amenities
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[850px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  All Amenities
                </DialogTitle>
                <DialogDescription>
                  Our amenities are unique and premium.
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="h-[500px] p-4">
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                  <Masonry>
                    {amenities.map((category, i) => (
                      <div key={i} className="flex flex-col gap-1 mt-4">
                        <div className="flex items-center gap-3 text-xl ">
                          <div>{category.icon}</div>
                          <p>{category.label}</p>
                        </div>
                        {category.items.map((item, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-3 text-md text-zinc-700 p-1"
                          >
                            <Check />
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

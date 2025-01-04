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

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-20">
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
            What others say about us
          </h2>

          <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
            <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div class="text-center text-gray-600">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt="Photo by Radu Florin"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                    John McCulling
                  </div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div class="text-center text-gray-600">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                    loading="lazy"
                    alt="Photo by christian ferrer"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                    Kate Berg
                  </div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    CFO / Dashdash
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div class="text-center text-gray-600">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
                    loading="lazy"
                    alt="Photo by Ayo Ogunseinde"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                    Greg Jackson
                  </div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    CTO / Uptime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}

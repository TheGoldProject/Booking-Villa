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
import BookForm from "@/components/book-form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import BlurFade from "@/components/ui/blur-fade";
import BookCard from "@/components/book-card";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
          Fade(),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="relative w-screen h-screen">
              <Image
                src={`/images/hero/${index + 6}.webp`}
                fill
                alt={index}
                className="object-cover"
              />
              <div className="flex flex-col gap-5 absolute top-48 left-48">
                <BlurFade delay={0.8} inView>
                  <h1 className="font-serif font-bold text-8xl text-white">
                    The Paradise
                  </h1>
                </BlurFade>
                <BlurFade delay={1.3} inView>
                  <h1 className="font-serif font-bold text-6xl text-white">
                    of Cyprus
                  </h1>
                </BlurFade>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-end justify-center h-full text-center">
        {/* <MorphingText className="font-serif text-9xl text-white" texts={hero} /> */}

        {/* <Drawer>
          <DrawerTrigger asChild>
            <InteractiveHoverButton
              text="Book Now"
              className="w-60 text-2xl py-2"
            />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <div className="mx-auto">
              <BookForm />
            </div>
          </DrawerContent>
        </Drawer> */}
        <div className="mr-[20%]">
          <BookCard />
        </div>
      </div>
    </section>
  );
}

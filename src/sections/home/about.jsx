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
import { amenities, mostPopularAmenities } from "@/data/constants";
import Marquee from "@/components/ui/marquee";
import BookForm from "@/components/book-form";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];

export default function About() {
  return (
    <section id="gallery" className="mt-20">
      <p className="text-3xl font-bold mb-4">
        NEW Luxury House - Heated Salty Swimming Pool, Outdoor Jacuzzi, Sauna,
        Exotic Garden
      </p>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 cursor-pointer">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            className={cn(
              "rounded-lg overflow-hidden",
              index == 0 ? "col-span-2 row-span-2" : ""
            )}
          >
            <BlurFade delay={0.25 + index * 0.05} inView>
              <Link href="/gallery">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={`/images/hero/${index + 5}.webp`}
                    alt={`gallery${index}`}
                    fill
                    className="object-cover rounded-md transition-all duration-500 hover:scale-110"
                  />
                </AspectRatio>
              </Link>
            </BlurFade>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-wrap gap-3 mt-10">
        {mostPopularAmenities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border border-zinc-300 text-zinc-700 p-3 rounded-sm self-stretch flex-grow"
          >
            <div>{item.icon}</div>
            <p>{item.label}</p>
          </div>
        ))}
      </div> */}

      <div className="flex justify-between items-stretch gap-10 mt-20">
        <div className="flex-1">
          <p>
            ✔ NEW Luxury House - Heated Salty Swimming Pool, Outdoor Jacuzzi,
            Sauna, Exotic Garden offers accommodations in Limassol, 1.3 miles
            from Aphrodite Beach and 1.4 miles from Armonia Beach. This property
            offers access to a balcony, table tennis, free private parking, and
            free Wifi. During your stay at this villa, you can use an outdoor
            swimming pool, as well as a selection of a spa facilities and
            full-day security. Featuring a terrace and sea views, the villa
            includes 2 bedrooms, a living room, satellite flat-screen TV, an
            equipped kitchen, and 2 bathrooms with a shower.
          </p>
          <br />
          <p>
            ✔ A private entrance leads guests into the villa, where they can
            enjoy some wine or champagne and fruit. The villa offers bed linen,
            towels, and daily room service. Buffet and continental breakfast
            options with local specialities, fruit, and juice are available.
          </p>
          <br />
          <p>
            ✔ The villa offers a variety of wellness options, including a sauna,
            a hot tub, and yoga classes.
          </p>
          <br />
          <p>
            ✔ Sightseeing tours are available close to the property. An indoor
            play area is also available at the villa, while guests can also
            relax in the garden. Onisilos Beach is 1.5 miles from NEW Luxury
            House - Heated Salty Swimming Pool, Outdoor Jacuzzi, Sauna, Exotic
            Garden, while Amathus is 1.8 miles away.
          </p>
          <br />
          <p>
            ✔ Larnaca International Airport is 37 miles from the property, and
            the property offers a paid airport shuttle service.
          </p>
          {/* <div className="flex flex-wrap mt-10 gap-x-5 gap-y-3">
            {mostPopularAmenities.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-cyan-500">{item.icon}</span>
                <span className="text-lg">{item.label}</span>
              </div>
            ))}
          </div> */}
        </div>
        <div className="overflow-hidden h-96">
          <Marquee pauseOnHover vertical className="[--duration:20s] ">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border border-zinc-200 p-5 rounded-sm w-60 h-32"
              >
                <div className="flex items-center gap-3">
                  <Image src="/images/hero/1.webp" width={30} height={30} alt="avatar" />
                  <div className="flex flex-col">
                    <p className="text-md">{review.name}</p>
                    <p className="text-sm text-zinc-500">{review.username}</p>
                  </div>
                </div>
                {review.body}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

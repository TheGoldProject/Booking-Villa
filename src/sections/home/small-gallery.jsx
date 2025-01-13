"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Home,
  Tree,
  Waves,
  Umbrella,
  Car,
  Bath,
  TableTennis,
  Images,
} from "lucide-react";
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
import {
  amenities,
  mostPopularAmenities,
  testimonials,
} from "@/data/constants";
import Marquee from "@/components/ui/marquee";
import BookForm from "@/components/book-form";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { premiumServices } from "@/data/constants";
import GalleryModal from "@/components/gallery-modal";

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

export default function SmallGallery() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const [open, setOpen] = useState(false);

  return (
    <section id="gallery" className="mt-20">
      <p className="text-3xl font-bold mb-4">
        NEW Luxury House - Heated Salty Swimming Pool, Outdoor Jacuzzi, Sauna,
        Exotic Garden
      </p>

      <div className="flex gap-5">
        <div className="flex flex-1 flex-col gap-3 justify-between">
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
                  <Carousel
                    plugins={[plugin.current]}
                    className="w-full group"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                  >
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((item, j) => (
                        <CarouselItem key={j}>
                          <AspectRatio ratio={4 / 3}>
                            <Image
                              src={`/images/villa/${j + 5}.jpg`}
                              alt={`gallery${j}`}
                              fill
                              className="object-cover rounded-md transition-all duration-500 hover:scale-110"
                            />
                          </AspectRatio>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 transition-all duration-300 group-hover:opacity-100 opacity-0" />
                    <CarouselNext className="right-2 transition-all duration-300 group-hover:opacity-100 opacity-0" />
                  </Carousel>
                </BlurFade>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 grid-rows-1 gap-4 cursor-pointer relative">
            {Array.from({ length: 5 }).map((item, index) => (
              <div key={index} className={cn("rounded-lg overflow-hidden")}>
                <BlurFade delay={0.25 + index * 0.05} inView>
                  <div className="relative">
                    <AspectRatio ratio={1 / 1}>
                      <Image
                        src={`/images/villa/${index + 14}.jpg`}
                        alt={`gallery${index}`}
                        fill
                        className="object-cover rounded-md transition-all duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </AspectRatio>
                    {index == 4 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p
                          className="text-white underline text-2xl"
                          onClick={() => setOpen(true)}
                        >
                          +40 Photos
                        </p>
                      </div>
                    )}
                  </div>
                </BlurFade>
              </div>
            ))}
            {/* <div className="absolute bottom-2 right-2">
              <Button
                variant="outline"
                className="border border-black"
                onClick={() => setOpen(true)}
              >
                <Images />
                View All
              </Button>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col gap-3  max-w-72">
          <div className="border border-zinc-300 rounded-md p-3">
            <div className="flex justify-end items-center gap-2">
              <div className="flex flex-col items-end">
                <p className="font-bold">Exceptional</p>
                <p className="text-sm text-zinc-500">16 Reviews</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-cyan-400 text-white rounded-md">
                <p>9.9</p>
              </div>
            </div>
            <div className="h-px bg-gray-200 my-2" />
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {testimonials.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col gap-2 py-2 px-10">
                      <p className="text-sm line-clamp-5">"{item.review}"</p>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-100 shadow-lg ">
                          <img
                            src="/images/avatar/1.jpeg"
                            alt="avatar"
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
            <div className="h-px bg-gray-200 my-2" />
            <div className="flex justify-end items-center gap-2">
              <p>Top rated beach near by</p>
              <div className="flex items-center justify-center w-10 h-10 border border-cyan-400 rounded-md">
                <p>8.5</p>
              </div>
            </div>
          </div>

          <div className="w-full h-40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260534.52747512204!2d17.701880006374193!3d59.32584138311499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1sen!2sse!4v1666978319596!5m2!1sen!2sse"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-10">
        {mostPopularAmenities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border border-zinc-300 text-zinc-700 p-3 rounded-sm self-stretch flex-grow"
          >
            <div>{item.icon}</div>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <GalleryModal open={open} setOpen={setOpen} />
    </section>
  );
}

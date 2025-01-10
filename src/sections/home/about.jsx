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

export default function About() {
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
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      src={`/images/villa/${index + 11}.jpg`}
                      alt={`gallery${index}`}
                      fill
                      className="object-cover rounded-md transition-all duration-500 hover:scale-110"
                    />
                  </AspectRatio>
                </BlurFade>
              </div>
            ))}
            <div className="absolute bottom-2 right-2">
              <Button
                variant="outline"
                className="border border-black"
                onClick={() => setOpen(true)}
              >
                <Images />
                View All
              </Button>
            </div>
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

      <div className="flex justify-between items-stretch gap-10 mt-20">
        <div className="flex-1">
          <p>
            NEW Luxury House - Heated Salty Swimming Pool, Outdoor Jacuzzi,
            Sauna, Exotic Garden offers accommodations in Limassol, 1.3 miles
            from Aphrodite Beach and 1.4 miles from Armonia Beach. This property
            offers access to a terrace, table tennis, free private parking, and
            free Wifi. During your stay at this villa, you can use an outdoor
            swimming pool, as well as a selection of a spa facilities and
            full-day security.
          </p>
          <br />
          <p>
            The air-conditioned villa consists of 2 bedrooms, a living room, a
            fully equipped kitchen with a dishwasher and a coffee machine, and 2
            bathrooms with a shower and bathrobes. A private entrance leads
            guests into the villa, where they can enjoy some wine or champagne
            and fruit. The villa offers bed linen, towels, and daily room
            service.
          </p>
          <br />
          <p>
            Buffet and continental breakfast options with local specialities,
            fruit, and juice are available.
          </p>
          <br />
          <p>
            The villa offers a variety of wellness options, including a sauna, a
            hot tub, and yoga classes. Sightseeing tours are available close to
            the property. An indoor play area is also available at the villa,
            while guests can also relax in the garden.
          </p>
          <br />
          <p>
            Onisilos Beach is 1.5 miles from NEW Luxury House - Heated Salty
            Swimming Pool, Outdoor Jacuzzi, Sauna, Exotic Garden, while Amathus
            is 1.8 miles away. Larnaca International Airport is 37 miles from
            the property, and the property offers a paid airport shuttle
            service.
          </p>
          <h1 className="text-2xl italic font-bold mt-10">Premium Services</h1>
          <div className="flex flex-wrap mt-2 gap-x-5 gap-y-3">
            {premiumServices.map((item, index) => (
              <div
                key={index}
                className="flex relative items-center gap-3 p-3 bg-gray-100 rounded-md border border-zinc-300 flex-grow"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={30}
                  height={20}
                />
                <span className="text-lg">{item.label}</span>
                <Image
                  src="/icons/hot.svg"
                  alt="Hot"
                  width={30}
                  height={20}
                  className="absolute top-0 right-0"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Card className="bg-blue-50 p-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Property highlights</h3>
              <p className="font-medium mb-4">Perfect for a 2-night stay!</p>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <p className="text-sm">
                  Top Location: Highly rated by recent guests
                  <span className="font-semibold ml-1">(9.7)</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Breakfast Info</h4>
              <p className="text-sm text-gray-600">
                Continental, Italian, Vegetarian, Vegan, Buffet
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Villas with:</h4>
              <div className="space-y-2">
                {[
                  { icon: <Waves className="w-4 h-4" />, text: "Pool view" },
                  {
                    icon: <Waves className="w-4 h-4" />,
                    text: "Landmark view",
                  },
                  {
                    icon: <Home className="w-4 h-4" />,
                    text: "Inner courtyard view",
                  },
                  { icon: <Waves className="w-4 h-4" />, text: "Garden view" },
                  {
                    icon: <Waves className="w-4 h-4" />,
                    text: "Pool with a view",
                  },
                  { icon: <Waves className="w-4 h-4" />, text: "Sea view" },
                  { icon: <Umbrella className="w-4 h-4" />, text: "Terrace" },
                  {
                    icon: <Car className="w-4 h-4" />,
                    text: "Free private parking",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Activities:</h4>
              <div className="space-y-2">
                {[
                  { icon: <Bath className="w-4 h-4" />, text: "Spa" },
                  {
                    icon: <Waves className="w-4 h-4" />,
                    text: "Ping-pong",
                  },
                  {
                    icon: <Bath className="w-4 h-4" />,
                    text: "Hot tub/Jacuzzi",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
              Reserve
            </button>
          </Card>
        </div>
      </div>

      <GalleryModal open={open} setOpen={setOpen} />
    </section>
  );
}

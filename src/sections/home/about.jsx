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

            <Link href="/book" className="">
              <button className="w-full mt-5 bg-cyan-400 text-white py-3 rounded-md hover:bg-cyan-500 transition-colors">
                Reserve
              </button>
            </Link>
          </Card>
        </div>
      </div>

      <GalleryModal open={open} setOpen={setOpen} />
    </section>
  );
}

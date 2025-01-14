"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";
import {
  Bath,
  BedDouble,
  MapPinHouse,
  School,
  UserRound,
  NotepadText,
  Handshake,
} from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RULES } from "@/data/constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { amenities } from "@/data/constants";
import { Check } from "lucide-react";
import GalleryModal from "@/components/gallery-modal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import CallToAction from "@/sections/home/call-to-action";
import { Calendar } from "@/components/calendar";
import SmallGallery from "@/sections/home/small-gallery";

export default function Details() {
  const { theme } = useTheme();
  const [open, setOpen] = useState({ open: false, category: "Living Areas" });
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="pb-20">
      <div className="flex flex-col gap-20 w-3/5 mx-auto">
        <CallToAction />

        <section id="description" className="mt-20">
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-3xl font-extrabold italic text-gray-900 md:mb-6 lg:text-5xl">
                  TG Villa
                </h2>

                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-xl italic">
                  The most beautiful villa in the Cyprus
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
                <div className="flex flex-col items-center gap-2 md:p-4">
                  <School className=" text-cyan-500 w-10 h-10" />
                  <div className="text-2xl font-semibold">Villa</div>
                </div>
                <div className="flex flex-col items-center gap-2 md:p-4">
                  <UserRound className=" text-cyan-500 w-10 h-10" />
                  <div className="text-2xl font-semibold">Up to 6 people</div>
                </div>
                <div className="flex flex-col items-center gap-2 md:p-4">
                  <BedDouble className=" text-cyan-500 w-10 h-10" />
                  <div className="text-2xl font-semibold">3 Bedrooms</div>
                </div>
                <div className="flex flex-col items-center gap-2 md:p-4">
                  <Bath className=" text-cyan-500 w-10 h-10" />
                  <div className="text-2xl font-semibold">3 Bathrooms</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SmallGallery />

        <section id="gallery">
          <h1 className="text-3xl italic font-bold mt-10 text-center">
            From $599 per night
          </h1>
          <div className="flex gap-10 mt-10">
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/villa/5.jpg"
                alt="Gallery"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <NeonGradientCard className="w-[360px] items-center justify-center text-center">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                Discount Rules
              </span>
              <div className="flex flex-col items-center gap-2 mt-5">
                <div className="flex gap-2">
                  <p>Weekly Discount</p>
                  <p className="text-green-500">10%</p>
                </div>
                <div className="flex gap-2">
                  <p>Monthly Discount</p>
                  <p className="text-green-500">15%</p>
                </div>
                <div className="flex gap-2">
                  <p>Book on Site</p>
                  <p className="text-green-500">15%</p>
                </div>
                <div className="flex gap-2">
                  <p>Referral Discount</p>
                  <p className="text-green-500">5%</p>
                </div>
              </div>
            </NeonGradientCard>
          </div>
        </section>

        <section id="description">
          <div className="flex flex-col gap-10">
            <h1 className="text-2xl italic font-bold">Property description</h1>
            <p>
              Our Stylish & Luxurious 6 bedroom villa is located right on the
              hill of Agios Tychon, Limassol across from Four Season Hotel.
              Short distance to the SEA 🏖️ incredible restaurants 🍝 coffee
              shops ☕️ markets 🛒 and more.
            </p>
            <p>The perfect blend of style, comfort and relaxation.</p>
            <p>
              Indulge in the Mediterranean lifestyle as you explore nearby
              beaches and charming cafes. Back at the villa, unwind by the pool,
              enjoy a barbecue or relax in the hot tub and sauna.
            </p>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            <Card className="cursor-pointer p-5 whitespace-nowrap">
              <div className="flex gap-2 items-center mb-10">
                <BedDouble />
                <h1 className="text-2xl font-bold">Sleeping Situation</h1>
              </div>

              <div className="flex gap-5">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div key={index}>
                          <div className="flex flex-col items-center gap-2 w-[300px]">
                            <p className="text-xl font-bold">
                              Bedroom {index + 1}
                            </p>
                            <div className="relative group">
                              <Carousel
                                plugins={[plugin.current]}
                                className="w-full"
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
                                      <Image
                                        src={`/images/villa/${
                                          j + index * 2 + 5
                                        }.jpg`}
                                        alt={`gallery${j}`}
                                        width={300}
                                        height={300}
                                        className="rounded-lg"
                                        onClick={() =>
                                          setOpen({
                                            open: true,
                                            category: "Bedrooms",
                                          })
                                        }
                                      />
                                    </CarouselItem>
                                  ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                <CarouselNext className="right-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                              </Carousel>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex gap-2 absolute -top-12 right-12">
                    <CarouselPrevious className="relative translate-y-0 left-0" />
                    <CarouselNext className="relative translate-y-0 right-0" />
                  </div>
                </Carousel>
              </div>
            </Card>

            <MagicCard
              className="cursor-pointer whitespace-nowrap w-full"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <div className="flex w-full">
                <div className="w-1/2 p-5 ">
                  <div className="flex gap-2 items-center mb-10">
                    <MapPinHouse />
                    <h1 className="text-2xl font-bold">Property Address</h1>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <span className="font-bold">Address:</span>
                      <span>Agios Tychon, Limassol, Cyprus</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold">City:</span>
                      <span>Limassol</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold">Country:</span>
                      <span>Cyprus</span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
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
            </MagicCard>

            <MagicCard
              className="cursor-pointer p-5 whitespace-nowrap"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <div className="flex gap-2 items-center mb-10">
                <NotepadText />
                <h1 className="text-2xl font-bold">Property Details</h1>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <span className="font-bold">Property Size:</span>
                  <span>350 m2</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Bedrooms:</span>
                  <span>3</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Bathrooms:</span>
                  <span>3</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Outdoor Facilities:</span>
                  <span>
                    Pool, Outdoor Hot Tub, Sauna, BBQ Area, Seating Areas,
                    Outdoor Dining
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Check-In Time:</span>
                  <span>14:00</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Check-Out Time:</span>
                  <span>12:00</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Optional Services:</span>
                  <span>
                    Airport Transfer, Private Chef, Private Driver, Private
                    Security, Private Yoga Instructor, Private Massage
                  </span>
                </div>
              </div>
            </MagicCard>

            <MagicCard
              className="cursor-pointer p-5 whitespace-nowrap"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <div className="flex gap-2 items-center mb-10">
                <NotepadText />
                <h1 className="text-2xl font-bold">Amenities</h1>
              </div>

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
            </MagicCard>

            <MagicCard
              className="cursor-pointer p-5 whitespace-nowrap"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <div className="flex gap-2 items-center mb-10">
                <Handshake />
                <h1 className="text-2xl font-bold">Terms & Conditions</h1>
              </div>
              <Table>
                <TableBody>
                  {RULES.map((rule, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium py-5">
                        <div className="flex items-center gap-3">
                          {rule.icon}
                          <p>{rule.title}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-wrap">{rule.text}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </MagicCard>
          </div>
        </section>
      </div>
      <Calendar />
      <GalleryModal
        open={open.open}
        setOpen={setOpen}
        category={open.category}
      />
    </div>
  );
}

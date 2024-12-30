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
import { amenities } from "@/data/constants";
import BookForm from "@/components/book-form";
import { Check } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Amenities() {
  return (
    <section id="gallery" className="mt-20">
      <p className="text-3xl font-bold mb-4">Amenites of NEW luxury House</p>
      <p className="text-lg">Great facilites!</p>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
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
    </section>
  );
}

import { Button } from "@/components/ui/button";
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
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { useScroll } from "@/hooks/use-scroll";
import { useEffect } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import lgZoom from "lightgallery/plugins/zoom";
const sections = [
  {
    title: "Living Areas",
    description: "Spacious and comfortable living spaces",
    images: Array.from({ length: 8 }).map(
      (_, i) => `/images/villa/${i + 10}.jpg`
    ),
  },
  {
    title: "Pool & Garden",
    description: "Outdoor paradise",
    images: Array.from({ length: 5 }).map(
      (_, i) => `/images/villa/${i + 20}.jpg`
    ),
  },
  {
    title: "Bedrooms",
    description: "Explore our luxurious bedrooms",
    images: Array.from({ length: 7 }).map(
      (_, i) => `/images/villa/${i + 1}.jpg`
    ),
  },
];

export default function GalleryModal({
  open,
  setOpen,
  category = "Living Areas",
}) {
  const { scrollToSection } = useScroll();
  useEffect(() => {
    // Small delay to ensure modal is fully rendered
    setTimeout(() => {
      scrollToSection(null, category.toLowerCase());
    }, 100);
  }, [category]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[1200px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Photo Tour</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[720px]">
          {sections.map((section, sectionIndex) => (
            <div
              id={section.title.toLowerCase()}
              key={sectionIndex}
              className="flex gap-8 p-4"
            >
              <div className="w-48 flex-shrink-0">
                <div className="sticky top-0">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4">
                {section.images.map((src, i) => (
                  <AspectRatio key={i} ratio={16 / 9}>
                    <Image
                      src={src}
                      alt={`${section.title} Image ${i + 1}`}
                      fill
                      className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                    />
                  </AspectRatio>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

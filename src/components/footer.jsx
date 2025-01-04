"use client";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-cyan-400 py-10 mt-20">
      <div className="flex justify-around">
        <div className="">
          <p className="text-3xl text-white">TG Villa</p>
          <p className="text-2xl text-white mt-3">Get a trip now!</p>
          <p className="text-lg text-white">
            Start your trip with your family in the most beautiful villa
          </p>
          <RainbowButton className="bg-white text-black mt-5 w-40">
            Book Now
          </RainbowButton>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-white text-2xl">Contact Us</p>
          <div className="flex items-center text-white gap-2">
            <MapPin />
            <p>Ithakis 10, Agios Tychonas, 4521 Limassol, Cyprus</p>
          </div>
          <div className="flex items-center text-white gap-2">
            <Phone />
            <p>+1 234 5678</p>
          </div>
          <div className="flex items-center text-white gap-2">
            <Mail />
            <p>theofilos@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import Hero from "@/sections/home/hero";
import About from "@/sections/home/about";
import { useEffect, useContext } from "react";
import { MyContext } from "@/components/context-provider";
import Amenities from "@/sections/home/amenities";
import Rules from "@/sections/home/rules";
import Testimonials from "@/sections/home/testimonials";
import CallToAction from "@/sections/home/call-to-action";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useBooking } from "@/components/context-provider";
import { signIn } from "@/auth";
import SignIn from "@/components/sign-in";

export default function Home() {
  const { books, setBooks } = useBooking();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/books/book`
        );
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Re-fetch data

  return (
    <div className="pb-20 relative">
      <Hero />
      <div className="max-w-6xl mx-auto">
        <CallToAction />
        <About />
        <Amenities />
        <Testimonials />
      </div>
    </div>
  );
}

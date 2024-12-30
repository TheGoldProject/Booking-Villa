"use client";

import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Minus, Plus } from "lucide-react";
import { MyContext } from "@/components/context-provider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarDays, User, HandHeart } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";
import axios from "axios";
import {
  differenceInDays,
  addDays,
  subDays,
  format,
  isBefore,
  isAfter,
} from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const checkValidDateRange = (selected, bookedArray) => {
  if (!selected.from || !selected.to) {
    return false;
  }
  for (let book of bookedArray) {
    if (
      (isAfter(book.from, selected.from) && isBefore(book.from, selected.to)) ||
      (isAfter(book.to, selected.from) && isBefore(book.to, selected.to))
    ) {
      return false;
    }
  }
  return true;
};
export default function BookCard() {
  const { toast } = useToast();
  const [date, setDate] = useState({
    from: undefined,
    to: undefined,
  });
  const { books, setBooks } = useContext(MyContext);
  const [people, setPeople] = useState({ adults: 0, children: 0, infants: 0 });
  const [services, setServices] = useState({
    breakfirst: false,
    cleaning: false,
  });

  function onChangePeople(type, adjustment) {
    setPeople((prevStates) => ({
      ...prevStates,
      [type]: prevStates[type] + adjustment, // Update the specific key dynamically
    }));
  }

  function onChangeService(type, checked) {
    setServices((prevStates) => ({
      ...prevStates,
      [type]: checked, // Update the specific key dynamically
    }));
  }

  function onSelectDate(e) {
    // setDate(e);
    if (!checkValidDateRange(e, books)) {
      toast({
        variant: "destructive",
        title: "Oh! You selected dates that already booked.",
        description: "Please select again.",
      });
      setDate({ from: undefined, to: undefined });
    }
  }

  const matcher = [
    // Disable all days before today
    { before: new Date() },
    ...books.map((range) => {
      return {
        after: subDays(range.from, 1),
        before: addDays(range.to, 1),
      };
    }),
  ];

  const handleSubmit = async () => {
    try {
      if (checkValidDateRange(date, books)) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/books/book`,
          date
        );
        toast({
          variant: "success",
          title: "Your request is successfully reserved!",
        });
        console.log("Response:", response.data);
      } else {
        toast({
          variant: "destructive",
          title: "Oh! You selected dates that already booked.",
          description: "Please select again.",
        });
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  return (
    <ShineBorder
      className="rounded-lg bg-background/70 md:shadow-xl p-10 backdrop-blur-sm"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <h1 className="text-3xl font-bold mb-5">Book Now</h1>
      <div className="flex flex-col gap-5">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarDays />
              {date?.from ? (
                format(date?.from, "yyyy-MM-dd")
              ) : (
                <span>Check-In Date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-10" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={new Date()}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              modifiers={{ disabled: matcher }}
              modifiersClassNames={{
                disabled:
                  "line-through text-red-500 text-muted-foreground cursor-not-allowed",
                today: "text-cyan-500 bg-cyan-100",
              }}
              required
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarDays />
              {date?.to ? (
                format(date?.to, "yyyy-MM-dd")
              ) : (
                <span>Check-Out Date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-10" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={new Date()}
              selected={date}
              onSelect={setDate}
              // onSelect={(e) => onSelectDate(e)}
              numberOfMonths={2}
              modifiers={{ disabled: matcher }}
              modifiersClassNames={{
                disabled:
                  "line-through text-red-500 text-muted-foreground cursor-not-allowed",
                today: "text-cyan-500 bg-cyan-100",
              }}
              // excludeDisabled
              // showOutsideDays={false}
              required
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <User />
              {people.adults + people.children} guests
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-10" align="end">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Adults</div>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:border-black"
                    onClick={() => onChangePeople("adults", -1)}
                    disabled={people.adults <= 0}
                  >
                    <Minus />
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-xl ">{people.adults}</div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:border-black"
                    onClick={() => onChangePeople("adults", 1)}
                    disabled={people.adults >= 5}
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Children</div>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:border-black"
                    onClick={() => onChangePeople("children", -1)}
                    disabled={people.children <= 0}
                  >
                    <Minus />
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-xl ">{people.children}</div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:border-black"
                    onClick={() => onChangePeople("children", 1)}
                    disabled={people.children >= 5}
                  >
                    <Plus />
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Infants</div>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:border-black"
                    onClick={() => onChangePeople("infants", -1)}
                    disabled={people.infants <= 0}
                  >
                    <Minus />
                  </Button>
                  <div className="flex-1 text-center">
                    <div className="text-xl ">{people.infants}</div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:border-black"
                    onClick={() => onChangePeople("infants", 1)}
                    disabled={people.infants >= 5}
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <HandHeart />
              Services
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-10" align="end">
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={services.breakfirst}
                  onCheckedChange={(e) => onChangeService("breakfirst", e)}
                />
                <label
                  htmlFor="services"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Breakfirst 10$
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={services.cleaning}
                  onCheckedChange={(e) => onChangeService("cleaning", e)}
                />
                <label
                  htmlFor="services"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Clearning 70$
                </label>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Button onClick={handleSubmit}>Reserve</Button>
      </div>
    </ShineBorder>
    // <div className="flex flex-col gap-10 py-10">
    //   <div className="flex justify-between">
    //     <div className="flex flex-col gap-3">
    //       <h1 className="text-3xl font-bold">Request your trip now!</h1>
    //       <p className="text-xl text-muted-foreground">
    //         Set date range and number of people
    //       </p>
    //     </div>
    //     <div className="flex flex-col items-end gap-3">
    //       <p className="text-3xl">
    //         <span className="line-through text-muted-foreground">
    //           ${"4000"}
    //         </span>{" "}
    //         ${"3800"}
    //       </p>
    //       <div className="flex items-center gap-2">
    //         <div className="flex items-center gap-2">
    //           <CalendarDays className="text-cyan-400" />{" "}
    //           <p className="text-lg">
    //             {date?.from ? (
    //               date.to ? (
    //                 <>
    //                   {format(date.from, "y/LL/dd")} -{" "}
    //                   {format(date.to, "y/LL/dd")}
    //                 </>
    //               ) : (
    //                 format(date.from, "LLL dd, y")
    //               )
    //             ) : (
    //               <span>Pick a date</span>
    //             )}
    //           </p>
    //         </div>
    //         <div className="flex items-center gap-2">
    //           <User className="text-cyan-400" />{" "}
    //           <p className="text-lg">
    //             {people.adults + people.children} guests
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex items-start gap-10">
    //     <div className="flex flex-col gap-5">
    //       <Card className="p-5">
    //         <CardContent>
    //           <Calendar
    //             initialFocus
    //             mode="range"
    //             defaultMonth={new Date()}
    //             selected={date}
    //             onSelect={setDate}
    //             // onSelect={(e) => onSelectDate(e)}
    //             numberOfMonths={2}
    //             modifiers={{ disabled: matcher }}
    //             modifiersClassNames={{
    //               disabled:
    //                 "line-through text-red-500 text-muted-foreground cursor-not-allowed",
    //               today: "text-cyan-500 bg-cyan-100",
    //             }}
    //             // excludeDisabled
    //             // showOutsideDays={false}
    //             required
    //           />
    //         </CardContent>
    //       </Card>

    //       <Card className="w-[400px] p-5">
    //         <CardContent>
    // <div className="flex flex-col gap-4">
    //   <div className="flex justify-between items-center">
    //     <div className="text-xl font-bold">Adults</div>
    //     <div className="flex items-center justify-center gap-4">
    //       <Button
    //         variant="outline"
    //         size="icon"
    //         className="rounded-full hover:border-black"
    //         onClick={() => onChangePeople("adults", -1)}
    //         disabled={people.adults <= 0}
    //       >
    //         <Minus />
    //       </Button>
    //       <div className="flex-1 text-center">
    //         <div className="text-xl ">{people.adults}</div>
    //       </div>
    //       <Button
    //         variant="outline"
    //         size="icon"
    //         className="rounded-full hover:border-black"
    //         onClick={() => onChangePeople("adults", 1)}
    //         disabled={people.adults >= 5}
    //       >
    //         <Plus />
    //       </Button>
    //     </div>
    //   </div>
    //   <div className="flex justify-between items-center">
    //     <div className="text-xl font-bold">Children</div>
    //     <div className="flex items-center justify-center gap-4">
    //       <Button
    //         variant="outline"
    //         size="icon"
    //         className="rounded-full hover:border-black"
    //         onClick={() => onChangePeople("children", -1)}
    //         disabled={people.children <= 0}
    //       >
    //         <Minus />
    //       </Button>
    //       <div className="flex-1 text-center">
    //         <div className="text-xl ">{people.children}</div>
    //       </div>
    //       <Button
    //         variant="outline"
    //         size="icon"
    //         className="rounded-full hover:border-black"
    //         onClick={() => onChangePeople("children", 1)}
    //         disabled={people.children >= 5}
    //       >
    //         <Plus />
    //       </Button>
    //     </div>
    //   </div>

    //   <div className="flex justify-between items-center">
    //     <div className="text-xl font-bold">Infants</div>
    //     <div className="flex items-center justify-center gap-4">
    //       <Button
    //         variant="outline"
    //         size="icon"
    //         className="rounded-full hover:border-black"
    //         onClick={() => onChangePeople("infants", -1)}
    //         disabled={people.infants <= 0}
    //       >
    //         <Minus />
    //       </Button>
    //       <div className="flex-1 text-center">
    //         <div className="text-xl ">{people.infants}</div>
    //       </div>
    //       <Button
    //         variant="outline"
    //         size="icon"
    //         className="rounded-full hover:border-black"
    //         onClick={() => onChangePeople("infants", 1)}
    //         disabled={people.infants >= 5}
    //       >
    //         <Plus />
    //       </Button>
    //     </div>
    //   </div>
    // </div>
    //         </CardContent>
    //       </Card>
    //     </div>

    //     <div className="flex flex-col gap-3 flex-1">
    //       {date?.to && date?.from ? (
    //         <div className="flex justify-between">
    //           <p className="text-zinc-500 text-xl">
    //             ${"300"} x {differenceInDays(date?.to, date?.from)} nights
    //           </p>
    //           <p className="text-zinc-500 text-xl">$900</p>
    //         </div>
    //       ) : (
    //         <></>
    //       )}
    //       <div className="flex justify-between">
    //         <p className="text-zinc-500 text-xl">Cleaning Fee</p>
    //         <p className="text-zinc-500 text-xl">$150</p>
    //       </div>
    //       <div className="flex justify-between">
    //         <p className="text-zinc-500 text-xl">Discount for weekly rate</p>
    //         <p className="text-cyan-500 text-xl">-$150</p>
    //       </div>
    //       <div className="flex justify-between pt-5 mt-2 border-t-2 border-zinc-300">
    //         <p className="text-zinc-800 text-xl ">Total</p>
    //         <p className="text-zinc-800 text-3xl">$950</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-center gap-10">
    //     {/* <Link href="/checkout"> */}
    //     <Button
    //       className="w-40 h-12 bg-cyan-400 text-lg"
    //       onClick={handleSubmit}
    //     >
    //       Reserve
    //     </Button>
    //     {/* </Link> */}
    //     <Button variant="outline" className="w-40 h-12 text-lg">
    //       Cancel
    //     </Button>
    //   </div>
    // </div>
  );
}

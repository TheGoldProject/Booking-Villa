"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { HandHeart, User, Soup, Check, X } from "lucide-react";
import { useState, useContext } from "react";
import { MyContext } from "@/components/context-provider";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  isAfter,
  isBefore,
  subDays,
  addDays,
  differenceInDays,
} from "date-fns";

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

export default function Book() {
  const [date, setDate] = useState({
    from: undefined,
    to: undefined,
  });
  const nights = differenceInDays(date?.to, date?.from);
  const { books, setBooks } = useContext(MyContext);

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

  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="flex flex-col pt-20">
        <h1 className="text-5xl font-bold">Book Now</h1>
        <p className="text-2xl text-zinc-700">
          Book your appointment with us today and experience the best service in
          town.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 mt-10">
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
            <PopoverContent className="w-auto p-10">
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
            <PopoverContent className="w-auto p-10">
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
        </div>
        {date?.from && date?.to && (
          <div className="mt-10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Accommodation Type</TableHead>
                  <TableHead className="w-[150px]">Number of Guests</TableHead>
                  <TableHead className="w-[200px]">Price for {nights} days</TableHead>
                  <TableHead className="w-[200px]">Your Choices</TableHead>
                  <TableHead className="w-[300px]">Reserve</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="cursor-pointer">
                  <TableCell rowSpan={6} className="align-top">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-xl font-bold">
                          Luxury Beachfront Villa
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Experience the ultimate in coastal living
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Property Highlights:</h4>
                        <ul className="text-sm text-muted-foreground list-disc pl-4">
                          <li>Direct beach access</li>
                          <li>Private infinity pool</li>
                          <li>24/7 concierge service</li>
                          <li>Fully equipped kitchen</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Perfect For:</h4>
                        <ul className="text-sm text-muted-foreground list-disc pl-4">
                          <li>Family vacations</li>
                          <li>Romantic getaways</li>
                          <li>Special occasions</li>
                          <li>Long-term stays</li>
                        </ul>
                      </div>

                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground">
                          Winner of "Best Luxury Villa 2023"
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <User size={20} /> × 2
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-red-500 line-through">${nights * 500}</p>
                    <p className="text-xl font-bold">${nights * 400}</p>
                    <p className="text-sm text-zinc-500">
                      Included: $70 cleaning fee per stay
                    </p>
                    <p className="text-sm text-zinc-500">Excluded: 9% VAT</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Soup size={20} />
                      <p>Breakfast $10 (optional)</p>
                    </div>
                    <div className="flex gap-2 text-green-500">
                      <Check size={30} />
                      <p>Free cancellation before January 27, 2026</p>
                    </div>
                    <div className="flex gap-2 text-red-500">
                      <X size={20} />
                      <p>No-show fee $100</p>
                    </div>
                  </TableCell>
                  <TableCell rowSpan={6} className="align-top">
                    <div className="flex flex-col gap-2 mt-5 px-5">
                      <div className="flex justify-between">
                        <p className="text-zinc-500">$500 x {nights}nights</p>
                        <p className="text-zinc-500">${nights * 500}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-zinc-500">Breakfast</p>
                        <p className="text-zinc-500">$10</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-zinc-500">Cleaning Fee</p>
                        <p className="text-zinc-500">$70</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-zinc-500">
                          Discount for weekly rate{" "}
                          <span className="bg-cyan-400 text-white text-xs px-1 py-0.5 rounded-md">
                            10%
                          </span>
                        </p>
                        <p className="text-cyan-500">-$150</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-zinc-500">
                          Discount for premium member
                          <span className="bg-cyan-400 text-white text-xs px-1 py-0.5 rounded-md">
                            10%
                          </span>
                        </p>
                        <p className="text-cyan-500">-$150</p>
                      </div>
                      <div className="flex justify-between pt-5 mt-2 border-t-2 border-zinc-300">
                        <p className="text-zinc-800 text-xl ">Total</p>
                        <p className="text-zinc-800 text-3xl">$950</p>
                      </div>

                      <Button className="w-full">Reserve</Button>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow className="cursor-pointer">
                  <TableCell>
                    <div className="flex items-center">
                      <User size={20} /> × 2
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-red-500 line-through">${nights * 500}</p>
                    <p className="text-xl font-bold">${nights * 400}</p>
                    <p className="text-sm text-zinc-500">
                      Included: $70 cleaning fee per stay
                    </p>
                    <p className="text-sm text-zinc-500">Excluded: 9% VAT</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Soup size={20} />
                      <p>Breakfast $10 (optional)</p>
                    </div>
                    <div className="flex gap-2 text-green-500">
                      <Check size={20} />
                      <p>Free cancellation before January 27, 2026</p>
                    </div>
                    <div className="flex gap-2 text-red-500">
                      <X size={20} />
                      <p>No-show fee $100</p>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow className="cursor-pointer">
                  <TableCell>
                    <div className="flex items-center">
                      <User size={20} /> × 3
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-red-500 line-through">${nights * 500}</p>
                    <p className="text-xl font-bold">${nights * 400}</p>
                    <p className="text-sm text-zinc-500">
                      Included: $70 cleaning fee per stay
                    </p>
                    <p className="text-sm text-zinc-500">Excluded: 9% VAT</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Soup size={20} />
                      <p>Breakfast $10 (optional)</p>
                    </div>
                    <div className="flex gap-2 text-green-500">
                      <Check size={20} />
                      <p>Free cancellation before January 27, 2026</p>
                    </div>
                    <div className="flex gap-2 text-red-500">
                      <X size={20} />
                      <p>No-show fee $100</p>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow className="cursor-pointer">
                  <TableCell>
                    <div className="flex items-center">
                      <User size={20} /> × 4
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-red-500 line-through">${nights * 500}</p>
                    <p className="text-xl font-bold">${nights * 400}</p>
                    <p className="text-sm text-zinc-500">
                      Included: $70 cleaning fee per stay
                    </p>
                    <p className="text-sm text-zinc-500">Excluded: 9% VAT</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Soup size={20} />
                      <p>Breakfast $10 (optional)</p>
                    </div>
                    <div className="flex gap-2 text-green-500">
                      <Check size={20} />
                      <p>Free cancellation before January 27, 2026</p>
                    </div>
                    <div className="flex gap-2 text-red-500">
                      <X size={20} />
                      <p>No-show fee $100</p>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow className="cursor-pointer">
                  <TableCell>
                    <div className="flex items-center">
                      <User size={20} /> × 5
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-red-500 line-through">${nights * 500}</p>
                    <p className="text-xl font-bold">${nights * 400}</p>
                    <p className="text-sm text-zinc-500">
                      Included: $70 cleaning fee per stay
                    </p>
                    <p className="text-sm text-zinc-500">Excluded: 9% VAT</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Soup size={20} />
                      <p>Breakfast $10 (optional)</p>
                    </div>
                    <div className="flex gap-2 text-green-500">
                      <Check size={20} />
                      <p>Free cancellation before January 27, 2026</p>
                    </div>
                    <div className="flex gap-2 text-red-500">
                      <X size={20} />
                      <p>No-show fee $100</p>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow className="cursor-pointer">
                  <TableCell>
                    <div className="flex items-center">
                      <User size={20} /> × 6
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-red-500 line-through">${nights * 500}</p>
                    <p className="text-xl font-bold">${nights * 400}</p>
                    <p className="text-sm text-zinc-500">
                      Included: $70 cleaning fee per stay
                    </p>
                    <p className="text-sm text-zinc-500">Excluded: 9% VAT</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Soup size={20} />
                      <p>Breakfast $10 (optional)</p>
                    </div>
                    <div className="flex gap-2 text-green-500">
                      <Check size={20} />
                      <p>Free cancellation before January 27, 2026</p>
                    </div>
                    <div className="flex gap-2 text-red-500">
                      <X size={20} />
                      <p>No-show fee $100</p>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}

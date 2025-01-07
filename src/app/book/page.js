"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, HandCoins, Tag } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  HandHeart,
  User,
  Soup,
  Check,
  X,
  Minus,
  Plus,
  RefreshCwOff,
} from "lucide-react";
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
  const [people, setPeople] = useState({ adults: 0, children: 0, infants: 0 });
  const nights = differenceInDays(date?.to, date?.from);
  const { books, setBooks } = useContext(MyContext);

  const [open, setOpen] = useState(false); // Add this state for popover control

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    if (selectedDate.from && selectedDate.to) {
      setOpen(false);
    }
  };

  const handleOpenChange = (isOpen) => {
    setOpen(isOpen);
    if (isOpen) {
      setDate({
        from: undefined,
        to: undefined,
      });
    }
  };

  function onChangePeople(type, adjustment) {
    setPeople((prevStates) => ({
      ...prevStates,
      [type]: prevStates[type] + adjustment, // Update the specific key dynamically
    }));
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

  return (
    <div className="max-w-7xl mx-auto py-20">
      <div class="mb-10 mt-10">
        <h2 class="mb-4 text-center text-3xl font-extrabold italic text-gray-900 md:mb-6 lg:text-5xl">
          Book Now
        </h2>
        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-xl italic">
          Book your appointment with us today and experience the best service in
          town.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex mt-2">
          <Popover open={open} onOpenChange={handleOpenChange}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] h-12 border-zinc-500 rounded-tr-none rounded-br-none justify-start text-left font-normal ",
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
                onSelect={handleSelect}
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
                  "w-[240px] h-12 border-zinc-500 rounded-tl-none rounded-bl-none justify-start text-left font-normal ",
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

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] h-12 border-zinc-500 justify-start text-left font-normal ml-4",
                  !date && "text-muted-foreground"
                )}
              >
                <User />
                {people.adults + people.children} guests
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-10" align="end">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="text-xl">Adults</div>
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
                  <div className="text-xl">Children</div>
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
                  <div className="text-xl">Infants</div>
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
        </div>

        {date?.from && date?.to && (
          <div className="mt-10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">
                    Accommodation Type
                  </TableHead>
                  <TableHead className="w-[150px]">Number of Guests</TableHead>
                  <TableHead className="w-[180px]">
                    Price for {nights} days
                  </TableHead>
                  <TableHead className="w-[250px]">Your Choices</TableHead>
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
                  <TableCell className="align-top">
                    <div className="flex items-start">
                      <User size={20} /> × {people.adults + people.children}
                    </div>
                  </TableCell>
                  <TableCell className="align-top">
                    <div className="flex flex-col pb-20">
                      <p className="text-red-500 line-through">
                        ${nights * 500}
                      </p>
                      <p className="text-xl font-bold">${nights * 400}</p>
                      <span className="bg-cyan-400 text-white rounded-sm px-1 py-0.5 max-w-fit">
                        10% off
                      </span>

                      <p className="text-xs text-zinc-700 mt-2">
                        <span className="font-bold">Included:</span> $70
                        cleaning fee per stay
                      </p>
                      <p className="text-xs text-zinc-700 mt-2">
                        <span className="font-bold">Excluded:</span> 9% VAT
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="align-top">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <Soup size={20} />
                        <p>Breakfast $10 (optional)</p>
                      </div>
                      <div className="flex gap-2">
                        <RefreshCwOff size={20} />
                        <p>Non-refundable</p>
                      </div>
                      <div className="flex gap-2">
                        <HandCoins size={20} />
                        <p>Pay Online</p>
                      </div>
                      <div className="flex gap-2 text-cyan-400">
                        <Tag size={20} />
                        <p>Premium Member discount maybe available</p>
                      </div>
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
                  <TableCell className="align-top">
                    <div className="flex items-start">
                      <User size={20} /> × {people.adults + people.children}
                    </div>
                  </TableCell>
                  <TableCell className="align-top">
                    <div className="flex flex-col pb-20">
                      <p className="text-red-500 line-through">
                        ${nights * 450}
                      </p>
                      <p className="text-xl font-bold">${nights * 430}</p>
                      <span className="bg-cyan-400 text-white rounded-sm px-1 py-0.5 max-w-fit">
                        10% off
                      </span>

                      <p className="text-xs text-zinc-700 mt-2">
                        <span className="font-bold">Included:</span> $70
                        cleaning fee per stay
                      </p>
                      <p className="text-xs text-zinc-700 mt-2">
                        <span className="font-bold">Excluded:</span> 9% VAT
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="align-top">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <Soup size={20} />
                        <p>Breakfast $10 (optional)</p>
                      </div>
                      <div className="flex gap-2 text-green-500">
                        <Check size={20} className="text-green-500" />
                        <p>Free cancellation before January 27, 2026</p>
                      </div>
                      <div className="flex gap-2">
                        <HandCoins size={20} />
                        <p>Pay nothing now</p>
                      </div>
                      <div className="flex gap-2 text-cyan-400">
                        <Tag size={20} />
                        <p>Premium Member discount maybe available</p>
                      </div>
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

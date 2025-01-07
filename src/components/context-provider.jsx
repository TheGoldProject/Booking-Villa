"use client";

import { toast } from "@/hooks/use-toast";
import { createContext, useContext, useState } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [books, setBooks] = useState([]);

  const [date, setDate] = useState({
    from: undefined,
    to: undefined,
  });

  const [people, setPeople] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const updatePeople = (type, adjustment) => {
    if (people.adults + people.children === 6 && adjustment === 1) {
      toast({
        title: "Maximum number of people reached",
        description: "You can only have 6 people in the house",
      });
      return;
    }
    setPeople((prev) => ({
      ...prev,
      [type]: prev[type] + adjustment,
    }));
  };

  return (
    <BookingContext.Provider
      value={{
        books,
        setBooks,
        date,
        setDate,
        people,
        setPeople,
        updatePeople,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};

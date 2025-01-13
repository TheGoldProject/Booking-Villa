"use client";
import "react-dates/initialize"; // Add this before other react-dates imports
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import { useState, useEffect } from "react";
import {
  addDays,
  isWithinInterval,
  parseISO,
  differenceInDays,
  format,
} from "date-fns";

export const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState("startDate"); // Default to "startDate"
  const [blockedRanges, setBlockedRanges] = useState([]);
  const [dailyPrices, setDailyPrices] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchBookingData = async () => {
      // Simulate API calls for blocked ranges and daily prices
      const blockedRangesResponse = [
        { start: "2025-01-10", end: "2025-01-15" },
        { start: "2025-01-20", end: "2025-01-25" },
      ];
      const dailyPricesResponse = {
        "2025-01-11": 100,
        "2025-01-12": 120,
        "2025-01-13": 90,
        "2025-01-14": 150,
        "2025-01-15": 130,
      };

      setBlockedRanges(blockedRangesResponse);
      setDailyPrices(dailyPricesResponse);
    };

    fetchBookingData();
  }, []);

  // Calculate total price for the selected range
  useEffect(() => {
    if (startDate && endDate) {
      let price = 0;
      let currentDate = startDate.clone();
      while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
        const dateKey = currentDate.format("YYYY-MM-DD");
        if (dailyPrices[dateKey]) {
          price += dailyPrices[dateKey];
        }
        currentDate = currentDate.add(1, "days");
      }
      setTotalPrice(price);
    } else {
      setTotalPrice(0);
    }
  }, [startDate, endDate, dailyPrices]);

  // Check if a day is in a blocked range
  const isDayBlocked = (day) => {
    return blockedRanges.some((range) =>
      isWithinInterval(day.toDate(), {
        start: parseISO(range.start),
        end: parseISO(range.end),
      })
    );
  };

  // Handle date selection and show errors for blocked ranges
  const handleDatesChange = ({ startDate, endDate }) => {
    if (startDate && endDate) {
      const isInvalid = blockedRanges.some((range) =>
        isWithinInterval(parseISO(range.start), {
          start: startDate.toDate(),
          end: endDate.toDate(),
        })
      );

      if (isInvalid) {
        setErrorMessage(
          "Selected range includes blocked dates. Please try again."
        );
        setStartDate(null);
        setEndDate(null);
        return;
      }
    }

    setErrorMessage("");
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center items-center">
        <div className="mt-10">
          {/* <DayPickerRangeController
            startDate={startDate} // Start date
            endDate={endDate} // End date
            onDatesChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }} // Callback for date changes
            focusedInput={focusedInput} // Which input is focused
            onFocusChange={(focusedInput) =>
              setFocusedInput(focusedInput || "startDate")
            } // Keep the focus on one input
            isDayBlocked={isDayBlocked} // Block specific days
            isOutsideRange={(day) => day.isBefore(new Date())} // Disable past dates
            numberOfMonths={2} // Number of months displayed
            renderDayContents={(day) => {
              const dateKey = day.format("YYYY-MM-DD");
              const price = dailyPrices[dateKey];
              const isSelectedRange =
                startDate &&
                endDate &&
                isWithinInterval(day.toDate(), {
                  start: startDate.toDate(),
                  end: endDate.toDate(),
                });

              return (
                <div
                  className={`flex flex-col items-center ${
                    isSelectedRange ? "bg-blue-100 rounded-lg" : ""
                  }`}
                >
                  <span>{day.date()}</span>
                  {price && (
                    <span className="text-xs text-green-500">${price}</span>
                  )}
                </div>
              );
            }} // Render prices and highlight selected range
            daySize={50}
          /> */}
          <DayPickerRangeController
            startDate={startDate}
            endDate={endDate}
            onDatesChange={handleDatesChange} // Changed to use our handler function
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) =>
              setFocusedInput(focusedInput || "startDate")
            }
            numberOfMonths={2}
            isOutsideRange={(day) => day.isBefore(new Date())}
            isDayBlocked={isDayBlocked} // Re-added the blocked dates functionality
            renderDayContents={(day) => {
              // Re-added price display
              const dateKey = day.format("YYYY-MM-DD");
              const price = dailyPrices[dateKey];
              const isSelectedRange =
                startDate &&
                endDate &&
                isWithinInterval(day.toDate(), {
                  start: startDate.toDate(),
                  end: endDate.toDate(),
                });

              return (
                <div className={`flex flex-col items-center `}>
                  <span>{day.date()}</span>
                  {price && (
                    <span className="text-xs text-green-500">${price}</span>
                  )}
                </div>
              );
            }}
            daySize={50}
          />
        </div>
      </main>
    </div>
  );
};

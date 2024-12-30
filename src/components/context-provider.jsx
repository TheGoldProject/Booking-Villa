"use client";

import { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

export function ContextProvider({ children }) {
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return <>{children}</>;
  // }

  return (
    <MyContext.Provider value={{ books, setBooks }}>
      {children}
    </MyContext.Provider>
  );
}

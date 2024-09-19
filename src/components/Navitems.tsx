"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import Navitem from "./Navitem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const Navitems = () => {
  const [activeindex, setactiveindex] = useState<null | number>(null);

  const isanyopen = activeindex !== null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setactiveindex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const navref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navref, () => setactiveindex(null));

  return (
    <div className="flex gap-4 h-full" ref={navref}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleopen = () => {
          if (activeindex === i) {
            setactiveindex(null);
          } else {
            setactiveindex(i);
          }
        };

        const isopen = i === activeindex;

        return (
          <Navitem
            category={category}
            handleopen={handleopen}
            isanyopen={isanyopen}
            isopen={isopen}
            key={category.value}
          />
        );
      })}
    </div>
  );
};
export default Navitems;

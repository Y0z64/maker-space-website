// Import the Image component from astro:assets

import cn from "@/utils/cn";
import { useEffect, useState } from "react";

// Destructure the component properties from Astro.props

// Define TypeScript interface for the properties
interface Props {
  currentTab: number;
  index: number;
  src?: any;
  alt: string;
  className? : string;
}

export default function TabContent({ src, alt, currentTab, index, className }: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (currentTab === index) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [currentTab]);

  return (
    <div className={active ? "" : "hidden"}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "aspect-[2/3] rounded-xl object-cover shadow-xl shadow-neutral-200 dark:shadow-neutral-900/[.2] lg:aspect-auto",
          className,
        )}
        loading={"eager"}
      />
    </div>
  );
}

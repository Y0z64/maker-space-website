import cn from "@/utils/cn";
import { useEffect, useState, type PropsWithChildren } from "react";
import Icon from "../icons/Icon";

// Define TypeScript interface for properties
interface baseProps extends PropsWithChildren {
  index: number;
  currentTab: number;
  heading?: string;
  content?: string;
  className?: string;
}

type Props = baseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function TabNav({
  index,
  currentTab,
  heading,
  content,
  children,
  className,
  ...props
}: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (currentTab === index) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [currentTab]);

  return (
    <div className="flex h-fit w-full flex-col gap-2 transition-all duration-300 ease-in-out">
      <button
        type="button"
        className={`${active ? "border border-white dark:bg-neutral-800 bg-neutral-300" : ""} rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:focus:outline-none dark:hs-tab-active:bg-neutral-700/60 md:p-5`}
        {...props}
      >
        <span className={`flex items-center justify-between`}>
          {children}
          <span className="ms-6 grow">
            <span className="block text-lg font-bold text-neutral-800 hs-tab-active:text-primary dark:text-neutral-200 dark:hs-tab-active:text-accent-200">
              {heading}
            </span>
          </span>
          {active ? (
            <Icon name="accordionActive" />
          ) : (
            <Icon name="accordionNotActive" />
          )}
        </span>
      </button>
      <div className={cn(`${active ? "" : "hidden"} text-black dark:text-white`, className)}>
        {content}
      </div>
    </div>
  );
}

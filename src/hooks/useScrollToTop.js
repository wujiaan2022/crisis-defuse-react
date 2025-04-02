import { useRef } from "react";

export function useScrollToTop() {
  const scrollRef = useRef(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollIntoView();
  };

  return { scrollRef, scrollToTop };
}

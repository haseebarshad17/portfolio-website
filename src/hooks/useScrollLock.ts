"use client";
import { useEffect } from "react";

const useScrollLock = (isScrollAllowed: boolean) => {
  useEffect(() => {
    if (!isScrollAllowed) {
      document.body.style.overflow = "visible";
      document.body.style.height = "";
    } else {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.height = "";
    };
  }, [isScrollAllowed]);
};

export default useScrollLock;

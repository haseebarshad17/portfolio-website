import { useEffect, useState, useRef } from "react";

interface UseTextAnimatorProps {
  TextArray: string[] | string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const useTextLengthAnimation = ({
  TextArray,
  typingSpeed = 300,
  deletingSpeed = 300,
  pauseDuration = 2000,
}: UseTextAnimatorProps): string => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentText = TextArray[textIndex % TextArray.length];

    if (!isDeleting && charIndex <= currentText.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex > currentText.length) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % TextArray.length);
      setCharIndex(0);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    charIndex,
    isDeleting,
    textIndex,
    TextArray,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
};

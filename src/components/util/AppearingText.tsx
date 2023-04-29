import { useEffect, useRef, useState } from "react";

const AppearingText = ({
  text,
  children,
  intervalInMs = 40,
  initialDelayInMs = 0,
}: {
  text: string;
  intervalInMs?: number;
  initialDelayInMs?: number;
  children?: (text: string) => JSX.Element;
}) => {
  const words = text.split(" ");
  const [currentText, setCurrentText] = useState<string>(words[0]);
  const intervalRef = useRef<number | null>(null);
  const initialTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!window) return;

    function setInterval() {
      intervalRef.current = window.setInterval(() => {
        const currentWords = currentText.split(" ");
        const currentWordCount = currentWords.length;
        if (currentWordCount === words.length) {
          console.log("done", currentText);
          window.clearInterval(intervalRef.current as number);
          return;
        }
        setCurrentText(`${currentText} ${words[currentWordCount]}`);
      }, intervalInMs);
    }

    initialTimeoutRef.current = window.setTimeout(
      setInterval,
      initialDelayInMs
    );

    return () => {
      window.clearTimeout(initialTimeoutRef.current as number);
      window.clearInterval(intervalRef.current as number);
    };
  }, [currentText, text, intervalInMs, words, initialDelayInMs]);

  return <>{children ? children(currentText) : currentText}</>;
};

export default AppearingText;

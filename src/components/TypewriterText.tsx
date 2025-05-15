import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

export default function TypewriterText({ text, delay = 75 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, delay);

    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typing);
      clearInterval(cursorBlink);
    };
  }, [text, delay]);

  return (
    <span className="inline-block">
      {displayText}
      <span className={`text-accent ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
}

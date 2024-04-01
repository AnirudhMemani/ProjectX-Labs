import Typed from "typed.js";
import { useEffect, useRef } from "react";

const TypingAnimation: React.FC<{ items: string[]; textColor?: string }> = ({
  items,
  textColor
}): React.JSX.Element => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: items,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={`inline ${textColor}`}>
      <span ref={el}></span>
    </div>
  );
};

export default TypingAnimation;

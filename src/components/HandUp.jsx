import { useEffect, useState } from "react";

export default function HandUp() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 600) {
        setScrollPosition(0);
      } else {
        const transformX = 100;
        setScrollPosition(transformX);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#frontpage">
      <i className="fa-solid fa-hand-point-up" id="toTop" style={{ transform: `translateX(${scrollPosition}px)` }}></i>
    </a>
  );
}

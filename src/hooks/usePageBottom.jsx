import { useState, useEffect } from "react";

const usePageBottom = () => {
  const [reachedBottom, setReachedBottom] = useState("false");
  const [topPosition, setTopPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const { offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const { scrollTop } = document.documentElement;
      const hasReachedButton = offsetHeight - (innerHeight + scrollTop) <= 10;
      setReachedBottom(hasReachedButton);
      setTopPosition(innerHeight + scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { reachedBottom, topPosition };
};

export default usePageBottom;

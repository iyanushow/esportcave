import { useEffect, useLayoutEffect, useState } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useResize() {
  const [size, setSize] = useState(0);

  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default useResize;

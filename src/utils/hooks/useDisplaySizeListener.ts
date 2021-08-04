import { useCallback, useEffect, useState } from "react";
import {
  displaySizeNames, sizeNumberByName
} from "../constants/displaySizeNames";

const useDisplaySizeListener = () => {
    const getSizeName = useCallback(
    (size: number): displaySizeNames =>
    size < sizeNumberByName.WEB ? "mobile" : "web",
    []
  );

  const handleResize = useCallback(
    (e: Event) => setDisplaySizeState(getSizeName(window.innerWidth)),
    [getSizeName]
  );

  const [displaySize, setDisplaySizeState] =
    useState<displaySizeNames>(getSizeName(window.innerWidth));

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return displaySize;
};

export default useDisplaySizeListener;

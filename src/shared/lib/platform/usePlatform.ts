import { useContext } from "preact/hooks";
import { PlatformContext } from "@/app/providers/PlatformProvider/PlatformProvider";

export const usePlatform = () => {
  const context = useContext(PlatformContext);
  if (!context) throw new Error("usePlatform need use in PlatformProvider");
  return context;
};

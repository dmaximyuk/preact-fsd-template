import {
  createContext,
  type ComponentChildren,
  type FunctionComponent,
} from "preact";
import { useEffect, useState } from "preact/hooks";

type PlatformType = "ios" | "android" | "desktop";

interface PlatformContextProps {
  platform: PlatformType;
  isTouchDevice: boolean;
}

export const PlatformContext = createContext<PlatformContextProps | undefined>(
  undefined,
);

interface PlatformProviderProps {
  children: ComponentChildren;
}

const detectPlatform = (): PlatformType => {
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  return "desktop";
};

const detectTouch = (): boolean =>
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

const PlatformProvider: FunctionComponent<PlatformProviderProps> = ({
  children,
}) => {
  const [platform, setPlatform] = useState<PlatformContextProps>({
    platform: "desktop",
    isTouchDevice: false,
  });

  useEffect(() => {
    const platformType = detectPlatform();
    const isTouch = detectTouch();

    document.documentElement.dataset.platform = platformType;

    setPlatform({
      platform: platformType,
      isTouchDevice: isTouch,
    });
  }, []);

  return (
    <PlatformContext.Provider value={platform}>
      {children}
    </PlatformContext.Provider>
  );
};

export default PlatformProvider;

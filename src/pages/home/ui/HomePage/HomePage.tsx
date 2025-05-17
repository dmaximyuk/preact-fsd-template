import type { FunctionComponent } from "preact";
import { useEffect } from "preact/hooks";

import { useTranslations } from "@/shared/lib/i18n";
import { usePlatform } from "@/shared/lib/platform";
import { useTheme } from "@/shared/lib/themes";

import { Title } from "@/shared/ui";
import { PostFeed } from "@/widgets";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const t = useTranslations();
  const platform = usePlatform();
  const theme = useTheme();

  useEffect(() => {
    console.log({ platform, theme });
  }, [platform, theme]);

  return (
    <div>
      <Title>{t("app.title")}</Title>
      <PostFeed />
    </div>
  );
};

export default HomePage;

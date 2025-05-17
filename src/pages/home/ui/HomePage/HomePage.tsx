import type { FunctionComponent } from "preact";

import { Title } from "@/shared/ui";
import { PostFeed } from "@/widgets";

import { useTranslations } from "@/shared/lib/i18n";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const t = useTranslations();

  return (
    <div>
      <Title>{t("app.title")}</Title>
      <PostFeed />
    </div>
  );
};

export default HomePage;

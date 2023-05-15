import { useTranslation } from "react-i18next";

import { SiteNameWrapper, SiteSubtitle, SiteTitle } from "./hero.styled";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <SiteNameWrapper>
      <SiteTitle>{t("pages.model.title.took")}</SiteTitle>
      <SiteSubtitle>Hongqi</SiteSubtitle>
    </SiteNameWrapper>
  );
};

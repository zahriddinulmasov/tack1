import { useTranslation } from "react-i18next";

export const HelpSupport = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t("pages.helpSupport")}</h1>
    </>
  );
};

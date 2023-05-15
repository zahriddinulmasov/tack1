import { useTranslation } from "react-i18next";

export const Company = () => {
  const {t} = useTranslation()
  return (
    <>
      <h1>{t("pages.company")}</h1>
    </>
  );
};

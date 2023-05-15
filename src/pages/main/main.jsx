import { useTranslation } from "react-i18next";

export const Main = () => {
  const {t} = useTranslation()
  return (
    <>
      <h1>{t("pages.main")}</h1>
    </>
  );
};

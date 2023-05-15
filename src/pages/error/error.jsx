import { useTranslation } from "react-i18next";

export const Error = () => {
  const {t} = useTranslation()
  return (
    <>
      <h1 style={{ color: "red"}}>{t("pages.error")}</h1>
    </>
  );
};

import { useTranslation } from "react-i18next";

export const Room = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("pages.room")}</h1>
    </>
  );
};

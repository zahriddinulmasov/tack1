import { useTranslation } from "react-i18next";

export const Contacts = () => {
  const {t} = useTranslation()
  return (
    <>
      <h1>{t("pages.contacts")}</h1>
    </>
  );
};

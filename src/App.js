import { TheMainWrapper } from "./App.style";
import { ScroolsToTop } from "./components/scrolls/scroolsToTop";
import { Language } from "./language/language";
import { CommonRoutes } from "./routes/commonRoutes";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: Language,
  lng: "RU",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <TheMainWrapper>
      <ScroolsToTop>
          <CommonRoutes />
      </ScroolsToTop>
    </TheMainWrapper>
  );
}

export default App;

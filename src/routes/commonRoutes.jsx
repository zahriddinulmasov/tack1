import { Route, Routes } from "react-router-dom";
import { Models } from "../pages/models/models";
import { Company } from "../pages/company/company";
import { Main } from "../pages/main/main";
import { Contacts } from "../pages/contacts/contacts";
import { HelpSupport } from "../pages/helpSupport/helpSupport";
import { Room } from "../pages/3dRoom/3dRoom";
import { Header } from "../containers/header/header";
import { Footer } from "../containers/footer/footer";

export const CommonRoutes = () => {
  return (
    <>
    <Header/>

      <Routes>
        <Route path="/" element={<Models />} />
        <Route path="/company" element={<Company />} />
        <Route path="/main" element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/3droom" element={<Room />} />
      </Routes>

      <Footer/>
    </>
  );
};

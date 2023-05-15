import { Route, Routes } from "react-router-dom";
import { Models } from "../pages/models/models";
import { Company } from "../pages/company/company";
import { Main } from "../pages/main/main";
import { Contacts } from "../pages/contacts/contacts";
import { HelpSupport } from "../pages/helpSupport/helpSupport";
import { Room } from "../pages/3dRoom/3dRoom";
import { Error } from "../pages/error/error";
import { LayoutMenu } from "../layout/layoutMenu";

export const CommonRoutes = () => {
  return (
    <>

      <Routes>
        <Route element={<LayoutMenu />}>
          <Route path="/" element={<Models />} />
          <Route path="/company" element={<Company />} />
          <Route path="/main" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/3droom" element={<Room />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

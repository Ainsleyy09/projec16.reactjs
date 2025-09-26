import { BrowserRouter, Route, Routes } from "react-router";
import Page from "./assets/Page/index";
import Books from "./assets/Page/page_catalog";
import Teams from "./assets/Page/page_team";
import Contacts from "./assets/Page/page_contact";
import Logins from "./assets/Page/page_login";
import Registers from "./assets/Page/page_register";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Page />} />
            <Route path="books" element={<Books />} />
            <Route path="teams" element={<Teams />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="logins" element={<Logins />} />
            <Route path="registers" element={<Registers />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

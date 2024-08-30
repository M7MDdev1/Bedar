import { Route, Routes } from "react-router-dom";
import Root from "./Pages/Root";
import AboutUs from "./Pages/AboutUs";
import Documents from "./Pages/Documents";
import ResearchesAndStudys from "./Pages/ResearchesAndStudys";
import JoinUs from "./Pages/JoinUs";
import ContactUs from "./Pages/ContactUs";
import SaidAboutUs from "./Pages/SaidAboutUs";
import Auth from "./Pages/Auth";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { useState } from "react";

function App() {
  const [SideBarVisibility, setSideBarVisibility] = useState<boolean>(false);

  return (
    <div className={"relative overflow-hidden h-screen"}>

      <NavBar
        SideBarVisibility={SideBarVisibility}
        setSideBarVisibility={setSideBarVisibility}
      />
      <SideBar
        visible={SideBarVisibility}
        setVisibility={setSideBarVisibility}
      />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/ResearchesAndStudys" element={<ResearchesAndStudys />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/SaidAboutUs" element={<SaidAboutUs />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;

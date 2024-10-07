import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Documents from "./Pages/Documents";
import ResearchesAndStudys from "./Pages/ResearchesAndStudys";
import JoinUs from "./Pages/JoinUs";
import ContactUs from "./Pages/ContactUs";
import SaidAboutUs from "./Pages/SaidAboutUs";
import Auth from "./Pages/Auth";
import NavBar from "./Container/NavBar";
import SideBar from "./Container/SideBar";
import { useState } from "react";
import NotFound from "./Pages/NotFound";
import Footer from "./Container/Footer";

function App() {
  const [SideBarVisibility, setSideBarVisibility] = useState<boolean>(false);

  return (

    <div className={"relative overflow-x-hidden font-bahij min-h-screen"}>

      <NavBar
        SideBarVisibility={SideBarVisibility}
        setSideBarVisibility={setSideBarVisibility}
      />
      <SideBar
        visible={SideBarVisibility}
        setVisibility={setSideBarVisibility}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/ResearchesAndStudys" element={<ResearchesAndStudys />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/SaidAboutUs" element={<SaidAboutUs />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

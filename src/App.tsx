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
import TeamLogin from "./Pages/TeamLogin";
import SingleLogin from "./Pages/SingleLogin";
import NotFound from "./Pages/NotFound";
import Footer from "./Container/Footer";
import Reports from "./Pages/Reports";
import Articles from "./Pages/Articles";
import Records from "./Pages/Records";
import InvestWithUs from "./Pages/InvestWithUs";
import OurInitiatives from "./Pages/OurInitiatives";

function App() {
  return (
    <div className="relative overflow-x-hidden font-bahij min-h-screen">
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/ResearchesAndStudys" element={<ResearchesAndStudys />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/SaidAboutUs" element={<SaidAboutUs />} />
        <Route path="/TeamLogin" element={<TeamLogin />} />
        <Route path="/SingleLogin" element={<SingleLogin />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Records" element={<Records />} />
        <Route path="/InvestWithUs" element={<InvestWithUs />} />
        <Route path="/OurInitiatives" element={<OurInitiatives />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

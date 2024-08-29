import { useState } from "react";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";

export default function Root() {
  const [SideBarVisibility, setSideBarVisibility] = useState<boolean>(false);


  return (
    <div className={"relative overflow-hidden h-screen"}>
      <NavBar 
      SideBarVisibility={SideBarVisibility}
      setSideBarVisibility={setSideBarVisibility}
      />
      <SideBar visible={SideBarVisibility} setVisibility={setSideBarVisibility}/>
      <h3>الصفحة الرئيسية !</h3>
    </div>
  );
}

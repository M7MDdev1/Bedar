import bedar from "../assets/Bedar.svg";
import SideBarItems from "../Components/SideBarItems";
import Links from '../data/SideBarList.json';
import { useState, useEffect } from 'react';
import { useSideBarStore } from "../store/useSideBarStore";

export default function SideBar() {
  const { visible, toggleVisibility } = useSideBarStore();
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted
  const AboutLinks = [Links[1]];

  useEffect(() => {
    setIsMounted(true); // Enable transitions after the component mounts
  }, []);

  return (
    <div
      className={`absolute flex z-50 w-full h-full top-0 flex-row-reverse ${
        visible ? "translate-x-0" : "translate-x-full"
      } ${isMounted ? "duration-300" : ""} h-screen bottom-0 right-0`}
    >
      <div className="w-full bg-secondary rounded-tl-[3.5rem] mt-[7rem]">
        <img src={bedar} alt="Bedar.svg" className="w-[10.5rem] m-auto" />
        <div className="relative">
          <div className="p-2 flex flex-col items-center transition-all duration-500 ease-in-out">
            {Links.map((link, index) => (
              <SideBarItems key={index} link={link} openAboutUs={openAboutUs} setOpenAboutUs={setOpenAboutUs} />
            ))}
          </div>
          <div
            className={`p-2 absolute inset-0 bg-secondary transition-all duration-500 ease-in-out ${
              !openAboutUs && "translate-x-full"
            }`}
          >
            {AboutLinks.map((link, index) => (
              <SideBarItems key={index} link={link} openAboutUs={openAboutUs} setOpenAboutUs={setOpenAboutUs} />
            ))}
          </div>
        </div>
      </div>
      <button className="bg-transparent w-full" onClick={toggleVisibility} />
    </div>
  );
}

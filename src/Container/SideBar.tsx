import bedar from "../assets/Bedar.svg";
import SideBarItems from "../Components/SideBarItems";
import Links from '../data/SideBarList.json'
import React, { useState } from 'react';

interface SideBarProps {
  visible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SideBar({ visible, setVisibility }: SideBarProps) {
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const AboutLinks = [Links[1]];
  return (
    <div
      className={`absolute flex z-50 w-full h-full top-0 flex-row-reverse ${
        !visible && " translate-x-full"
      } duration-100 h-screen bottom-0 right-0`}
    >
      <div className={"w-full bg-secondary rounded-tl-[3.5rem] mt-[7rem]"}>
        <div className={`p-2 flex flex-col items-center`}>
          <img src={bedar} alt="Bedar.svg" className="w-[10.5rem]" />

          {Links.map((link, index) => <SideBarItems key={index} link={link} openAboutUs={openAboutUs} setOpenAboutUs={setOpenAboutUs}/>)}
        </div>
        <div className={`p-2 w-6/12 flex z-1 flex-col items-center h-full mt-[7rem] bg-secondary rounded-tl-[3.5rem] transition-all duration-500 ease-in-out
            absolute top-0 right-0  ${!openAboutUs && "translate-x-full"}`}>
          <img src={bedar} alt="Bedar.svg" className="w-[10.5rem]" />

          {AboutLinks.map((link, index) => <SideBarItems key={index} link={link} openAboutUs={openAboutUs} setOpenAboutUs={setOpenAboutUs}/>)}
        </div>
      </div>
      <button
        className={`bg-transparent w-full`}
        onClick={() => setVisibility(false)}
      />
    </div>
  );
}

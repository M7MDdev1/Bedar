import bedar from "../assets/Bedar.svg";
import FastLinks from "../Components/FastLinks";

interface SideBarProps {
  visible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SideBar({ visible, setVisibility }: SideBarProps) {
  const Links = [
    {
      title: "الرئيسية",
      to: "/",
    },
    {
      title: "من نحن",
      to: "/AboutUs",
    },
    {
      title: "الوثائق",
      to: "/Documents",
    },
    {
      title: "بحوث ودراسات",
      to: "/ResearchesAndStudys",
    },
    {
      title: "ساهم معنا",
      to: "/JoinUs",
    },
    {
      title: "تواصل معنا",
      to: "/ContactUs",
    },
    {
      title: "قالوا عنا",
      to: "/SaidAboutUs",
    },
    {
      title: "تسجيل دخول",
      to: "/Auth",
    },
  ];
  return (
    <div
      className={`absolute flex w-full h-[97%]  flex-row-reverse ${
        !visible && " -z-10 translate-x-full"
      } duration-100 h-screen bottom-0 right-0 font-bahij`}
    >
      <div className={"w-full bg-secondary rounded-tl-[5.5rem]"}>
        <div className={"p-10 flex flex-col items-center"}>
          <img src={bedar} alt="Bedar.svg" className="w-[7.5rem]" />

          <FastLinks
            links={Links}
            className={
              "text-white h-72 flex flex-col justify-between items-center"
            }
          />
        </div>
      </div>
      <button
        className={`bg-transparent w-full`}
        onClick={() => setVisibility(false)}
      />
    </div>
  );
}

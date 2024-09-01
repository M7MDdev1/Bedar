import bedar from "../assets/Bedar.png";
import FastLinks from "../Components/FastLinks";
import SocailMediaButton from "../Components/SocailMediaButton";

export default function Footer() {
  const Links = [
    {
      title: "الرئيسية",
      to: "/",
    },
    {
      title: "عن الجمعية",
      to: "/AboutUs",
    },

    {
      title: "ساهم معنا",
      to: "/JoinUs",
    },
    {
      title: "قالوا عنا",
      to: "/SaidAboutUs",
    },
    {
      title: "تواصل معنا",
      to: "/ContactUs",
    },

  ];
  return (
    <div className=" bg-gradient-to-t from-gray-900 to-neutral-500 h-[26.625rem]">
      <img src={bedar} alt="Bedar.png" className={" w-[12.625rem] mx-auto"} />
      <div>
        <SocailMediaButton />

        <FastLinks
            links={Links}
            className={"text-white grid grid-cols-3 justify-items-center mt-3"}
          />
      </div>
    </div>
  );
}

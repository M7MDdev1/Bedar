import bedar from "../assets/Bedar.png";
import NavigationLinks from "../Components/NavigationLinks";
import SocailMediaButton from "../Components/SocialMediaButton";

export default function Footer() {
  const Links = [
    {
      title: "قالوا عنا",
      to: "/SaidAboutUs",
      className: "col-span-4",
    },

    {
      title: "عن الجمعية",
      to: "/AboutUs",
      className: "col-span-4",
    },

    {
      title: "الرئيسية",
      to: "/",
      className: "col-span-4",
    },
    {
      title: "ساهم معنا",
      to: "/JoinUs",
      className: "col-span-6 justify-self-end px-6",
    },

    {
      title: "تواصل معنا",
      to: "/ContactUs",
      className: "col-span-6 justify-self-start px-6",
    },
  ];
  return (
    <div className=" bg-gradient-to-t from-neutral-500 to-gray-900 h-[26.625rem] rounded-t-md">
      <img
        src={bedar}
        alt="Bedar.png"
        className={" w-[12.625rem] mx-auto -translate-y-3 object-cover"}
      />
      <div>
        <SocailMediaButton className={" -translate-y-6"} />

        <NavigationLinks
          links={Links}
          className={"grid grid-cols-12 justify-items-center mt-3 gap-y-9"}
        />
      </div>
    </div>
  );
}

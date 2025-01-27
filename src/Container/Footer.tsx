import bedar from "../assets/Bedar.png";
import bedarD from "../assets/BedarFooter.png";
import NavigationLinks from "../Components/NavigationLinks";
import SocailMediaFooter from "../Components/SocialMediaFooter";
import SocailMediaButton from "../Components/SocialMediaButton";
import Links from "../data/FooterLinks.json"
import { MdPhone, MdEmail, MdLocationPin, MdOutlineWhatsapp} from "react-icons/md";


export default function Footer() {
  return (
    <>
      <div className="sm:hidden bg-gradient-to-t from-neutral-500 to-gray-900 h-[26.625rem] rounded-t-md">
        <img
          src={bedar}
          alt="Bedar.png"
          className={
            " w-[12.625rem] mx-auto -translate-y-3 object-cover select-none"
          }
        />
        <div>
          <SocailMediaButton
            className={" -translate-y-6"}
            SocialMediaLinks={{
              twitter: "https://x.com/BedarYouth",
              instagram: "https://www.instagram.com/bedaryouth",
              youtube: "https://www.youtube.com/@BEDARYOUTH",
              linkedin:
                "https://www.linkedin.com/company/bedar-for-youth-development/",
            }}
          />

          <NavigationLinks
            links={Links["رابط"]}
            className={"grid grid-cols-12 justify-items-center mt-3 gap-y-9"}
          />
        </div>
      </div>

      <div className="hidden sm:flex h-[628px] bg-darkprimary flex-col items-center gap-4 mx-14 rounded-t-[32px] px-[50px] py-[30px]">
            <div className="flex justify-end w-full gap-[108px] ">
              <div className="w-[675px] flex gap-[145px] text-white text-right text-sm font-medium">
                {
                  Object.entries(Links).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-4 min-w-[75px]">
                      <h4 className="text-lg font-semibold">{key}</h4>
                      <div className="flex flex-col gap-5">
                        {value.map((link) => (
                          <a href={link.to}>{link.title}</a>
                        ))}
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="w-[300px] flex flex-col items-end gap-4">
                <div className="w-[154px] h-[121px]">
                  <img src={bedarD}/>
                </div>
                <p className="text-right text-sm/9 font-bahij text-white font-medium">
                  جمعية  بدار  لتنمية  الشباب  جمعية أهلية  تحت 
                  إشراف وزارة  الموارد  البشرية و التنمية  الاجتماعية 
                </p>
                <div>
                  <SocailMediaFooter SocialMediaLinks={{
                    twitter: "",
                    linkedin: "",
                    youtube: "",
                    snapchat: "",
                    instagram: ""
                  }} />
                </div>
              </div>
            </div>

            <div className="border border-solid border-white w-[1120px] mt-4"></div>

            <div className="flex flex-col gap-6 text-white text-center">
              <h3 className="text-lg font-medium">نحن في خدمتك دائما ، يمكنك التواصل معنا عبر</h3>
              <div className="flex justify-between gap-9">
                <div className="flex gap-2">
                  <div className="text-right">
                    <p>واتساب</p>
                    <p>+96650481022 </p>
                  </div>
                  <MdOutlineWhatsapp className="w-10 h-10 border-8 bg-white text-darkprimary rounded-full" />
                </div>
                <div className="flex gap-2">
                  <div className="text-right">
                    <p>العنوان</p>
                    <p>جازان، حي الشاطئ </p>
                  </div>
                  <MdLocationPin className="w-10 h-10 border-8 bg-white text-darkprimary rounded-full" />
                </div>
                <div className="flex gap-2">
                  <div className="text-right">
                    <p>الهاتف</p>
                    <p>0173213139</p>
                  </div>
                  <MdPhone className="w-10 h-10 border-8 bg-white text-darkprimary rounded-full" />
                </div>
                <div className="flex gap-2">
                  <div className="text-right">
                    <p>البريد الإلكتروني</p>
                    <p>info@bcharity.org</p>
                  </div>
                  <MdEmail className="w-10 h-10 border-8 bg-white text-darkprimary rounded-full" />
                </div>
              </div>
              <p className="text-sm font-medium">جميع الحقوق محفوظة لجمعية بدار لتنمية الشباب 2025 ©</p>
            </div>
      </div>
    </>
  );
}

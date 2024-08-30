import { Link } from "react-router-dom";
import bedar from "../assets/Bedar.svg";

interface SideBarProps {
  visible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SideBar({ visible, setVisibility }: SideBarProps) {
  return (
    <div
      className={`absolute flex w-full h-[97%]  flex-row-reverse ${
        !visible && " -z-10 translate-x-full"
      } duration-100 h-screen bottom-0 right-0 font-bahij`}
    >
      <div className={"w-full bg-secondary rounded-tl-[5.5rem]"}>
        <div className={"p-10 flex flex-col items-center"}>
          <img src={bedar} alt="Bedar.svg" className="w-[7.5rem]" />

          <ul
            className={
              "text-white h-72 flex flex-col justify-between items-center"
            }
          >
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/AboutUs">من نحن</Link>
            </li>
            <li>
              <Link to="/Documents">الوثائق</Link>
            </li>
            <li>
              <Link to="/ResearchesAndStudys">بحوث ودراسات</Link>
            </li>
            <li>
              <Link to="/JoinUs">ساهم معنا</Link>
            </li>
            <li>
              <Link to="/ContactUs">تواصل معنا</Link>
            </li>
            <li>
              <Link to="/SaidAboutUs">قالوا عنا</Link>
            </li>
            <li>
              <Link to="/Auth">تسجيل دخول</Link>
            </li>
          </ul>
        </div>
      </div>
      <button
        className={`bg-transparent w-full`}
        onClick={() => setVisibility(false)}
      />
    </div>
  );
}

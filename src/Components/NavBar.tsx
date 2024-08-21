import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-around flex-row-reverse bg-blue-400 p-2">
      <Link to="/">الرئيسية</Link>
      <Link to="/AboutUs">من نحن</Link>
      <Link to="/Documents">الوثائق</Link>
      <Link to="/ResearchesAndStudys">بحوث ودراسات</Link>
      <Link to="/JoinUs">ساهم معنا</Link>
      <Link to="/ContactUs">تواصل معنا</Link>
      <Link to="/SaidAboutUs">قالوا عنا</Link>
      <Link to="/Auth">تسجيل دخول</Link>
    </div>
  );
}
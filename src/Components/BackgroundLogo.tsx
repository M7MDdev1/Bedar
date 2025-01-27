import logo from "../assets/BackLogo.png";
export default function BackgroundLogo() {
  return (
    <div className="h-80 overflow-hidden flex justify-center sm:hidden">
      <img src={logo} className="w-[450px] object-cover object-bottom"></img>
    </div>
  );
}

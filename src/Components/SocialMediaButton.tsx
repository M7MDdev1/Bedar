import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
interface SocialMediaButtonProps extends React.HTMLAttributes<HTMLDivElement>{

}
export default function SocailMediaButton({className}:SocialMediaButtonProps) {
  return (
    <div className={`flex justify-center -translate-y-5 ${className}`}>
      <FaXTwitter color="white" className="mr-3 text-2xl" />
      <FaInstagram color="white"  className="mr-3  text-2xl" />
      <FaYoutube color="white"  className="mr-3  text-2xl" />
      <FaLinkedin color="white"  className="mr-3  text-2xl" />
    </div>
  );
}

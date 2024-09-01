import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function SocailMediaButton() {
  return (
    <div className="flex justify-center">
      <FaXTwitter color="white" size={24} className="mr-3" />
      <FaInstagram color="white" size={24} className="mr-3" />
      <FaYoutube color="white" size={24} className="mr-3" />
      <FaLinkedin color="white" size={24} className="mr-3" />
    </div>
  );
}

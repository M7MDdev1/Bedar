import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
interface SocialMediaButtonProps extends React.HTMLAttributes<HTMLDivElement>{
  SocialMediaLinks: {
    twitter : string;
    instagram : string;
    youtube : string;
    linkedin : string;
  }
}
export default function SocailMediaButton({className, SocialMediaLinks}:SocialMediaButtonProps) {
  return (
    <div className={`flex justify-center -translate-y-5 ${className}`}>
      <a href={SocialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
        <FaXTwitter color="white" className="mr-3 text-2xl" />
      </a>
      <a href={SocialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
        <FaInstagram color="white"  className="mr-3  text-2xl" />
      </a>
      <a href={SocialMediaLinks.youtube} target="_blank" rel="noopener noreferrer">
        <FaYoutube color="white"  className="mr-3  text-2xl" />
      </a>
      <a href={SocialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin color="white"  className="mr-3  text-2xl" />
      </a>
    </div>
  );
}

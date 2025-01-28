import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

interface SocialMediaButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  SocialMediaLinks: {
    twitter: string;
    linkedin: string;
    youtube: string;
    snapchat: string;
    instagram: string;
  };
}
export default function SocailMediaFooter({
  className,
  SocialMediaLinks,
}: SocialMediaButtonProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={SocialMediaLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoInstagram className="bg-white text-primary rounded-full text-[30px] border-[5px] border-white"/>
      </a>
      <a
        href={SocialMediaLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSnapchatGhost className="bg-white text-primary rounded-full text-[30px] border-[5px] border-white"/>
        </a>
      <a
        href={SocialMediaLinks.youtube}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="bg-white text-primary rounded-full text-[30px] border-[5px] border-white"/>
        </a>
      <a
        href={SocialMediaLinks.snapchat}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TiSocialLinkedin className="bg-white text-primary rounded-full text-[30px] border-[5px] border-white"/>
        </a>
      <a
        href={SocialMediaLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterXFill className="bg-white text-primary rounded-full text-[30px] border-[5px] border-white"/>
        </a>
    </div>
  );
}

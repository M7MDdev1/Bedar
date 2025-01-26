import twitter from "../assets/socialIcons/twitter.png";
import linkedin from "../assets/socialIcons/Linkdn.png";
import youtube from "../assets/socialIcons/youtube.png";
import snapchat from "../assets/socialIcons/snapchat.png";
import instagram from "../assets/socialIcons/instagram.png";

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
        <img src={twitter} alt="" />
      </a>
      <a
        href={SocialMediaLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="" />
        </a>
      <a
        href={SocialMediaLinks.youtube}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={youtube} alt="" />
        </a>
      <a
        href={SocialMediaLinks.snapchat}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={snapchat} alt="" />
        </a>
      <a
        href={SocialMediaLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="" />
        </a>
    </div>
  );
}

import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
interface SocialMediaButtonProps extends React.HTMLAttributes<HTMLDivElement>{
  links: {
    twitter ?: string;
    instagram ?: string;
    youtube ?: string;
    linkedin ?: string;
  }
}
export default function SocailMediaButton({className, links}:SocialMediaButtonProps) {
  return (
    <div className={`flex justify-center -translate-y-5 ${className}`}>
      {links.twitter && (
        <a href={links.twitter} target="_blank" rel="noopener noreferrer">
          <FaXTwitter color="white" className="mr-3 text-2xl" />
        </a>
      )}
      {links.instagram && (
        <a href={links.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram color="white"  className="mr-3  text-2xl" />
        </a>
      )}
      {links.youtube && (
        <a href={links.youtube} target="_blank" rel="noopener noreferrer">
          <FaYoutube color="white"  className="mr-3  text-2xl" />
        </a>
      )}
      {links.linkedin && (
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin color="white"  className="mr-3  text-2xl" />
        </a>
      )}
    </div>
  );
}

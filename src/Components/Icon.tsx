import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

interface IiconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  Variant: "Twitter" | "Instagram" | "Linkedin" | "Youtube" | "Menu";
}

const iconMap = {
  Twitter: FaXTwitter,
  Instagram: FaInstagram,
  Linkedin: FaLinkedin,
  Youtube: FaYoutube,
  Menu: FiMenu,
};

export default function Icon({
  Variant,
  className,
  href,
  target,
  color,
}: IiconProps) {
  const IconShape = iconMap[Variant];

  const icon = <IconShape color={color} className={className} />;

  return href ? (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={className}
    >
      {icon}
    </a>
  ) : (
    icon
  );
}

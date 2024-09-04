import { IconType } from "react-icons";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

interface IiconProps extends IconType{
  Variant: "Twitter" | "Instagram" | "Linkedin" | "Youtube" | "Menu";
  event?: ()=> {};
}
export default function Icon({ Variant, event }: IiconProps) {
  let IconShape;

  switch (Variant) {
    case "Twitter":
      IconShape = FaXTwitter;
      break;
    case "Instagram":
      IconShape = FaInstagram;
      break;
    case "Linkedin":
      IconShape = FaLinkedin;
      break;
    case "Youtube":
      IconShape = FaYoutube;
      break;
    case "Menu":
      IconShape = FiMenu;
      break;

    default:
      return <></>;
  }

  return <IconShape onClick={event} className={`${event && "cursor-pointer"}`}/>;
}

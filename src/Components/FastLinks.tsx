import { Link } from "react-router-dom";

interface FastLinksProps extends React.HTMLAttributes<HTMLUListElement> {
  links: {
    title: string;
    to: string;
  }[];
}

export default function FastLinks({ links, className }: FastLinksProps) {
  return (
    <ul className={className}>
      {links.map((link) => {
        return <Link to={link.to}>{link.title}</Link>;
      })}
      <li></li>
    </ul>
  );
}

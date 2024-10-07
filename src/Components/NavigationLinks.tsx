  import { Link } from "react-router-dom";

  interface LinkItem {
    title: string;
    to: string;
    className?: string;
  }
  
  interface NavigationLinksProps extends React.HTMLAttributes<HTMLUListElement> {
    links: LinkItem[];
  }

  export default function NavigationLinks({ links, className }: NavigationLinksProps) {
    return (
      <div className={`text-white ${className}`}>
        {links.map((link,i) => {
          return <Link key={i} to={link.to} className={link.className}>{link.title}</Link>;
        })}
      </div>
    );
  }

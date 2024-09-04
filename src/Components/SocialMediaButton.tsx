import Icon from "./Icon";

interface SocialMediaLinks {
  twitter: string;
  instagram: string;
  youtube: string;
  linkedin: string;
}

interface SocialMediaButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  SocialMediaLinks: SocialMediaLinks;
}

const socialMediaVariants: Record<keyof SocialMediaLinks, "Twitter" | "Instagram" | "Youtube" | "Linkedin"> = {
  twitter: "Twitter",
  instagram: "Instagram",
  youtube: "Youtube",
  linkedin: "Linkedin",
};

export default function SocialMediaButton({
  className,
  SocialMediaLinks,
}: SocialMediaButtonProps) {
  return (
    <div className={`flex justify-center -translate-y-5 ${className}`}>
      {Object.entries(SocialMediaLinks).map(([key, url]) => (
        <Icon
          key={key}
          Variant={socialMediaVariants[key as keyof typeof socialMediaVariants]}
          color="white"
          className="mr-3 text-2xl"
          target="_blank"
          href={url}
        />
      ))}
    </div>
  );
}

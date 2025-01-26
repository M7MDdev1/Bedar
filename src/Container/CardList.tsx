import { FaEye } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import Card from "../Components/Card";

export default function CardList() {
  const CardData = [
    {
      Icon: PiSuitcaseSimpleLight,
      title: "قضيتنا",
      description: `المواطنة الصالحة من خلال تمكين الشباب والمساهمة في تأهيل وتطوير قدراتهم ليكونوا مبادرين  وفاعلين  و مساهمين  في  تنمية  المجتمع.`,
    },
    {
      Icon: LuMail,
      title: "رسالتنا",
      description:
        "نموذج متميز في تأهيل وتمكين الشباب لإحداث أثر مجتمعي مستدام",
    },
    {
      Icon: FaEye,
      title: "رؤيتنا",
      description: `جمعية شبابية تعمل على تمكين وتأهيل الشباب ليكونوا قادرين على إحداث
        أثر مجتمعي مستدام من خلال مبادرات نوعية وفقًا لأحدث الممارسات الاحترافية`,
    },
  ];

  return (
    <div className="flex sm:flex-row flex-col justify-center items-center gap-12 pt-10">
      {CardData.map((card, index) => (
        <Card
          key={index}
          icon={card.Icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

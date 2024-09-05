import { FaEye} from 'react-icons/fa';
import { LuMail } from "react-icons/lu";
import { PiHandbagLight } from "react-icons/pi";
import Card from '../Components/Card';

export default function CardList() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 py-10">
      <Card 
        icon={PiHandbagLight} 
        title="قضيتنا" 
        description="انطلاقا من حرص المملكة العربية السعودية وإيمانها
          الراسخ بدور الشباب في تنمية مجتمعاتهم وتحقيق النمو الحضاري
          والرقي الاجتماعي ولما تحتضنه منطقة جازان من كوادر شبابية مبادرة
          وفاعلة, انبثقت فكرة جمعية بدار لتنمية الشباب لتكون إحدى منصات
          المبادرات الشبابية التي تهدف لرعاية وتشجيع المبادرات المجتمعية
          وغرس مفهوم المواطنة الصالحة والإسهام في تحقيق رؤية المملكة ٢٠٣٠م ."
      />
      <Card 
        icon={LuMail} 
        title="رسالتنا" 
        description="نموذج متميز في تأهيل وتمكين الشباب لإحداث أثر مجتمعي مستدام"
      />
      <Card 
        icon={FaEye} 
        title="رؤيتنا" 
        description="جمعية شبابية تعمل على تمكين وتأهيل الشباب ليكونوا قادرين على إحداث
          أثر مجتمعي مستدام من خلال مبادرات نوعية وفقًا لأحدث الممارسات الاحترافية"
      />
    </div>
  );
}
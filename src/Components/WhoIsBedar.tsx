import AboutUsCard from "../Container/AboutUsCard";

export default function WhoIsBedar() {
  return (
    <div className="bg-custom-radial h-[40rem]">
      <h3 className="text-2xl font-bold text-end mx-8">من هي بدار ؟</h3>
      <img src="assets\Line.png" alt="Line" className="w-36 ml-auto mx-6" />
      <AboutUsCard bedarLogo paragraph={">انطلاقا من حرص المملكة العربية السعودية وإيمانها الراسخ بدور الشباب في تنمية مجتمعاتهم وتحقيق النمو الحضاري والرقي الاجتماعي ولما تحتضنه منطقة جازان من كوادر شبابية مبادرة وفاعلة, انبثقت فكرة جمعية بدار لتنمية الشباب لتكون إحدى منصات المبادرات الشبابية التي تهدف لرعاية وتشجيع المبادرات المجتمعية وغرس مفهوم المواطنة الصالحة والإسهام في تحقيق رؤية المملكة ٢٠٣٠م ."}/>
    <AboutUsCard className="relative text-base mt-8" pclassName="-translate-y-7" paragraph={"جمعية بدار لتنمية الشباب بمنطقة جازان جمعية أهلية تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية ."}>
    <h3 className="text-2xl font-bold text-end absolute -translate-x-1/2 top-0 left-[50%] pt-2">قضيتنا</h3>
        <img src="assets\Sharta.png"/>
    </AboutUsCard>
    </div>

  )
}

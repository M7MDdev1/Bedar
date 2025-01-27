import BedarInNumbersCard from "./Bedar-in-numbers-card";

export default function BedarInNumbers() {
  return (
    <div dir="rtl" className="hidden sm:block h-80 bg-[#6866651A] mb-40">
        <h1 className="text-[#6D501F] text-5xl leading-[9rem] font-semibold text-center">بدار في ارقام</h1>
        <p className="text-[#6D501F] text-2xl text-center">أرقام تعكس التزامنا بالتميز ونتائج تؤكد تفانينا.</p>
        <div className="flex justify-center items-center gap-x-2 mt-9">
            <BedarInNumbersCard count="+5000" title="عدد المستفيدين"/>
            <BedarInNumbersCard title={"عدد المتطوعين"} count={"+ 1408"}/>
            <BedarInNumbersCard title={"عدد البـــرامج"} count={"+ 40"}/>
            <BedarInNumbersCard title={"عدد الشراكـات"} count={"+ 20"}/>
        </div>
    </div>
  )
}

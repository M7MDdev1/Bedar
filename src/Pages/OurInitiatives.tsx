import HeaderImage from "../Components/Header-Image";
import Image from "../assets/OurInitiatives.png";
import data from "../data/OurInitiatives.json";

export default function OurInitiatives () {
    return (
        <div>
            <HeaderImage 
                src={Image}
                Title="مبادراتـنـا"
                subTitle=" بدار في أرقام" 
                className="mx-auto mb-[208px] "
            />

            <div className="flex justify-center grid-cols-2 gap-x-[10%] gap-y-[77px] px-[138px] mb-[208px] flex-wrap">
                {data.map((card) => (
                    <div className="w-[521px] h-[604px] flex flex-col rounded-tl-[40px] rounded-br-[40px] pt-12 items-center shadow-xl relative overflow-hidden">
                        <h2 className="text-[40px] font-bold text-darkprimary">{card.title}</h2>
                        <div className="w-[320px] h-[275px] overflow-hidden flex justify-center items-center"><img src={`../src/assets/Initiatives/${card.img}`} className="object-contain w-full" /></div>
                        <div className="absolute bottom-0 w-full h-[192px] bg-[#E4D0B0] flex items-center justify-evenly">
                            <div className="flex flex-col items-center text-darkprimary">
                                <p className="text-[20px] font-bold">المبــــلغ</p>
                                <h3 className="text-[48px] font-bold">{card.cost}</h3>
                                <p className="text-[16px]">الف ريال </p>
                            </div>
                            <div className="flex flex-col items-center text-darkprimary">
                                <p className="text-[20px] font-bold">المستفيدون</p>
                                <h3 className="text-[48px] font-bold">{card.beneficiaries}</h3>
                                <p className="text-[16px]">شاب وشابة</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


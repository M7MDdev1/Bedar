import img1 from "../assets/Researches/1.webp";
import img2 from "../assets/Researches/2.webp";
import img3 from "../assets/Researches/3.webp";
import img4 from "../assets/Researches/4.webp";
import img5 from "../assets/Researches/5.webp";
import img6 from "../assets/Researches/6.webp";
import img7 from "../assets/Researches/7.webp";

export default function ResearchesAndStudys() {
  return (
    <div className="flex flex-col gap-16 items-center px-9 mb-[117px]">
      
      {/* الدراسات */}
      <div className="flex flex-col gap-[89px] items-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="h-[2px] w-[430px] bg-primary"></div>
            <h2 className="px-4 text-[48px] font-semibold text-primary ">الدراسات</h2>
            <div className="h-[2px] w-[430px] bg-primary"></div>
          </div>
          <p className="text-2xl">دليل الدراسات المتميزة والنوعية</p>
        </div>
        <div className="flex gap-[30px]">
          <div className="p-5 border-2 border-dashed border-purple-500 rounded-lg">
            <div className="flex flex-col gap-7 items-center pb-6 rounded-br-[30px] shadow-xl overflow-hidden">
              <div className="w-[396px] h-[313px] overflow-hidden rounded-tl-[30px]">
              <img src={img1} className="object-cover h-full w-full" />
              </div>
              <a href="" className="flex items-center justify-center w-[176px] rounded-lg bg-primary text-white px-7 py-2">تنزيل</a>
              <p className="text-primary">دليل برامج إدارة المشاريع</p>
            </div>
          </div>
          <div className="p-5 border-2 border-dashed border-purple-500 rounded-lg">
            <div className="flex flex-col gap-7 items-center pb-6 rounded-br-[30px] shadow-xl overflow-hidden">
              <div className="w-[396px] h-[313px] overflow-hidden rounded-tl-[30px]">
              <img src={img2} className="object-cover h-full w-full" />
              </div>
              <a href="" className="flex items-center justify-center w-[176px] rounded-lg bg-primary text-white px-7 py-2">تنزيل</a>
              <p className="text-primary">دليل برامج إدارة المشاريع</p>
            </div>
          </div>
          <div className="p-5 border-2 border-dashed border-purple-500 rounded-lg">
            <div className="flex flex-col gap-7 items-center pb-6 rounded-br-[30px] shadow-xl overflow-hidden">
              <div className="w-[396px] h-[313px] overflow-hidden rounded-tl-[30px]">
              <img src={img3} className="object-cover h-full w-full" />
              </div>
              <a href="" className="flex items-center justify-center w-[176px] rounded-lg bg-primary text-white px-7 py-2">تنزيل</a>
              <p className="text-primary">دليل برامج إدارة المشاريع</p>
            </div>
          </div>
        </div>
        <a href="" className="px-11 py-4 bg-primary text-white rounded-[10px]">اطلع على المزيد من الدراسات</a>
      </div>

      {/* الأدلــة */}
      <div className="flex flex-col gap-[89px] items-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="h-[2px] w-[430px] bg-primary"></div>
            <h2 className="px-4 text-[48px] font-semibold text-primary ">الأدلــة</h2>
            <div className="h-[2px] w-[430px] bg-primary"></div>
          </div>
          <p className="text-2xl">دليل الأدلــة المتميزة والنوعية</p>
        </div>
        <div className="flex gap-[30px]">
          <div className="p-5 border-2 border-dashed border-purple-500 rounded-lg">
            <div className="flex flex-col gap-7 items-center pb-6 rounded-br-[30px] shadow-xl overflow-hidden">
              <div className="w-[396px] h-[313px] overflow-hidden rounded-tl-[30px]">
              <img src={img4} className="object-cover h-full w-full" />
              </div>
              <a href="" className="flex items-center justify-center w-[176px] rounded-lg bg-primary text-white px-7 py-2">تنزيل</a>
              <p className="text-primary">دليل برامج إدارة المشاريع</p>
            </div>
          </div>
          <div className="p-5 border-2 border-dashed border-purple-500 rounded-lg">
            <div className="flex flex-col gap-7 items-center pb-6 rounded-br-[30px] shadow-xl overflow-hidden">
              <div className="w-[396px] h-[313px] overflow-hidden rounded-tl-[30px]">
              <img src={img5} className="object-cover h-full w-full" />
              </div>
              <a href="" className="flex items-center justify-center w-[176px] rounded-lg bg-primary text-white px-7 py-2">تنزيل</a>
              <p className="text-primary">دليل برامج إدارة المشاريع</p>
            </div>
          </div>
          <div className="p-5 border-2 border-dashed border-purple-500 rounded-lg">
            <div className="flex flex-col gap-7 items-center pb-6 rounded-br-[30px] shadow-xl overflow-hidden">
              <div className="w-[396px] h-[313px] overflow-hidden rounded-tl-[30px]">
              <img src={img6} className="object-cover h-full w-full" />
              </div>
              <a href="" className="flex items-center justify-center w-[176px] rounded-lg bg-primary text-white px-7 py-2">تنزيل</a>
              <p className="text-primary">دليل برامج إدارة المشاريع</p>
            </div>
          </div>
        </div>
        <a href="" className="px-11 py-4 bg-primary text-white rounded-[10px]">اطلع على المزيد من الدراسات</a>
      </div>

      {/* المقاييس */}
      <div className="flex flex-col gap-[89px] items-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="h-[2px] w-[430px] bg-primary"></div>
            <h2 className="px-4 text-[48px] font-semibold text-primary ">المقاييس</h2>
            <div className="h-[2px] w-[430px] bg-primary"></div>
          </div>
          <p className="text-2xl">دليل المقاييس المتميزة والنوعية</p>
        </div>
        <div className="flex gap-[30px]">
          <div className="p-5 border-2 border-dashed border-purple-500 rounded-lg">
            <div className="flex flex-col gap-7 items-center pb-6 rounded-br-[30px] shadow-xl overflow-hidden">
              <div className="w-[396px] h-[313px] overflow-hidden rounded-tl-[30px]">
              <img src={img7} className="object-cover h-full w-full" />
              </div>
              <a href="" className="flex items-center justify-center w-[176px] rounded-lg bg-primary text-white px-7 py-2">تنزيل</a>
              <p className="text-primary">دليل برامج إدارة المشاريع</p>
            </div>
          </div>
          <div className="p-5 border-2 border-dashed border-purple-500 rounded-lg">
            <div className="flex flex-col gap-7 items-center pb-6 rounded-br-[30px] shadow-xl overflow-hidden">
              <div className="w-[396px] h-[313px] overflow-hidden rounded-tl-[30px]">
              <img src={img7} className="object-cover h-full w-full" />
              </div>
              <a href="" className="flex items-center justify-center w-[176px] rounded-lg bg-primary text-white px-7 py-2">تنزيل</a>
              <p className="text-primary">دليل برامج إدارة المشاريع</p>
            </div>
          </div>
          <div className="p-5 border-2 border-dashed border-purple-500 rounded-lg">
            <div className="flex flex-col gap-7 items-center pb-6 rounded-br-[30px] shadow-xl overflow-hidden">
              <div className="w-[396px] h-[313px] overflow-hidden rounded-tl-[30px]">
              <img src={img7} className="object-cover h-full w-full" />
              </div>
              <a href="" className="flex items-center justify-center w-[176px] rounded-lg bg-primary text-white px-7 py-2">تنزيل</a>
              <p className="text-primary">دليل برامج إدارة المشاريع</p>
            </div>
          </div>
        </div>
        <a href="" className="px-11 py-4 bg-primary text-white rounded-[10px]">اطلع على المزيد من الدراسات</a>
      </div>
    </div>
  );
}

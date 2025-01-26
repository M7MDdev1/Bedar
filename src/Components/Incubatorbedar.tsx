export default function Incubatorbedar() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:block">
        <div
          style={{
            backgroundImage: `url('/assets/Incubatorbedar.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "90%",
            height: "700px",
          }}
          className="mx-auto relative flex items-center"
        >
                 <h1 className="text-[#6D501F] absolute top-0 left-0 right-0 text-5xl leading-[9rem] font-semibold text-center">
          حاضنة بدار
        </h1>
          <div className="absolute right-0 bottom-12 mx-28 text-white flex flex-col items-center">
            <p className="text-5xl font-semibold  text-right self-end">فكرتك</p>
            <p className="text-5xl font-semibold leading-[9rem]">
              ! تصنع الفرق
            </p>
            <a href="https://incubatorbedar.org/" className="w-44 block border text-center border-[#BD8A3D] rounded-xl text-[#BD8A3D] py-[0.375rem] px-[1.8125rem] bg-white">سجل الان</a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={
          "w-[77%] bg-[#65006D] mx-auto text-white sm:hidden h-[29.25rem] text-5xl rounded-lg flex flex-col items-center justify-around pt-24 my-24 font-bold mb-5"
        }
      >
        <p className="text-[#00B082]">فكرتك</p>
        <p>تصنع</p>
        <p>! الفرق</p>
        <a
          href="https://incubatorbedar.org/"
          className={
            "text-[#00B082] text-2xl outline font-normal outline-1 py-1 px-4 rounded-lg"
          }
        >
          سجل الآن
        </a>
      </div>
    </>
  );
}

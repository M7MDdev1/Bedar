import OurValuesImg from "/assets/Values/OurValues.png"

export default function OurValues() {
  return (
    <div className="relative font-bold flex flex-col justify-center items-center mt-16">
            <h3 className="text-2xl font-bold text-end absolute -translate-x-1/2 top-0 left-[50%] pt-2 text-black">قيمنا</h3>
        <img src="assets\Sharta.png"/>


        <img src={OurValuesImg} alt="" className="w-72"/>
    </div>
  )
}

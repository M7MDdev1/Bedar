
export default function BedarInNumbersCard({title,count}) {
  return (
    <div className="bg-[#E4D0B0] rounded-tl-[2.5rem] rounded-br-[2.5rem] w-80 h-56">
        <h1 className="text-[#BD8A3D] text-center text-5xl font-semibold mt-14 mb-2">{count}</h1>
        <p className="text-[#BD8A3D] text-center text-2xl">{title}</p>
    </div>
  )
}

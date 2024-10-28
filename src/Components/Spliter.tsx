interface ISpliterProps{
    title:string
    LineWidth?: "Short" | "Long"
}
export default function Spliter({title,LineWidth}:ISpliterProps) {
  return (
    <div className="flex justify-between items-center -translate-y-4">
    <span className={`${LineWidth === "Short" ? "w-20" : "w-[9rem]"}  bg-black h-[1px] `}/>
    <h3 className="text-2xl font-bold w-fit text-center">{title}</h3>
    <span className={`${LineWidth === "Short" ? "w-20" : "w-[9rem]"}  bg-black h-[1px] `}/>


    
</div>
  )
}

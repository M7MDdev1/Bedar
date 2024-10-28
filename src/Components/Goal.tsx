
interface IGoalProps{
    title:string
    description:string
    variation:string
}
export default function Goal({title,description,variation}:IGoalProps) {
  return (
    <div className="flex flex-col justify-center items-center font-bold">
        <img src={variation} alt="Boost" className="h-14" />
        <p className="text-[#C58F35]">{title}</p>
        <p>{description}</p>
    </div>
  )
}

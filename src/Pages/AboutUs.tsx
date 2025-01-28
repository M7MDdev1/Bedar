import Empowerment from "../Components/Empowerment";
import Goals from "../Components/OurGoals";
import OurGoalsDT from "../Components/OurGoalsDT";
import OurMessageDT from "../Components/OurMessageDT";
import OurValues from "../Components/OurValues";
import OurValuesDT from "../Components/OurValuesDT";
import WhoIsBedar from "../Components/WhoIsBedar";
import WhoIsBedarDT from "../Components/WhoIsBedarDT";

export default function AboutUs() {
  return (
    <>
      <div className="sm:hidden">
        <WhoIsBedar />
        <Goals />
        <Empowerment />
        <OurValues />
      </div>
      <div className="hidden sm:block mb-[86px]">
        <WhoIsBedarDT />
        <OurMessageDT />
        <OurGoalsDT />
        <OurValuesDT />
      </div>
    </>
  );
}

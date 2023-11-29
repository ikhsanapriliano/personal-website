import gearSpin from "../assets/gear-spin.gif";
import gearStatic from "../assets/gear-spin-static.gif";
import { useAppSelector } from "../hooks/hooks";

function Gear() {
  const { isToggle } = useAppSelector((state) => state.toggle);

  return (
    <div className={`h-screen xs:hidden sm:inline-block absolute top-0 left-0 right-0`}>
      <img className={`absolute w-64 sm:top-[-150px] sm:right-[10px] lg:top-[-95px] lg:right-[45px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-48 sm:right-[-90px] top-[35px] lg:right-[20px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute lg:w-auto sm:top-[-190px] sm:right-[-190px] lg:top-[-170px] lg:right-[-170px] `} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-64 sm:top-[-150px] sm:left-[10px] lg:top-[-95px] lg:left-[45px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-48 sm:left-[-90px] top-[35px] lg:left-[20px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute lg:w-auto sm:top-[-190px] sm:left-[-190px] lg:top-[-170px] lg:left-[-170px] `} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-64 sm:bottom-[-150px] sm:left-[10px] lg:bottom-[-95px] lg:left-[45px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-48 sm:left-[-90px] bottom-[35px] lg:left-[20px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute lg:w-auto sm:bottom-[-190px] sm:left-[-190px] lg:bottom-[-170px] lg:left-[-170px] `} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-64 sm:bottom-[-150px] sm:right-[10px] lg:bottom-[-95px] lg:right-[45px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-48 sm:right-[-90px] bottom-[35px] lg:right-[20px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute lg:w-auto sm:bottom-[-190px] sm:right-[-190px] lg:bottom-[-170px] lg:right-[-170px] `} src={isToggle ? gearSpin : gearStatic} />
    </div>
  );
}

export default Gear;

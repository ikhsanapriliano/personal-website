import gearSpin from "../assets/gear-spin.gif";
import gearStatic from "../assets/gear-spin-static.gif";
import { useAppSelector } from "../hooks/hooks";

function Gear() {
  const { isToggle } = useAppSelector((state) => state.toggle);

  return (
    <div className={`h-screen absolute  top-0 left-0 right-0`}>
      <img className={`absolute w-64 top-[-95px] left-[45px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-48 top-[35px] left-[20px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute top-[-170px] left-[-170px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-64 top-[-95px] right-[45px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-48 top-[35px] right-[20px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute top-[-170px] right-[-170px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-64 bottom-[-95px] left-[45px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-48 bottom-[35px] left-[20px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute bottom-[-170px] left-[-170px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-64 bottom-[-95px] right-[45px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute w-48 bottom-[35px] right-[20px]`} src={isToggle ? gearSpin : gearStatic} />
      <img className={`absolute bottom-[-170px] right-[-170px]`} src={isToggle ? gearSpin : gearStatic} />
    </div>
  );
}

export default Gear;

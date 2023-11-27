import { useAppSelector } from "../hooks/hooks";

function SecondPage() {
  const { isToggle } = useAppSelector((state) => state.toggle);

  // return <div className={`relative h-screen bg-primary-1 ${!isToggle ? `hidden` : `null`}`}></div>;
}

export default SecondPage;

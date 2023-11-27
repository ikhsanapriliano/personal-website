import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setToggle } from "../../store/slice/ToggleSlice";

function Toggle() {
  const dispatch = useAppDispatch();
  const { isToggle } = useAppSelector((state) => state.toggle);

  return (
    <button
      onClick={() => {
        dispatch(setToggle());
      }}
      className={`flex w-[70px] bg-white rounded-full p-1 mt-4 z-50 ${isToggle ? `bg-primary-2 duration-700` : `null`}`}
    >
      <div className={`w-7 h-7 bg-primary-3 rounded-full ${isToggle ? `ml-8 duration-700` : `null`}`} />
    </button>
  );
}

export default Toggle;

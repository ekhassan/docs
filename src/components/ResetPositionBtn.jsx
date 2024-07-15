import React from "react";
import { GrPowerReset } from "react-icons/gr";

function ResetPositionBtn() {
  return (
    <>
      <div onClick={()=>{
        window.location.reload()
      }} className="flex items-center justify-center h-10 w-10 absolute top-[90%] left-[95%] rounded-full bg-zinc-200" >
        <GrPowerReset size="1.1em" />
      </div>
    </>
  );
}

export default ResetPositionBtn;

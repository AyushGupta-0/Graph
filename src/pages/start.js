import { Link } from "react-router-dom";

import { useState } from "react";

const Start = () => {
    return (
      <div className="bg-white w-[395px] h-[842px] overflow-hidden text-left text-sm text-white font-beausite-classic">
        <div className="absolute top-[377px] left-[227px] w-[109px] h-14">
          <div className="absolute top-[0px] left-[300px] w-[109px] h-14">
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-main-void-600 shadow-[0px_10px_48px_rgba(0,_0,_0,_0.06)] w-[109px] h-14" />
            <div className="absolute top-[16px] left-[22px] w-16 h-6">
              <Link to="report"><div className="text-white absolute top-[4px] left-[20px] leading-[16px] font-semibold">
                Print
              </div></Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Start;
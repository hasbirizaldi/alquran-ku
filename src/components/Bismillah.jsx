import React from "react";

const Bismillah = ({ detailSurah }) => {
  return (
    <div className={`${detailSurah.number === 1 ? "hidden" : "block"} bg-white mt-10 border-wrapper box-shadow-ku w-[100%] pt-4 flex justify-center items-center `}>
      <img src="/img/bismillah.png" alt="Bismillah" className="w-80" />
    </div>
  );
};

export default Bismillah;

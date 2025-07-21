import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { namaSurahIndonesia } from "../lib/api";

const HeaderSurah = ({ detailSurah }) => {
  return (
    <div className="relative bg-white w-[100%] border-wrapper box-shadow-ku flex flex-col items-center font-extrabold pb-5 pt-16 animasi-2">
      <div className="flex items-center mb-4">
        <h1 className="text-4xl amiri-bold mb-1">{detailSurah.name}</h1>
      </div>
      <div className="flex flex-row gap-1 items-center justify-center mb-1 ">
        <h1 className="text-xl">{detailSurah.englishName}</h1>
        <h1 className="text-xl italic">( {namaSurahIndonesia[detailSurah.number]})</h1>
      </div>
      <div>
        <h1 className="text-base">
          {detailSurah.revelationType === "Meccan" ? "Mekah" : "Madinah"} - {detailSurah.numberOfAyahs} ayat
        </h1>
      </div>
    </div>
  );
};

export default HeaderSurah;

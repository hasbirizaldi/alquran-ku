import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Link } from "react-router-dom";

const DaftarSurahsButton = () => {
  return (
    <>
      <Link to="/" className="fixed lg:top-[70px] top-[62px] flex flex-row justify-center items-center bg-white  text-green-700 cursor-pointer lg:px-2 px-1 box-shadow-btn py-1 rounded-l-full hover:brightness-125 hover:scale-[1.01]">
        <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 28 }} />
        <p className="text-base lg:font-semibold lg:ml-1">Daftar Surah</p>
      </Link>
    </>
  );
};

export default DaftarSurahsButton;

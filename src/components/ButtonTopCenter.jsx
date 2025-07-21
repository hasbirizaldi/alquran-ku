import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const ButtonTopCenter = () => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <div className="flex items-center justify-center font-semibold  bg-white  text-green-700 cursor-pointer  px-2  box-shadow-btn py-1 rounded-l-full hover:brightness-125 hover:scale-[1.01]">
        <KeyboardDoubleArrowLeftIcon />
        <p>Prev</p>
      </div>
      <div className="flex items-center justify-center font-semibold  bg-white  text-green-700  px-2  box-shadow-btn py-1 rounded-sm ">
        <p>Jus ?</p>
      </div>
      <div className="flex items-center justify-center font-semibold bg-white  text-green-700 cursor-pointer  px-2  box-shadow-btn py-1 rounded-r-full hover:brightness-125 hover:scale-[1.01]">
        <p>Next</p>
        <KeyboardDoubleArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default ButtonTopCenter;

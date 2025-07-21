import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const RightButton = () => {
  return (
    <div>
      <div className=" bg-white text-green-700 w-8 h-8 flex justify-center items-center rounded-full  box-shadow-btn hover:brightness-125 cursor-pointer hover:scale-[1.01]">
        <SettingsOutlinedIcon sx={{ fontSize: 24 }} />
      </div>
    </div>
  );
};

export default RightButton;

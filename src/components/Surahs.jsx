import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModalOptions from "../components/ModalOptions";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Surahs = ({ ayah, onPlay, isPlaying, scrollAyahRef, arti, setShowModalId, showModalId }) => {
  const toggleModal = () => {
    setShowModalId((prev) => (prev === ayah.number ? null : ayah.number));
  };

  return (
    <div ref={scrollAyahRef} className={`${isPlaying ? "bg-orange-100 scale-[1.01]" : "bg-white"} relative border-wrapper box-shadow-ku w-[100%] direction-rtl overflow-hidden animasi-2`}>
      <div className="lg:px-9 px-4 pt-16">
        <div className="absolute flex flex-row justify-center items-center gap-2 left-3 top-4 cursor-pointer text-stone-700">
          <div className={`${isPlaying ? "block" : "hidden"} absolute left-16`}>
            <VolumeUpIcon sx={{ fontSize: 30 }} />
          </div>
          <div onClick={toggleModal} className="text-xl font-normal mr-4 hover:scale-110 transition-transform">
            <MoreVertIcon sx={{ fontSize: 30 }} className="animate-pulse text-green-700" />
          </div>
        </div>
        <ModalOptions
          ayahId={ayah.number}
          showModalId={showModalId}
          onPlay={(id) => {
            onPlay(id);
            setShowModalId(null); // tutup modal setelah play
          }}
        />
        <div className="max-w-[94%]">
          <span className="lg:text-4xl text-2xl lg:leading-[130px] leading-[60px]">{ayah.text}</span>
          <span className="absolute lg:mt-8 mt-3 lg:w-14 w-10 lg:h-14 h-10 ">
            <div className="relative w-full flex justify-center items-center  ">
              <img src="/img/border.png" alt="" className="object-contain" />
              <div className="absolute">
                <p className="lg:text-lg text-xs tracking-[0.03em] ">{ayah.numberInSurah.toLocaleString("ar-EG")}</p>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="w-full direction-ltr  lg:px-8 px-2 lg:pt-6 pt-2 lg:pb-6 pb-2">{arti && <p className="text-xl text-slate-900">{arti.ayahs.find((a) => a.number === ayah.number)?.text}</p>}</div>
    </div>
  );
};

export default Surahs;

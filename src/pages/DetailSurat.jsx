import { useParams } from "react-router-dom";
import { api } from "../lib/api";
import { useEffect, useRef, useState } from "react";
import HeaderSurah from "../components/HeaderSurah";
import Surahs from "../components/Surahs";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import DaftarSurahsButton from "../components/DaftarSurahsButton";
import ButtonTopCenter from "../components/ButtonTopCenter";
import Forward10Icon from "@mui/icons-material/Forward10";
import Replay10Icon from "@mui/icons-material/Replay10";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const DetailSurat = () => {
  const { id } = useParams();
  const [detailSurah, setDetailSurah] = useState(null);
  const audioRef = useRef(new Audio());
  const [currentPlayingId, setCurrentPlayingId] = useState(null);
  const scrollAyahRef = useRef({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [arti, setArti] = useState();
  const [showModalId, setShowModalId] = useState(null);

  const detailSuratById = async () => {
    try {
      const response = await api.get(`/surah/${id}/ar.alafasy`);
      const data = await response.data.data;
      if (response.status === 200) {
        setDetailSurah(data);
        // console.log("detail", data);
      }
    } catch (error) {
      console.log("Gagal mengambil detail surat:", error);
    }
  };

  const artiSuratById = async () => {
    try {
      const response = await api.get(`/surah/${id}/id.indonesian`);
      const data = await response.data.data;
      if (response.status === 200) {
        setArti(data);
        // console.log("arti", data);
      }
    } catch (error) {
      console.log("Gagal mengambil detail surat:", error);
    }
  };

  const handleCloseAudio = () => {
    audioRef.current.pause();
    audioRef.current.src = "";
    setCurrentPlayingId(null);
    setIsPlaying(false);
  };
  const handleToggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleForward10 = () => {
    audioRef.current.currentTime += 10;
  };
  const handleRewind10 = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
  };

  const handlePlay = (ayahId) => {
    const ayah = detailSurah.ayahs.find((a) => a.number === ayahId);
    if (!ayah) return;

    audioRef.current.pause();
    audioRef.current.src = ayah.audioSecondary;
    audioRef.current.play();
    setCurrentPlayingId(ayahId);
    setIsPlaying(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    detailSuratById();
    artiSuratById();
  }, [id]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      const currentIndex = detailSurah.ayahs.findIndex((a) => a.number === currentPlayingId);
      const nextAyah = detailSurah.ayahs[currentIndex + 1];

      if (nextAyah) {
        handlePlay(nextAyah.number);
      } else {
        setCurrentPlayingId(null);
        setIsPlaying(false);
      }
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentPlayingId, detailSurah]);

  // Scroll ke ayat yang sedang diputar
  useEffect(() => {
    if (currentPlayingId && scrollAyahRef.current[currentPlayingId]) {
      scrollAyahRef.current[currentPlayingId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentPlayingId]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.src = "";
    };
  }, []);

  if (!detailSurah) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <div className="custom-loader"></div>
      </div>
    );
  }
  return (
    <>
      {/* <ButtonTopCenter /> */}
      <div className="relative flex justify-between items-center">
        <DaftarSurahsButton />
      </div>
      <div className="lg:px-[160px] py-8">
        <div className=" py-5 rounded-lg amiri-regular ">
          <div className="flex flex-col items-center justify-center">
            <HeaderSurah detailSurah={detailSurah} />
            {/* <Bismillah detailSurah={detailSurah} /> */}
          </div>
          <div className="flex flex-col gap-6 mt-10">
            {detailSurah.ayahs.map((ayah) => (
              <Surahs
                key={ayah.number}
                ayah={ayah}
                arti={arti}
                onPlay={handlePlay}
                isPlaying={currentPlayingId === ayah.number}
                scrollAyahRef={(el) => (scrollAyahRef.current[ayah.number] = el)}
                setShowModalId={setShowModalId}
                showModalId={showModalId}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={`bg-red-100 flex items-center shadow-top opacity-90 h-14 w-full left-0 fixed bottom-0 z-10 duration-300 ease-in-out ${currentPlayingId ? "translate-y-0" : "translate-y-40 "}`}>
        <div className="absolute left-0 bottom-0 lg:w-60 w-36 h-14 bg-green-700 flex flex-row justify-start items-center text-white ">
          <img src="/public/img/logo2.png" alt="logo" className="w-14" />
          <div className=" flex-col leading-5 flex">
            <h2 className="text-base  amiri-bold lg:block hidden">Al Quran Ku</h2>
            <h3 className="text-sm amiri-regular flex lg:flex-row flex-col lg:gap-4 gap-1">
              <p>{detailSurah.englishName}</p>
              <p>
                {detailSurah.ayahs.find((a) => a.number === currentPlayingId)?.numberInSurah}/{detailSurah.numberOfAyahs} Ayat
              </p>
            </h3>
          </div>
        </div>

        <div className="absolute lg:left-[25%] left-[40%] flex gap-6 justify-center items-center py-1 ">
          <div className="text-green-700 cursor-pointer">
            <Replay10Icon onClick={handleRewind10} sx={{ fontSize: 30 }} />
          </div>
          <div onClick={handleToggleAudio} className="flex justify-center items-center bg-white border-[3px] hover:brightness-125 border-green-700 text-green-700 h-11 w-11 rounded-full cursor-pointer">
            {isPlaying ? <PauseRoundedIcon sx={{ fontSize: 35 }} /> : <PlayArrowRoundedIcon sx={{ fontSize: 35 }} />}
          </div>
          <div className="text-green-700 cursor-pointer">
            <Forward10Icon onClick={handleForward10} sx={{ fontSize: 30 }} />
          </div>
        </div>
        <div className="lg:block hidden w-[40%] absolute bottom-0 right-[20%]">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              const newTime = parseFloat(e.target.value);
              audioRef.current.currentTime = newTime;
              setCurrentTime(newTime);
            }}
            className="w-full accent-green-700"
          />
          <div className="flex justify-between text-xs text-green-700">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div onClick={handleCloseAudio} className="absolute right-1 bottom-6 hover:brightness-125 text-green-700 cursor-pointer">
          <HighlightOffIcon sx={{ fontSize: 30 }} />
        </div>
      </div>
    </>
  );
};

export default DetailSurat;

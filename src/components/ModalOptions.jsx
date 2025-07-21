import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const ModalOptions = ({ ayahId, showModalId, onPlay }) => {
  if (showModalId !== ayahId) return null; // Tampilkan hanya kalau cocok

  return (
    <div className="absolute text-lg text-stone-700 direction-ltr left-14 top-1 box-shadow-ku pl-3 pr-8 z-50 py-3 rounded-lg bg-slate-50">
      <ul className="leading-10 cursor-pointer">
        <li onClick={() => onPlay && onPlay(ayahId)} className="hover:bg-slate-200 rounded-md pl-1 pr-3">
          <PlayArrowIcon sx={{ fontSize: 26 }} className="mr-2" />
          Putar Ayat
        </li>
        <li className="hover:bg-slate-200 rounded-md pl-1 pr-3">
          <BookmarkBorderIcon sx={{ fontSize: 26 }} className="mr-2" />
          Tandai Terakhir Baca
        </li>
        <li className="hover:bg-slate-200 rounded-md pl-1 pr-3">
          <ChatBubbleOutlineIcon sx={{ fontSize: 23 }} className="ml-1 mr-2" />
          Lihat Tafsir
        </li>
        <li className="hover:bg-slate-200 rounded-md pl-1 pr-3">
          <ContentCopyIcon sx={{ fontSize: 22 }} className="ml-1 mr-2" />
          Copy Teks
        </li>
      </ul>
    </div>
  );
};

export default ModalOptions;

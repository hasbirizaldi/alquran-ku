import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, namaSurahIndonesia } from "../lib/api";
const Home = () => {
  const [surats, setSurats] = useState([]);

  const fetchSurah = async () => {
    try {
      const response = await api.get("/surah");
      const datas = response.data.data;

      if (response.data.code === 200) {
        setSurats(datas);
        console.log(datas);
      }
    } catch (err) {
      console.log("error su", err);
    }
  };
  useEffect(() => {
    fetchSurah();
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-2 amiri-regular">Daftar Surah</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {surats.length ? (
          surats.map((data, index) => (
            <Link to={`/surah/${data.number}`} key={index} className={`relative animasi bg-white px-2 pb-6 pt-10 rounded-xl box-shadow-ku cursor-pointer duration-100 ease-in-out hover:shadow-xl border-wrapper`}>
              <div className="absolute right-2 top-2 flex justify-center items-center  ">
                <img src="/img/border.png" alt="" className="object-contain w-16" />
                <div className="absolute">
                  <p className="text-xl tracking-[0.03em] font-semibold">{data.number.toLocaleString("ar-EG")}</p>
                </div>
              </div>

              <div className="direction-rtl mt-8">
                <div className="flex flex-col amiri-bold">
                  <div className="flex justify-center flex-col items-center gap-2 ">
                    <h1 className="lg:text-4xl text-4xl"> {data.name} </h1>
                    <h1 className="text-xl ">({data.englishName})</h1>
                  </div>
                </div>
                <div className="font-semibold  text-base">
                  <p className="italic text-center ">
                    {namaSurahIndonesia[data.number]} - {data.numberOfAyahs} ayat
                  </p>
                  <p className="text-center">({data.revelationType === "Meccan" ? "Mekah" : "Madinah"})</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className=" w-[90vw] h-[50vh] flex justify-center items-center">
            <div className="custom-loader"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
